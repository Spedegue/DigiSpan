import React from "react";
import { StyledTabs, TabUnderline } from "./Tabs.styled";
import { TabsProps } from "./Tabs.types";
import Tab from "@/components/atoms/Tab/Tab";
import { ProjectCategory } from "@/enums/ProjectCategory";

function Tabs({ selectedTab, setSelectedTab, tabs }: TabsProps) {
  const selectedIndex = tabs.map((t) => t.title).indexOf(selectedTab);

  return (
    <StyledTabs>
      {tabs.map((tab) => (
        <Tab
          {...tab}
          key={`tab${tab.title}`}
          isSelected={selectedTab === tab.title}
          onClick={() => setSelectedTab(tab.title as ProjectCategory)}
        />
      ))}
    </StyledTabs>
  );
}

export default Tabs;
