import React from "react";
import {
  IconWrapper,
  Logo,
  Name,
  NavLink,
  NavLinks,
  SearchBar,
  StyledNavigation,
  Wrapper,
  Input,
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
      <SearchBar>
        <Input placeholder="Search for movies..." />
      </SearchBar>
    </Wrapper>
  </StyledNavigation>
);

export default Navigation;
