import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  margin-top: 150px;
  gap: 24px;
`;

export const ErrorIcon = styled.img`
  max-width: 120px;
  margin: 0 auto;
`;

export const ErrorHeader = styled.h2`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
`;

export const ErrorMesssage = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 22px;
  font-weight: 500;
  line-height: 130%;
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
`;
