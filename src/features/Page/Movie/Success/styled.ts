import { styled } from "styled-components";

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
