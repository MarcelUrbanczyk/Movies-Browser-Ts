import { Header, Wrapper } from "./styled";
import ScreenplayListTile from "../../../../common/Tiles/List/Screenplay";
import { MovieProps } from "../../../types";
import Main from "../../../../common/main";
import Pagination from "../../../Pagination";

const Success = ({ movies, query, totalMovies, totalPages }) => {
  return (
    <>
      <Main>
        <Wrapper>
          <Header>
            {!query
              ? "Popular movies"
              : totalMovies === 0 && query
              ? `Sorry, there are no results for "${query}"`
              : `Search results for "${query}" (${totalMovies})`}
          </Header>
          {movies.map(
            ({
              title,
              release_date: year,
              poster_path: poster,
              vote_average: rating,
              vote_count: votes,
              genre_ids: genres,
              id,
            }: MovieProps) => (
              <ScreenplayListTile
                key={id}
                title={title}
                year={year}
                poster={poster}
                rating={rating}
                votes={votes}
                genres={genres}
                id={id}
                isMovie
              />
            )
          )}
        </Wrapper>
      </Main>
      {movies.length > 20 && <Pagination totalPages={totalPages} />}
    </>
  );
};

export default Success;
