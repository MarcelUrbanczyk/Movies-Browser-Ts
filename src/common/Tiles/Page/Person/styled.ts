import { styled } from "styled-components";

export const Tile = styled.article`
  background-color: ${({ theme }) => theme.box};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 40px;
  display: flex;
  gap: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px;
    gap: 20px;
  }
`;

export const Portrait = styled.img`
  height: 464px;
  border-radius: ${({ theme }) => theme.borderRadius};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    height: 326px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 169px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 6px;
  }
`;

export const Name = styled.p`
  font-size: 36px;
  font-weight: 600;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const Year = styled.p`
  font-size: 18px;
  line-height: 1.2;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 160%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 18px;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;
export const MobileDescription = styled.p`
  display: none;
  font-size: 18px;
  grid-column: span 2;
  @media (max-width: 640px) {
    display: block;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const InfoList = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
`;

export const InfoListWrapper = styled.span`
  display: flex;
  flex-wrap: wrap;
`;

export const Term = styled.dt`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 18px;
  line-height: 1.2;
  white-space: nowrap;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const Info = styled.dd`
  font-size: 18px;
  line-height: 1.2;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;
