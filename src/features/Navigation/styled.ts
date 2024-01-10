import { styled } from "styled-components";

export const StyledNavigation = styled.nav`
  background-color: #18181b;
  height: 94px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border: 1px solid #fff;
  color: #fff;
  list-style: none;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;
