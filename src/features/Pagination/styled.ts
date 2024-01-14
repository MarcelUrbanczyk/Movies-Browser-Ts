import { styled, css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  margin: 0 0 80px 0;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.pagination.active};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.textPrimary};
  &:disabled {
    background-color: ${({ theme }) => theme.pagination.disabled};
    cursor: not-allowed;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
`;

export const Pages = styled.p`
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.textSecondary};
`;

export const Strong = styled.strong`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`;
