import React from "react";
import { StyledNavLinks } from "./NavLinks.styled";
import { NavLinksProps } from "./NavLinks.types";
import { NavLinkProps } from "@/components/atoms/NavLink/NavLink.types";
import NavLink from "@/components/atoms/NavLink/NavLink";

function NavLinks(props: NavLinksProps) {
  // hrefs currently set to '/' to prevent annoying routing to 404 page
  const links: Array<NavLinkProps> = [
    { label: "Services", href: "/" },
    { label: "Work", href: "/" },
    { label: "About", href: "/" },
    { label: "Blog", href: "/" },
    { label: "Contact", href: "/" },
  ];
  return (
    <StyledNavLinks>
      {links.map((linkProps) => (
        <NavLink {...linkProps} key={`navLink${linkProps.label}}`} />
      ))}
    </StyledNavLinks>
  );
}

export default NavLinks;
