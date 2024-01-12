import React from "react";
import { Header, Wrapper } from "./styled";
import { movies } from "../../../common/movies";
import ListTile from "../../../common/Tiles/List";
import { MovieProps } from "../../../types/movieprops";
import Main from "../../../common/main";
import Pagination from "../../Pagination";

const MovieList = () => {
  return (
    <>
      <Main>
        <Wrapper>
          <Header>Popular Movies</Header>
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
        </Wrapper>
      </Main>
      <Pagination />
    </>
  );
};

export default MovieList;
