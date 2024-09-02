import React, { useState } from "react";
import { StyledBurgerButton } from "./BurgerButton.styled";
import { BurgerButtonProps } from "./BurgerButton.types";

function BurgerButton(props: BurgerButtonProps) {
  const { isOpen, setIsOpen } = props;

  return (
    <StyledBurgerButton
      isOpen={isOpen}
      onClick={() => setIsOpen((isOpen) => !isOpen)}
      role={"button"}
    >
      <svg viewBox="0 0 100 100">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <rect
              height={10}
              width={80}
              x={10}
              rx={5}
              y={i * 30 + 15}
              key={`burgerLine${i}`}
            ></rect>
          ))}
      </svg>
    </StyledBurgerButton>
  );
}

export default BurgerButton;
