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
import { useHistory, useLocation } from "react-router";
import { toHome, toMovies, toPeople, toShows } from "../../core/routes";
import { useEffect, useState } from "react";

const Navigation = () => {
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname;

  const onInputChange = (target: HTMLInputElement) => {
    const searchParams = new URLSearchParams();
    if (target.value.trim() !== "") {
      searchParams.set("search", target.value);
    } else {
      searchParams.delete("search");
    }
    history.push({ search: searchParams.toString() });
  };

  useEffect(() => {
    const placeholderString = path.split("/")[1];
    setSearch("");
    setInputPlaceholder(`Search for ${placeholderString}...`);
  }, [path]);

  const [search, setSearch] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState(
    `Search for ...` as string
  );

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
            placeholder={inputPlaceholder}
          />
        </SearchBar>
      </Wrapper>
    </StyledNavigation>
  );
};

export default Navigation;
