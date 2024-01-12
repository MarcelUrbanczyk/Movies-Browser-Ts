import React from "react";
import { Header, List } from "./styled";
import { movies } from "../../../common/movies";
import ListTile from "../../../common/Tiles/List";
import { MovieProps } from "../../../types/movieprops";
import Main from "../../../common/main";
import Pagination from "../../Pagination";

const MovieList = () => {
  return (
    <>
      <Main>
        <Header>Popular Movies</Header>
        <List>
          {movies.map(
            ({ title, year, poster, rating, votes, genres }: MovieProps) => (
              <ListTile
                title={title}
                year={year}
                poster={poster}
                rating={rating}
                votes={votes}
                genres={genres}
              />
            )
          )}
        </List>
      </Main>
      <Pagination />
    </>
  );
};

export default MovieList;
