import { styled } from "styled-components";
export const Header = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin: 24px 0;
`;
