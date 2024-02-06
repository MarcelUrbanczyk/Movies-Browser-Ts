import styled from "styled-components";
import PersonIcon from "./personIcon";
import ScreenplayIcon from "./screenplayIcon";

export const Wrapper = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.imagePlaceholder};
`;

const ImagePlaceholder = ({ isPerson }) => (
  <Wrapper>{isPerson ? <PersonIcon /> : <ScreenplayIcon />}</Wrapper>
);

export default ImagePlaceholder;
