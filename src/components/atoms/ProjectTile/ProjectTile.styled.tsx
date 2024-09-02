import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StyledProjectTile = styled(motion.div)<{
  rows: number;
  cols: number;
}>`
  grid-row: span ${({ rows }) => rows};
  grid-column: span ${({ cols }) => cols};
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  img {
    transition: scale 0.5s ease-in-out;
  }
  :hover {
    img {
      scale: 1.1;
    }
  }

  @media (max-width: 450px) {
    width: 75vw;
    aspect-ratio: 1;
    //font-size: 1rem;

    h5 {
      font-size: 2rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;

export const TileOverlay = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 5px;
  background: transparent linear-gradient(180deg, #19293a1a 0%, #19293a 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${({ theme }) => theme.color.onPrimary};
  padding: 36px;
  * {
    font-weight: normal;
  }

  h5 {
    font-size: 2.4rem;
    line-height: 1.5;
    margin-block: 16px;
  }

  p {
    font-size: 1.8rem;
    line-height: 1.5;
  }

  span {
    font-size: 2rem;
    margin-top: 32px;
    :after {
      height: 2px;
      width: 100%;
    }

    :hover {
      color: ${({ theme }) => theme.color.secondary};
    }
  }
`;
