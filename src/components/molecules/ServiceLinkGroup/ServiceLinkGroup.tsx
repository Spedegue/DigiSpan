import React from "react";
import { StyledServiceLinkGroup } from "./ServiceLinkGroup.styled";
import { ServiceLinkGroupProps } from "./ServiceLinkGroup.types";
import ServiceLink from "@/components/atoms/ServiceLink/ServiceLink";

function ServiceLinkGroup(props: ServiceLinkGroupProps) {
  return (
    <StyledServiceLinkGroup>
      <h4>{props.title.toUpperCase()}</h4>
      <ul>
        {props.links.map((link) => (
          <ServiceLink {...link} key={link.label} />
        ))}
      </ul>
    </StyledServiceLinkGroup>
  );
}

export default ServiceLinkGroup;
