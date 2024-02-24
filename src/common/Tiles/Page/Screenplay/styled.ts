import { styled, css } from "styled-components";

type InfoProps = {
  $country?: boolean;
  $shortCountry?: boolean;
};

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
    grid-template-columns: 1fr 3fr;
    padding: 16px;
    gap: 20px;
  }
`;

export const Poster = styled.img`
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
    color: ${({ theme }) => theme.textSecondary};
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

export const Info = styled.dd<InfoProps>`
  font-size: 18px;
  line-height: 1.2;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
  ${({ $country }) =>
    $country &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
      }
    `}
  ${({ $shortCountry }) =>
    $shortCountry &&
    css`
      display: none;
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: block;
      }
    `}
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
    padding: 4px 6px;
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

export const Scale = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const Score = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const Votes = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  margin: auto 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
    color: ${({ theme }) => theme.textSecondary};
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
