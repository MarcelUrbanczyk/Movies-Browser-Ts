import { styled } from "styled-components";

export const Tile = styled.article`
  padding: 16px;
  background-color: ${({ theme }) => theme.box};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const Frame = styled.span`
  width: 176px;
  height: 231px;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  line-height: 130%;
`;

export const Image = styled.img`
  height: auto;
  width: 100%;
`;
