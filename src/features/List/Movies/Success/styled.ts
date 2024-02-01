import { styled } from "styled-components";
export const Header = styled.h2`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 36px;
  font-weight: 600;
  grid-column: span 4;
  line-height: 120%;
  margin: 0;
  @media (max-width: 1446px) {
    font-size: 30px;
    grid-column: span 3;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-column: span 4;
  }
  @media (max-width: 1140px) {
    grid-column: span 3;
  }
  @media (max-width: 850px) {
    grid-column: span 2;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
    grid-column: span 1;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, 1fr);
  justify-content: center;
  margin: 24px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 12px;
  }
`;
