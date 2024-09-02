import styled from "@emotion/styled";

export const StyledSectionHeader = styled.h2`
  display: flex;
  flex-direction: column;
  font-family: "itc-avant-garde-gothic-pro", sans-serif;
  font-size: 4.8rem;
  font-weight: bold;
  line-height: 1.18;

  span:first-of-type {
    color: ${({ theme }) => theme.color.onSurface};
  }
  span:last-of-type:not(:first-of-type) {
    color: ${({ theme }) => theme.color.onBackgroundAlt};
  }

  @media (max-width: 420px) {
    font-size: 3rem;
  }
`;
