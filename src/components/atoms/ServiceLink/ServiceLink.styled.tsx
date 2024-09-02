import styled from "@emotion/styled";

export const StyledServiceLink = styled.li`
  color: ${({ theme }) => theme.color.onBackgroundAlt};
  font-weight: 600;
  position: relative;
  // Set width to fit-content so the hover caret will change it's x axis position depending on length of the word
  width: fit-content;
  height: fit-content;
  //  :hover {
  //    &:after {
  //      position: absolute;
  //      content: ">";
  //      background: ${({ theme }) => theme.color.onBackgroundAlt};
  //      color: ${({ theme }) => theme.color.onPrimary};
  //      padding: 4px;
  //      height: 1.6rem;
  //      aspect-ratio: 1;
  //      display: flex;
  //      align-items: center;
  //      justify-content: center;
  //      border-radius: 50vh;
  //      right: -40px;
  //      top: 50%;
  //      transform: translateY(-50%);
  //      font-size: 14px;
  //    }
  //  }
  //
`;

export const HoverIcon = styled.span`
  height: 1.8rem;
  width: 1.8rem;
  padding: 4px;
  box-sizing: border-box;
  right: -30px;
  position: absolute;
  background: ${({ theme }) => theme.color.onBackgroundAlt};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50vw;
  top: 50%;
  transform: translateY(-50%);
  > svg {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.color.onPrimary};
  }
`;
