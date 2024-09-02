import React from "react";
import { StyledLink } from "./Link.styled";
import { LinkProps } from "./Link.types";

function Link(props: LinkProps) {
  return <StyledLink {...props} />;
}

export default Link;
