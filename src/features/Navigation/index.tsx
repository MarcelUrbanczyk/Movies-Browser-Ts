import React from "react";
import {
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
import Loupe from "./loupe";

const Navigation = () => (
  <StyledNavigation>
    <Wrapper>
      <Logo>
        <Icon />
        <Name>Movies Browser</Name>
      </Logo>
      <NavLinks>
        <NavLink>Movies</NavLink>
        <NavLink>Shows</NavLink>
        <NavLink>People</NavLink>
      </NavLinks>
      <SearchBar>
        <Loupe />
        <Input placeholder="Search for movies..." />
      </SearchBar>
    </Wrapper>
  </StyledNavigation>
);

export default Navigation;
