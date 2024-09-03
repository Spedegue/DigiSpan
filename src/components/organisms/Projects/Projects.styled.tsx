import styled from "@emotion/styled";
import Section from "@/layouts/Section";

export const StyledProjects = styled(Section)`
  padding-block: 7vw;
  margin-inline: 15%;
  flex-direction: column;
  gap: 55px;

  display: flex;

  .btn-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    .btn-container {
      flex-direction: column-reverse;
      gap: 16px;
    }
  }
`;
