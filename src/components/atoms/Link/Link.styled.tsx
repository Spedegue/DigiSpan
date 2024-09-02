import styled from "@emotion/styled";
import NavLink from "@/components/atoms/NavLink/NavLink";

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.onBackground};

  :after {
    width: 100%;
    color: ${({ theme }) => theme.color.secondary};
    transition-delay: 0.15s;
  }
  :before {
    cursor: pointer;
    content: "";
    position: absolute;
    width: 0;
    height: 4px;
    background: ${({ theme }) => theme.color.onBackgroundAlt};
    bottom: 0;
    right: 0;
    transition: width 0.2s ease;
    transition-delay: 0s;
    transform-origin: right;
  }
  :hover {
    color: ${({ theme }) => theme.color.secondary};

    :after {
      width: 0;
      transition-delay: 0s;
    }

    :before {
      transition-delay: 0.15s;
      width: 100%;
    }
  }
`;
