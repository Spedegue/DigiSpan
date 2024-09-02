import styled from "@emotion/styled";

export const StyledCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    min-height: 600px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-btns {
    gap: 32px;
    margin-block: 48px;
  }
`;

export const CarouselButton = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  height: ${({ isSelected }) => (isSelected ? 32 : 24)}px;
  aspect-ratio: 1;
  border-radius: 50vw;
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primary : theme.color.surfaceAlt};
`;
