import { styled } from "styled-components";

export const Tile = styled.article`
  background-color: ${({ theme }) => theme.box};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Frame = styled.span`
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  width: 292px;
  height: 434px;
  margin: 0 0 8px 0;
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
`;

export const Year = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 16px;
  line-height: 150%;
`;

export const Rating = styled.span`
  display: flex;
  gap: 12px;
  margin-top: auto;
`;

export const Score = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 600;
  line-height: 150%;
`;

export const Votes = styled(Year)``;

export const GenreList = styled.span`
  display: flex;
  gap: 8px;
`;

export const Genre = styled.div`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.alternateBox};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
`;
