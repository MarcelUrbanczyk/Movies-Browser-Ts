import React from "react";
import {
  Logo,
  Name,
  StyledNavLink,
  NavLinks,
  SearchBar,
  StyledNavigation,
  Wrapper,
  Input,
} from "./styled";
import Icon from "./icon";
import Loupe from "./loupe";
import { useLocation } from "react-router";
import { toHome, toMovies, toPeople, toShows } from "../../core/routes";

const Navigation = () => {
  const location = useLocation();
  return (
    <StyledNavigation>
      <Wrapper>
        <Logo to={toHome}>
          <Icon />
          <Name>Movies Browser</Name>
        </Logo>
        <NavLinks>
          <StyledNavLink to={toMovies}>Movies</StyledNavLink>
          <StyledNavLink to={toShows}>Shows</StyledNavLink>
          <StyledNavLink to={toPeople}>People</StyledNavLink>
        </NavLinks>
        <SearchBar>
          <Loupe />
          <Input placeholder="Search for movies..." />
        </SearchBar>
      </Wrapper>
    </StyledNavigation>
  );
};

export default Navigation;
