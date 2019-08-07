import * as React from "react";
import {
  View,
  Page,
  Navbar,
  Button,
  Panel,
  Icon,
  Link
} from "framework7-react";
import { UserInfo } from "../common/user-info";

export const GlobalNav = () => (
  <Panel left resizable className="global-nav">
    <View>
      <Page>
        <Navbar noShadow noHairline>
          <Button slot="nav-right" small panelClose iconF7="close" />
        </Navbar>
        <UserInfo user={{name: "Joey Tribbiani", address: "123 Back street, New York, NY", image: "http://fpoimg.com/50x50"}}/>
        {/* <TagContainer>{this.props.query.map(tag=><div key={tag}><Tag config={{label:tag, size:'small'}}/></div>)}</TagContainer>*/}
        <ul className="global-nav__menu">
          <li>
            <Link>
              <Icon f7="home" />
              Home
            </Link>
            <Link>
              <Icon f7="home" />
              View my cards
            </Link>
            <Link>
              <Icon f7="home" />
              Edit my profile
            </Link>
            <Link>
              <Icon f7="home" />
              One GS points
            </Link>
            <Link>
              <Icon f7="home" />
              About Louisa
            </Link>
            <Link>
              <Icon f7="home" />
              Contact Us
            </Link>
          </li>
        </ul>
      </Page>
    </View>
  </Panel>
);
