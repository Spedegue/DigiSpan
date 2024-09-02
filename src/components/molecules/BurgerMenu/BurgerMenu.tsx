import React from "react";
import { StyledBurgerMenu } from "./BurgerMenu.styled";
import { BurgerMenuProps } from "./BurgerMenu.types";
import { AnimatePresence } from "framer-motion";
import NavLinks from "@/components/molecules/NavLinks/NavLinks";

function BurgerMenu({ isOpen }: BurgerMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <StyledBurgerMenu
          initial={{ x: "100%" }}
          animate={{ x: 1 }}
          exit={{ x: "100%" }}
        >
          <NavLinks />
        </StyledBurgerMenu>
      )}
    </AnimatePresence>
  );
}

export default BurgerMenu;
