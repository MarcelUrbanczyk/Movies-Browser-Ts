import { styled } from "styled-components";

export const Tile = styled.article`
  padding: 16px;
  max-width: 208px;
  background-color: ${({ theme }) => theme.box};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: ${({ theme }) => theme.shadow};
  @media (max-width: 1220px) {
    max-width: 164px;
  }
  @media (max-width: 560px) {
    max-width: 136px;
    gap: 8px;
    padding: 8px;
  }
`;

export const Frame = styled.span`
  width: 176px;
  height: 231px;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  @media (max-width: 1220px) {
    width: 132px;
    height: 173px;
  }
  @media (max-width: 560px) {
    width: 120px;
    height: 178px;
  }
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  line-height: 130%;
  @media (max-width: 1220px) {
    font-size: 18px;
  }
  @media (max-width: 560px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  height: auto;
  width: 100%;
`;
