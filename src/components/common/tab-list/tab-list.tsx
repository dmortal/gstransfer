/**
  TabList component - wrapper for F7 Tabs generating tabs with content based on provided dataset
  @param {Object[]} tabs
*/
import * as React from "react";
import { Toolbar, Link, Tabs, Tab } from "framework7-react";

export interface ITabListProps {
  tabs: { title: string; content?: any }[];
}

export const TabList = (props: ITabListProps) => (
  <>
    <Toolbar tabbar top noShadow>
      {props.tabs.map((tab, ind) => (
        <Link
          key={ind}
          tabLink={`#__${tab.title.replace(/\W/g, "")}`}
          tabLinkActive={ind === 0}
        >
          {tab.title}
        </Link>
      ))}
    </Toolbar>
    <Tabs>
      {props.tabs.map((tab, ind) => {
        const Component = tab.content;
        return (
          <Tab
            key={ind}
            id={`__${tab.title.replace(/\W/g, "")}`}
            tabActive={ind === 0}
            className="page-content"
          >
            <Component />
          </Tab>
        );
      })}
    </Tabs>
  </>
);
