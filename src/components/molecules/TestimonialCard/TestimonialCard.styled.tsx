import styled from "@emotion/styled";

export const StyledTestimonialCard = styled.div<{
  isSelected: boolean;
  position: number;
}>`
  height: 748px;
  width: 536px;
  position: absolute;
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.color.primary : theme.color.surfaceAlt};
  z-index: ${({ isSelected }) => (isSelected ? 2 : -1)};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.onPrimary : theme.color.onBackgroundAlt};
  padding: 60px;
  text-align: center;
  transform: translateX(
    ${({ position }) => (position === 0 ? 0 : position === 1 ? 100 : -100)}%
  );
  border-radius: 10px;
  box-shadow: ${({ isSelected }) =>
    isSelected ? "0px 0px 20px #19293a80" : ""};

  scale: ${({ isSelected }) => (isSelected ? 1 : 0.86)};
  transition: transform 0.8s ease-out, scale 0.8s ease-in;

  top: 64px;

  blockquote {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 3rem;
      //font-size: ${({ isSelected }) => (isSelected ? "3rem" : "2.6rem")};
      line-height: 1.5;
      font-style: italic;
      font-weight: 600;
      position: relative;
      z-index: 1;

      :before,
      :after {
        content: "“";
        font-size: 15.4rem;
        font-family: "itc-avant-garde-gothic-pro", sans-serif;
        z-index: -1;
        color: ${({ isSelected, theme }) =>
          isSelected
            ? theme.color.subtleOnPrimary
            : theme.color.subtleOnSurfaceAlt};
        position: absolute;
      }

      :before {
        top: -80px;
        left: 10px;
      }

      :after {
        content: "”";
        bottom: -140px;
        right: -20px;
      }
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cite,
  > span {
    font-size: 2.1rem;
    line-height: 3.8rem;
  }

  > cite {
    font-weight: bold;
  }
`;

export const Name = styled.cite``;
export const Role = styled.span`
  font-size: 2.1rem;
  line-height: 3.8rem;
`;
