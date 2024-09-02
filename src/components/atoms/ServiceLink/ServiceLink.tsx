import React, { useState } from "react";
import { HoverIcon, StyledServiceLink } from "./ServiceLink.styled";
import { ServiceLinkProps } from "./ServiceLink.types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function ServiceLink(props: ServiceLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { label, href } = props;
  return (
    <StyledServiceLink>
      <Link
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href={href}
      >
        {label}
      </Link>
      {isHovered && (
        <HoverIcon>
          <FontAwesomeIcon icon={faChevronRight} />
        </HoverIcon>
      )}
    </StyledServiceLink>
  );
}

export default ServiceLink;
