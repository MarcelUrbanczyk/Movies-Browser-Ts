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
import { useHistory } from "react-router";
import { toHome, toMovies, toPeople, toShows } from "../../core/routes";
import { useState } from "react";

const Navigation = () => {
  const history = useHistory();

  const [search, setSearch] = useState("");

  const onInputChange = (target: HTMLInputElement) => {
    const searchParams = new URLSearchParams();
    if (target.value.trim() !== "") {
      searchParams.set("search", target.value);
    } else {
      searchParams.delete("search");
    }
    history.push({ search: searchParams.toString() });
  };

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
          <Input
            value={search}
            onChange={(event) => {
              event.preventDefault();
              setSearch(event.target.value);
              onInputChange(event.target);
            }}
            placeholder="Search for movies..."
          />
        </SearchBar>
      </Wrapper>
    </StyledNavigation>
  );
};

export default Navigation;
