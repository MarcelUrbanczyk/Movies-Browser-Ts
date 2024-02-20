import { useQuery } from "@tanstack/react-query";
import ScreenplayPageTile from "../../../../common/Tiles/Page/Screenplay";
import Main from "../../../../common/main";
import { getCredits } from "../../../getData";
import { PeopleProps } from "../../../types";
import { Header, Wrapper } from "./styled";
import PeopleListTile from "../../../../common/Tiles/List/People";

const Success = ({ movie }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["credits", movie.id],
    queryFn: () => getCredits("movie", movie.id),
  });

  const cast = data?.cast || [];
  const crew = data?.crew || [];

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

      {cast ? (
        <>
          <Header>Cast</Header>
          <Wrapper>
            {cast.map(
              ({ name, profile_path: image, id, character }: PeopleProps) => (
                <PeopleListTile
                  name={name}
                  image={image}
                  id={id}
                  role={character}
                />
              )
            )}
          </Wrapper>
        </>
      ) : null}
    </Main>
  );
};

export default Success;
