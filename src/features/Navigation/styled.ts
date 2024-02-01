import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.navigation.background};
  display: flex;
  height: 94px;
  justify-content: center;
  padding: 0 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    height: 160px;
  }
  @media (max-width: 655px) {
    height: 130px;
  }
  @media (max-width: 460px) {
    height: 180px;
  }
`;

export const Logo = styled(NavLink)`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 12px;
  max-height: 40px;
  text-decoration: none;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.navigation.logo};
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1.5px;
  line-height: 40px;
  @media (max-width: 655px) {
    font-size: 16px;
  }
  @media (max-width: 460px) {
    font-size: 20px;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 80px;
  width: 1368px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    flex-wrap: wrap;
    gap: 24px;
    justify-content: space-between;

    @media (max-width: 655px) {
      flex-wrap: wrap;
      gap: 18px;
      justify-content: space-between;
    }
    @media (max-width: 460px) {
      flex-direction: column;
      width: 300px;
    }
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  height: 48px;
  padding: 8px 24px;
  align-items: center;
  border-radius: 24px;
  color: #fff;
  list-style: none;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 655px) {
    height: 34px;
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 460px) {
    font-size: 12px;
  }
  &:hover,
  &.active {
    border: 2px solid #fff;
  }
`;

export const SearchBar = styled.div`
  width: 432px;
  height: 48px;
  border-radius: 33px;
  border: 1px solid #e4e6f0;
  background: #fff;
  padding: 8px 20px;
  margin-left: auto;
  display: flex;
  gap: 16px;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    flex-basis: 100%;
  }
  @media (max-width: 655px) {
    height: 44px;
    padding: 8px 12px;
    align-items: normal;
    gap: 8px;
  }
  @media (max-width: 460px) {
    height: 40px;
    width: 100%;
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.navigation.text};
  font-size: 16px;
  line-height: 150%;
  outline: none;
  @media (max-width: 460px) {
    font-size: 13px;
    line-height: 130%;
  }
`;
