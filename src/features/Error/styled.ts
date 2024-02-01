import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  margin-top: 150px;
  text-align: center;
  @media (max-width: 680px) {
    margin-top: 100px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 60px;
  }
`;

export const ErrorIcon = styled.img`
  margin: 0 auto;
  max-width: 120px;
  @media (max-width: 680px) {
    max-width: 80px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const ButtonLink = styled(NavLink)`
  background-color: ${({ theme }) => theme.errorButton};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  margin: 0 auto;
  max-width: 190px;
  padding: 16px 24px;
  text-decoration: none;
  &:hover {
    background-color: #003399;
  }
  @media (max-width: 680px) {
    font-size: 12px;
    font-weight: 500;
    padding: 12px 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
    padding: 8px 12px;
  }
`;
