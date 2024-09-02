import { Dispatch, SetStateAction } from "react";

export interface BurgerButtonProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
