import styled from "@emotion/styled";

export const StyledProjectGrid = styled.div`
  display: grid;
  gap: clamp(4px, 4%, 30px);
  grid-template-columns: repeat(3, 22vw);
  grid-template-rows: repeat(2, 22vw);
  width: fit-content;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;
