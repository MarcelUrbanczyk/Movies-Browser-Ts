import { styled } from "styled-components";

export const Tile = styled.article`
  background-color: ${({ theme }) => theme.box};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 40px;
  display: flex;
  gap: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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
    grid-column: 1;
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
  gap: 20px;
`;

export const Title = styled.p`
  font-size: 36px;
  font-weight: 600;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const Year = styled.p`
  font-size: 22px;
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
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const Info = styled.dd`
  font-size: 18px;
  line-height: 1.2;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 160%;
`;

export const GenreTag = styled.div`
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.alternateBox};
  font-size: 14px;
`;

export const Genres = styled.span`
  display: flex;
  gap: 10px;
`;

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Star = styled.img`
  width: 24px;
  height: 24px;
`;
