import { Header, Wrapper } from "./styled";
import MovieListTile from "../../../../common/Tiles/List/Screenplay";
import { ShowProps } from "../../../types";
import Main from "../../../../common/main";
import Pagination from "../../../Pagination";

const Success = ({ shows, totalShows, totalPages, query }) => {
  return (
    <>
      <Main>
        <Wrapper>
          <Header>
            {!query
              ? "Popular shows"
              : totalShows === 0 && query
              ? `Sorry, there are no results for "${query}"`
              : `Search results for "${query}" (${totalShows})`}
          </Header>
          {shows.map(
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
                isMovie={false}
                id={id}
              />
            )
          )}
        </Wrapper>
      </Main>
      {totalShows > 20 && <Pagination totalPages={totalPages} />}
    </>
  );
};

export default Success;
