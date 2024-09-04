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

  .img-container {
    background-image: url("/spaniel_gradient.png");
    background-size: cover;
  }

  @media (max-width: 1024px) {
    .img-container {
      display: none;
    }
  }
`;
