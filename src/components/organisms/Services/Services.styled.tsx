import styled from "@emotion/styled";
import Section from "@/layouts/Section";

export const StyledServices = styled(Section)`
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.onSurface};
  display: flex;

  > div {
    padding-block: 170px;
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
  }

  .service-link-container {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    padding-inline: 40px;
    justify-content: flex-start;
  }

  @media (max-width: 1024px) {
    > div {
      padding-block: 40px;
    }

    .service-link-container {
      flex-direction: column;
      justify-content: center;
    }
  }
`;
