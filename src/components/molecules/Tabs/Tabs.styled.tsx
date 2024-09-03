import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StyledTabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.color.onBackground};
  position: relative;
  width: clamp(300px, 760px, 75vw);
`;

export const TabUnderline = styled(motion.span)`
  height: 3px;
  background: ${({ theme }) => theme.color.secondary};
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  transition: left 0.3s ease-out;
`;
