import styled from "@emotion/styled";

const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(350px, 430px, 80%);
  gap: 55px;

  .slogan {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.secondary};
    letter-spacing: 0.8px;
    opacity: 0.75;
    //line-height: 7.2rem;
  }

  .info {
    font-size: 2.1rem;
    color: ${({ theme }) => theme.color.onBackgroundAlt};
    line-height: 3.8rem;
  }
`;

export default SectionInfo;
