import React from "react";
import { StyledTab } from "./Tab.styled";
import { TabProps } from "./Tab.types";

function Tab(props: TabProps) {
  const { isSelected, title, onClick } = props;
  return (
    <StyledTab isSelected={isSelected} onClick={onClick}>
      {title}
    </StyledTab>
  );
}

export default Tab;
