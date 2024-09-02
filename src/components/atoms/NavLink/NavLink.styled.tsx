import styled from "@emotion/styled";

export const StyledNavLink = styled.span`
  font-size: 2rem;
  position: relative;
  transition: color 0.2s ease-out;
  color: ${({ theme }) => theme.color.onPrimary};
  font-weight: 600;
  user-select: none;
  width: fit-content;
  padding-block: 4px;
  :after {
    cursor: pointer;
    content: "";
    position: absolute;
    width: 0;
    height: 4px;
    background: currentColor;
    bottom: 0;
    left: 0;
    transition: width 0.2s ease;
  }
  :hover {
    :after {
      width: 100%;
    }
  }

  :active {
    color: ${({ theme }) => theme.color.secondaryAlt};
  }
`;
