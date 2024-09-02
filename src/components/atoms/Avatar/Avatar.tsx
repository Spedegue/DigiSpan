import React from "react";
import { StyledAvatar } from "./Avatar.styled";
import { AvatarProps } from "./Avatar.types";
import Image from "next/image";

function Avatar(props: AvatarProps) {
  return (
    <StyledAvatar>
      <Image src={props.src} alt={props.alt} fill={true} />
    </StyledAvatar>
  );
}

export default Avatar;
