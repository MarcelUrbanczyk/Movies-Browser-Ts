import { Header, Wrapper } from "./styled";
import MovieListTile from "../../../../common/Tiles/List/Movie";
import { MovieProps } from "../../../types";
import Main from "../../../../common/main";
import Pagination from "../../../Pagination";

const Success = ({ data }) => {
  return (
    <>
      <Main>
        <Wrapper>
          <Header>Popular Movies</Header>
          {data.map(
            ({
              title,
              release_date: year,
              poster_path: poster,
              vote_average: rating,
              vote_count: votes,
              genre_ids: genres,
              id,
            }: MovieProps) => (
              <MovieListTile
                key={id}
                title={title}
                year={year}
                poster={poster}
                rating={rating}
                votes={votes}
                genres={genres}
                id={id}
              />
            )
          )}
        </Wrapper>
      </Main>
      <Pagination />
    </>
  );
};

export default Success;
