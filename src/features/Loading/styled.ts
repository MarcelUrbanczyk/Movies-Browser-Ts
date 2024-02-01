import { styled, keyframes } from "styled-components";

export const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 220px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 100px;
  }
`;

export const LoadingIcon = styled.img`
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 35px;
    width: 35px;
  }
`;
