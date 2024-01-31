import { Header, Wrapper } from "./styled";
import ScreenplayListTile from "../../../../common/Tiles/List/Screenplay";
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
      <Pagination />
    </>
  );
};

export default Success;
