import React from "react";
import { Header, List } from "./styled";
import { movies } from "../../../common/movies";
import ListTile from "../../../common/Tiles/List";
import { MovieProps } from "../../../types/movieprops";

const MovieList = () => {
  return (
    <>
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
    </>
  );
};

export default MovieList;
