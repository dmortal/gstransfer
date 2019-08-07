import * as React from 'react';
import './flip-card.scss';

export interface IFlipCardProps{
  front: any,
  back: any
}
export interface IFlipCardState{
  isFlipped: boolean
}
export class FlipCard extends React.Component<IFlipCardProps,IFlipCardState>{
  constructor(props: IFlipCardProps){
    super(props);
    this.state={
      isFlipped: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  private handleOnClick(){
    this.setState({isFlipped: !this.state.isFlipped});
  }
  render(){
    return (<article className={`flip-card${this.state.isFlipped?' flip-card--flipped':''}`} onClick={this.handleOnClick}>
      <div className="flip-card__flipper">
        <div className="flip-card__front">{this.props.front}</div>
        <div className="flip-card__back">{this.props.back}</div>
      </div>
    </article>);
  }

};
