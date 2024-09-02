import React from "react";
import { StyledNavLink } from "./NavLink.styled";
import { NavLinkProps } from "./NavLink.types";
import Link from "next/link";

function NavLink(props: NavLinkProps) {
  const { href } = props;

  return (
    <StyledNavLink className={props.className}>
      <Link href={href}>{props.label}</Link>
    </StyledNavLink>
  );
}

export default NavLink;
