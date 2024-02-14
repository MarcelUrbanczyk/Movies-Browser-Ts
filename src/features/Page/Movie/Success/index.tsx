import ScreenplayPageTile from "../../../../common/Tiles/Page/Screenplay";
import Main from "../../../../common/main";

const Success = ({ movie }) => {
  return (
    <Main>
      <ScreenplayPageTile
        title={movie.title}
        poster={movie.poster_path}
        date={movie.release_date}
        production={movie.production_countries}
        description={movie.overview}
        genres={movie.genres}
        score={movie.vote_average}
        votes={movie.vote_count}
      />
    </Main>
  );
};

export default Success;
