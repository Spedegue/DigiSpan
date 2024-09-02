import React, { useState, useEffect, ReactNode } from "react";
import styled from "@emotion/styled";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const StyledSection = styled.div`
  max-width: 100vw;
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

function Section(props: SectionProps) {
  return (
    <StyledSection className={props.className}>{props.children}</StyledSection>
  );
}

export default Section;
