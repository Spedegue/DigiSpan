import styled from "@emotion/styled";

export const StyledTabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.color.onBackground};
  position: relative;
  width: fit-content;
  //max-width: 80vw;
`;

export const TabUnderline = styled.span<{ selectedIndex: number }>`
  height: 3px;
  background: ${({ theme }) => theme.color.secondary};
  position: absolute;
  bottom: -2px;
  transition: left 0.3s ease-out;
  left: ${({ selectedIndex }) => selectedIndex * 190}px;
  width: 190px;

  @media (max-width: 970px) {
    width: 130px;
    left: ${({ selectedIndex }) => selectedIndex * 130}px;
  }
  @media (max-width: 640px) {
    width: 80px;
    left: ${({ selectedIndex }) => selectedIndex * 80}px;
  }
`;
