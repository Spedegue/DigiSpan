import styled from "@emotion/styled";

export const StyledTabButtons = styled.div`
  display: flex;
  gap: 32px;
  width: fit-content;
`;

export const TabButton = styled.button<{ isDisabled: boolean }>`
  width: 64px;
  aspect-ratio: 1;
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.color.disabled : theme.color.primary};
  color: ${({ theme, isDisabled }) =>
    isDisabled ? theme.color.onBackgroundAlt : theme.color.onPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: scale 0.3s ease, background-color 0.3s ease;
  cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};
  border: none;
  outline: none;
  :hover {
    background: ${({ theme, isDisabled }) =>
      isDisabled ? theme.color.disabled : theme.color.secondary};
  }

  :active {
    scale: ${({ isDisabled }) => (isDisabled ? 1 : 0.9)};
  }
  svg {
    height: 22px;
  }
  cursor: pointer;
`;
