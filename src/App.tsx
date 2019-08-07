import * as React from "react";
import { App, View, Page, Navbar, Button } from "framework7-react";
import { TabList } from "./components/common/tab-list";
import { CardSwipe } from "./components/common/card-swipe";
import { GlobalNav } from "./components/global-nav";

const mockTabs = [
  {
    title: "Received",
    content: () => (
      <CardSwipe
        cards={[
          <div className="mockCard"><h3>Card one</h3><p>Itaque earum rerum hic tenetur a sapiente delectus. Itaque earum rerum hic tenetur a sapiente delectus. Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>,
          <div className="mockCard"><h3>Card two</h3><p>Itaque earum rerum hic tenetur a sapiente delectus. Itaque earum rerum hic tenetur a sapiente delectus. Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>,
          <div className="mockCard"><h3>Card three</h3><p>Itaque earum rerum hic tenetur a sapiente delectus. Itaque earum rerum hic tenetur a sapiente delectus. Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>,
          <div className="mockCard"><h3>Card four</h3><p>Itaque earum rerum hic tenetur a sapiente delectus. Itaque earum rerum hic tenetur a sapiente delectus. Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>,
          <div className="mockCard"><h3>Card five</h3><p>Itaque earum rerum hic tenetur a sapiente delectus. Itaque earum rerum hic tenetur a sapiente delectus. Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>,
          <div className="mockCard"><h3>Card six</h3><p>Itaque earum rerum hic tenetur a sapiente delectus. Itaque earum rerum hic tenetur a sapiente delectus. Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>,
          <div className="mockCard"><h3>Card seven</h3><p>Itaque earum rerum hic tenetur a sapiente delectus. Itaque earum rerum hic tenetur a sapiente delectus. Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
        ]}
      />
    )
  },
  { title: "Sent", content: () => <p>Second tab content</p> }
];
export default () => (
  // Main Framework7 App component where we pass Framework7 params
  <App params={{ theme: "auto", name: "My App", id: "com.demoapp.test" }}>
    <GlobalNav/>
    {/* Your main view, should have "main" prop */}
    <View main>
      {/*  Initial Page */}
      <Page pageContent={false}>
        {/* Top Navbar */}
        <Navbar title="Louisa sandbox">
           <Button slot="nav-left" small panelToggle="left" className="display-flex" iconF7="bars"/>
        </Navbar>
        <TabList tabs={mockTabs} />
      </Page>
    </View>
  </App>
);
