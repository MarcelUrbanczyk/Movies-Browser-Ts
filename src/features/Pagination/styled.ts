import { styled, css } from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  justify-content: center;
  margin: 0 0 80px 0;
`;

export const Button = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.pagination.active};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  color: ${({ theme }) => theme.textPrimary};
  cursor: pointer;
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  &:disabled {
    background-color: ${({ theme }) => theme.pagination.disabled};
    cursor: not-allowed;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 4px;
    padding: 8px 12px;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const Pages = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 16px;
  line-height: 150%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
  }
`;

export const Strong = styled.strong`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
  }
`;

export const MobileArrowWrapper = styled.span`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`;
