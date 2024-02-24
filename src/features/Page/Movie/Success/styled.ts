import { styled } from "styled-components";

export const Header = styled.h2`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
  margin-top: 24px;
  @media (max-width: 1446px) {
    font-size: 30px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin: 24px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 12px;
  }
`;
