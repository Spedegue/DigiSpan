import React from "react";
import { StyledTab } from "./Tab.styled";
import { TabProps } from "./Tab.types";
import { TabUnderline } from "@/components/molecules/Tabs/Tabs.styled";

function Tab(props: TabProps) {
  const { isSelected, title, onClick } = props;
  return (
    <StyledTab isSelected={isSelected} onClick={onClick}>
      {title}
      {isSelected && <TabUnderline layoutId={"tabUnderline"} />}
    </StyledTab>
  );
}

export default Tab;
