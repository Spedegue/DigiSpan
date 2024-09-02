import styled from "@emotion/styled";

const time = 200;

export const StyledBurgerButton = styled.div<{ isOpen: boolean }>`
  cursor: pointer;
   height: 50px;
   aspect-ratio: 1;
  > svg {
    fill: ${({ theme }) => theme.color.onBackground};
    rect {
      transition: 
         scale ${time}ms ease-out ${({ isOpen }) => (isOpen ? 0 : time * 2)}ms,
         y ${time}ms ease-out ${time}ms,
         rotate ${time}ms ease-out ${({ isOpen }) =>
  !isOpen ? 0 : time * 2}ms;
    
      stroke-linecap: round;
      stroke: ${({ theme }) => theme.color.onBackground};
      transform-origin: center;

      &:nth-of-type(odd) {
        rotate: ${({ isOpen }) => (isOpen ? "45deg" : 0)};
        y: ${({ isOpen }) => (isOpen ? 45 : "")};
      }
       
      &:nth-of-type(2) {
         scale: ${({ isOpen }) => (isOpen ? "0 1" : 1)};
      }

      &:nth-of-type(3) {
        rotate: ${({ isOpen }) => (isOpen ? "-45deg" : 0)};
      }
      }
    }
  }
`;
