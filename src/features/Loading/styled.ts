import { styled, keyframes } from "styled-components";

export const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 220px;
  @media (max-width: 560px) {
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

  @media (max-width: 560px) {
    width: 35px;
    height: 35px;
  }
`;
