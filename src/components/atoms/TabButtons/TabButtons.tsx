import React from "react";
import { StyledTabButtons, TabButton } from "./TabButtons.styled";
import { TabButtonsProps } from "./TabButtons.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function TabButtons(props: TabButtonsProps) {
  return (
    <StyledTabButtons>
      <TabButton isDisabled={!props.canPrevious} onClick={props.onPrevious}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </TabButton>
      <TabButton isDisabled={!props.canNext} onClick={props.onNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </TabButton>
    </StyledTabButtons>
  );
}

export default TabButtons;
