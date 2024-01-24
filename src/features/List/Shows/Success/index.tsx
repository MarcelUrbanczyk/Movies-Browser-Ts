import { Header, Wrapper } from "./styled";
import MovieListTile from "../../../../common/Tiles/List/Screenplay";
import { ShowProps } from "../../../types";
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
              name: name,
              first_air_date: year,
              poster_path: poster,
              vote_average: rating,
              vote_count: votes,
              genre_ids: genres,
              id,
            }: ShowProps) => (
              <MovieListTile
                key={id}
                title={name}
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
