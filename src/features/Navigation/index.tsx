import React from "react";
import {
  IconWrapper,
  Logo,
  Name,
  NavLink,
  NavLinks,
  StyledNavigation,
  Wrapper,
} from "./styled";
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
      <NavLinks>
        <NavLink>Movies</NavLink>
        <NavLink>People</NavLink>
      </NavLinks>
    </Wrapper>
  </StyledNavigation>
);

export default Navigation;
