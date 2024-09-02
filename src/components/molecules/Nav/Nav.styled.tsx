import styled from "@emotion/styled";

export const StyledNav = styled.nav<{ hide: boolean; hideBackground: boolean }>`
  display: flex;
  position: fixed;
  width: 100%;
  height: 120px;
  align-items: center;
  justify-content: space-between;
  background: ${({ hideBackground, theme }) =>
    hideBackground ? "transparent" : theme.color.primary50};

  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  pointer-events: ${({ hide }) => (hide ? "none" : "auto")};
  opacity: ${({ hide }) => (hide ? 0 : 1)};
  transition: opacity 0.3s ease-out, background 0.3s ease-out;

  > div {
    width: 50%;
    box-sizing: border-box;
    padding-inline: 9%;
  }

  .burger-wrapper {
    display: none;
    width: fit-content;
  }

  @media (max-width: 1024px) {
    .burger-wrapper {
      display: block;
    }

    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.onBackgroundAlt} !important;
  }
`;
