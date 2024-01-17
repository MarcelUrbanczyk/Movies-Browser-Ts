import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 150px;
  gap: 24px;
  @media (max-width: 680px) {
    margin-top: 100px;
  }
  @media (max-width: 560px) {
    margin-top: 60px;
  }
`;

export const ErrorIcon = styled.img`
  max-width: 120px;
  margin: 0 auto;
  @media (max-width: 680px) {
    max-width: 80px;
  }
  @media (max-width: 560px) {
    max-width: 60px;
  }
`;

export const ErrorHeader = styled.h2`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
  @media (max-width: 680px) {
    font-size: 30px;
  }
  @media (max-width: 560px) {
    font-size: 20px;
  }
`;

export const ErrorMesssage = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 22px;
  font-weight: 500;
  line-height: 130%;
  @media (max-width: 680px) {
    font-size: 18px;
  }
  @media (max-width: 560px) {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  padding: 16px 24px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.errorButton};
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  border: none;
  max-width: 190px;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    background-color: #003399;
  }
  @media (max-width: 680px) {
    padding: 12px 16px;
    font-size: 12px;
    font-weight: 500;
  }
  @media (max-width: 560px) {
    padding: 8px 12px;
    font-size: 10px;
  }
`;
