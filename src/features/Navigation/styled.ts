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
`;

export const IconWrapper = styled.span`
  width: 40px;
  height: 40px;
`;
