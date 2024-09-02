import React, { useState } from "react";
import { StyledProjectTile, TileOverlay } from "./ProjectTile.styled";
import { ProjectTileProps } from "./ProjectTile.types";
import Image from "next/image";
import NavLink from "@/components/atoms/NavLink/NavLink";

function ProjectTile(props: ProjectTileProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <StyledProjectTile
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      exit={{ scaleY: 0, opacity: 0 }}
      rows={props.rows}
      cols={props.cols}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={props.imgSrc} fill={true} alt={""} />
      {isHovered && (
        <TileOverlay>
          <h5>{props.companyName}</h5>
          <p>{props.details}</p>
          <NavLink href={props.href} label={"Full project"} />
        </TileOverlay>
      )}
    </StyledProjectTile>
  );
}

export default ProjectTile;
