import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StyledBurgerMenu = styled(motion.div)`
  position: fixed;
  top: 120px;
  bottom: 0;
  right: 0;
  max-width: 100vw;
  min-width: 50vw;
  padding: 24px;
  background: ${({ theme }) => theme.color.background};

  > ul {
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    gap: 16px;

    * {
      color: ${({ theme }) => theme.color.onBackgroundAlt};
    }
  }
`;
