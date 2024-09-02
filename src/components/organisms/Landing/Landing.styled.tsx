import styled from "@emotion/styled";
import Section from "@/layouts/Section";

export const StyledLanding = styled(Section)`
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.onBackground};
  min-height: 100vh;
  > div {
    flex: 1;
    position: relative;
  }

  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1024px) {
    .img-container {
      display: none;
    }
  }
`;
