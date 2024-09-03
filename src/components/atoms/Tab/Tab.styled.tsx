import styled from "@emotion/styled";

export const StyledTab = styled.div<{ isSelected?: boolean }>`
  width: 25%;
  font-size: 2rem;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: ${({ theme }) => theme.color.onBackground};
  cursor: pointer;
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
  transition: scale 0.2s ease-in-out;
  user-select: none;
  position: relative;

  :hover {
    scale: 1.05;
  }

  @media (max-width: 970px) {
    font-size: 1.6rem;
  }
  @media (max-width: 640px) {
    font-size: 1.4rem;
  }
`;
