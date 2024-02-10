import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  all: unset;
  cursor: pointer;
`;

export const Tile = styled.article`
  padding: 16px;
  max-width: 208px;
  background-color: ${({ theme }) => theme.box};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  box-shadow: ${({ theme }) => theme.shadow};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    max-width: 164px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 136px;
    gap: 8px;
    padding: 8px;
  }
`;

export const Frame = styled.span`
  width: 176px;
  height: 231px;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 132px;
    height: 173px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 120px;
    height: 178px;
  }
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  line-height: 130%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  height: auto;
  width: 100%;
`;
