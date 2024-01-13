import { styled } from "styled-components";
export const Header = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
  grid-column: span 4;
  @media (max-width: 1446px) {
    grid-column: span 3;
    font-size: 30px;
  }
  @media (max-width: 1220px) {
    grid-column: span 4;
  }
  @media (max-width: 1140px) {
    grid-column: span 3;
  }
  @media (max-width: 850px) {
    grid-column: span 2;
  }
  @media (max-width: 560px) {
    grid-column: span 1;
    font-size: 18px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  justify-content: center;
  gap: 24px;
  margin: 24px 0;
  @media (max-width: 560px) {
    gap: 12px;
  }
`;
