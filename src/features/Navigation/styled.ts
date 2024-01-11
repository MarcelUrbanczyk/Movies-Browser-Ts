import { styled } from "styled-components";

export const StyledNavigation = styled.nav`
  background-color: #18181b;
  height: 94px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  @media (max-width: 1220px) {
    height: 160px;
  }
  @media (max-width: 655px) {
    height: 130px;
  }
  @media (max-width: 460px) {
    height: 180px;
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 12px;
  max-height: 40px;
  align-items: center;
  cursor: pointer;
`;

export const Name = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -1.5px;
  color: #fff;
  @media (max-width: 655px) {
    font-size: 16px;
  }
  @media (max-width: 460px) {
    font-size: 20px;
  }
`;

export const Wrapper = styled.div`
  width: 1368px;
  display: flex;
  gap: 80px;
  align-items: center;
  @media (max-width: 1220px) {
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;

    @media (max-width: 655px) {
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 18px;
    }
    @media (max-width: 460px) {
      flex-direction: column;
      width: 300px;
    }
  }
`;

export const IconWrapper = styled.span`
  width: 40px;
  height: 40px;
  @media (max-width: 655px) {
    height: 35px;
    width: 35px;
  }
  @media (max-width: 460px) {
    height: 30px;
    width: 30px;
  }
`;

export const LoupeWrapper = styled.span`
  width: 24px;
  height: 24px;
  margin: auto;
  @media (max-width: 655px) {
    height: 20px;
    width: 20px;
  }
  @media (max-width: 460px) {
    height: 16px;
    width: 16px;
    margin: 0;
  }
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
  @media (max-width: 655px) {
    height: 34px;
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 460px) {
    font-size: 12px;
  }
  &:hover,
  &:active {
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
  @media (max-width: 1220px) {
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
  color: #7e839a;
  font-size: 16px;
  line-height: 150%;
  outline: none;
  @media (max-width: 460px) {
    font-size: 13px;
    line-height: 130%;
  }
`;
