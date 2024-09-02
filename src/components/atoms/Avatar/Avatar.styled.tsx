import styled from "@emotion/styled";

export const StyledAvatar = styled.div`
  height: 128px;
  width: 128px;
  border-radius: 50vw;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.onPrimary};
`;
