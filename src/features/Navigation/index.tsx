import React from "react";
import { IconWrapper, Logo, Name, StyledNavigation, Wrapper } from "./styled";
import Icon from "./icon";

const Navigation = () => (
  <StyledNavigation>
    <Wrapper>
      <Logo>
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <Name>Movies Browser</Name>
      </Logo>
    </Wrapper>
  </StyledNavigation>
);

export default Navigation;
