import { styled } from "styled-components";

const Main = styled.main`
  max-width: 1448px;
  margin: 56px auto 40px auto;
  padding: 0 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 0 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 12px;
  }
`;

export default Main;
