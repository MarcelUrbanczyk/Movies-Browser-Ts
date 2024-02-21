import { styled } from "styled-components";

export const Tile = styled.article`
  background-color: ${({ theme }) => theme.box};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px;
    gap: 20px;
  }
`;

export const Frame = styled.span`
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  min-width: 312px;
  height: 464px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    min-width: 220px;
    height: 326px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 114px;
    height: 169px;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.p`
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
    font-size: 12px;
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

export const GenreTag = styled.div`
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.alternateBox};
  font-size: 14px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 6px 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4px 12px;
    font-size: 10px;
  }
`;

export const Genres = styled.span`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Rating = styled.span`
  display: flex;
  gap: 8px;
`;

export const Score = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
  }
`;

export const Votes = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  margin: auto 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
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
