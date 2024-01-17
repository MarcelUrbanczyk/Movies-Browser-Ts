import { styled } from "styled-components";

export const Tile = styled.article`
  background-color: ${({ theme }) => theme.box};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 16px;
  display: flex;
  flex-direction: column;

  max-width: 324px;
  @media (max-width: 1220px) {
    max-width: 245px;
    padding: 12px;
  }
  @media (max-width: 560px) {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;
    max-width: none;
  }
`;

export const Frame = styled.span`
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  width: 292px;
  height: 434px;
  @media (max-width: 1220px) {
    width: 220px;
    height: 326px;
  }
  @media (max-width: 560px) {
    grid-column: 1;
    width: 114px;
    height: 169px;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 130%;
  color: ${({ theme }) => theme.textPrimary};
  @media (max-width: 1220px) {
    font-size: 18px;
  }
`;

export const Year = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 16px;
  line-height: 150%;
  @media (max-width: 1220px) {
    font-size: 14px;
  }
`;

export const Rating = styled.span`
  display: flex;
  gap: 12px;
  margin-top: auto;
  align-items: center;
  @media (max-width: 560px) {
    margin: 0;
  }
`;

export const Score = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 600;
  line-height: 150%;
  @media (max-width: 1220px) {
    font-size: 14px;
  }
`;

export const Votes = styled(Year)``;

export const GenreList = styled.span`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Genre = styled.div`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.alternateBox};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  @media (max-width: 1220px) {
    font-size: 12px;
    padding: 4px 8px;
  }
  @media (max-width: 560px) {
    font-size: 10px;
  }
`;

export const MobileWrapper = styled.span`
  display: none;
  flex-direction: column;
  grid-column: 2;
  gap: 8px;
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
  margin-top: 12px;
  @media (max-width: 560px) {
    display: none;
  }
`;
