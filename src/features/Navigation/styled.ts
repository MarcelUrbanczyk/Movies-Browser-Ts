import { styled } from "styled-components";

export const StyledNavigation = styled.nav`
  background-color: #18181b;
  height: 94px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`;

export const Logo = styled.div`
  display: flex;
  gap: 12px;
  max-height: 40px;
  cursor: pointer;
`;

export const Name = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -1.5px;
  color: #fff;
`;

export const Wrapper = styled.div`
  width: 1368px;
  display: flex;
  gap: 80px;
  align-items: center;
`;

export const IconWrapper = styled.span`
  width: 40px;
  height: 40px;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 16px;
`;

export const NavLink = styled.li`
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
  cursor: pointer;
  &:hover,
  &:active {
    border: 1px solid #fff;
  }
`;

export const SearchBar = styled.div`
  width: 432px;
  height: 48px;
  border-radius: 33px;
  border: 1px solid #e4e6f0;
  background: #fff;
  padding: 12px 24px;
  margin-left: auto;
  display: flex;
  gap: 16px;
  align-content: center;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  color: #7e839a;
  font-size: 16px;
  line-height: 150%;
  outline: none;
`;
