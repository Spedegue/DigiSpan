import React from "react";
import { StyledSectionHeader } from "./SectionHeader.styled";
import { SectionHeaderProps } from "./SectionHeader.types";

function SectionHeader(props: SectionHeaderProps) {
  return <StyledSectionHeader>{props.children}</StyledSectionHeader>;
}

export default SectionHeader;
