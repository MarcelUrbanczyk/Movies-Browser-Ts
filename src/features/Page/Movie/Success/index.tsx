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
      />
    </Main>
  );
};

export default Success;
