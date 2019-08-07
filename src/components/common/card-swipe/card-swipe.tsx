/**
  Card swipe component
  @param {JSX Element[]} cards - array of cards used for individual slides
*/
import * as React from "react";
import { Swiper } from "framework7-react";
import "./card-swipe.scss";

export interface ICardSwipeProps {
  cards: any[]
}
export interface ICardSwipeState {
  activeIndex: number,
  virtualData?: any
}

export class CardSwipe extends React.Component<
  ICardSwipeProps,
  ICardSwipeState
> {
  private swiperRef: any;
  constructor(props: ICardSwipeProps) {
    super(props);
    this.state = {
      activeIndex: 0,
      virtualData: {}
    };
    this.swiperRef = React.createRef();
    this.renderExternal = this.renderExternal.bind(this);
    this.renderVirtual = this.renderVirtual.bind(this);
    this.handleSlideChange = this.handleSlideChange.bind(this);
  }
  /**
    renderExternal - Swiper API driven update that provides current slide range
    @param {Object} data - data received from Swiper API indicating current slide range
  */
  private renderExternal(data:any){
    this.setState({virtualData: data});
  }
  /**
    renderVirtual - renders Swiper slides based on the current virtual range,
    relies on swiper reference to determine index of an active slide in relationship to the original dataset
  */
  private renderVirtual(){
    const {cards=[]} = this.props;
    const {activeIndex} = this.state;
    const res=[];
    const { to=0, from=0, offset} = this.state.virtualData;
    for(let i=from; i<=to; i++){
      // setting offset through style is important according to Swiper API
      res.push(<div key={i} className={'swiper-slide' + (i === activeIndex?' swiper-slide--active':'')} style={{left: `${offset}px`}}>{cards[i]}</div>);
    }
    return res;
  }
  private handleSlideChange(){
    this.setState({activeIndex: (this.swiperRef.current && this.swiperRef.current.swiper && this.swiperRef.current.swiper.activeIndex) || 0});
  }
  render() {
    const {cards } = this.props;
    const {activeIndex} = this.state;
    return (
      <>
      <Swiper
        ref={this.swiperRef}
        params={{
          virtual: {
            slides: cards,
            renderExternal: this.renderExternal
          },
          spaceBetween: 20,
          slidesPerView: 1.2,// Fractional value allows preview of previous/next slide
          centeredSlides: true,
          on:{
            slideChange: this.handleSlideChange
          }
        }}
      >
        {this.renderVirtual()}
      </Swiper>
      { cards.length && (
      <p className='card-swipe__count'>{activeIndex+1} of {cards.length}</p>
      )}
      </>
    );
  }
}
