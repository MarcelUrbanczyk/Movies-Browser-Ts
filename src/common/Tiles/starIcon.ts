import styled from "styled-components";

export const Star = styled.img`
  width: 20px;
  height: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 16px;
    height: 16px;
  }
`;
