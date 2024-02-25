import { useQuery } from "@tanstack/react-query";
import ScreenplayPageTile from "../../../../common/Tiles/Page/Screenplay";
import Main from "../../../../common/main";
import { getCredits } from "../../../getData";
import { PeopleProps } from "../../../types";
import { Header, Wrapper } from "./styled";
import PeopleListTile from "../../../../common/Tiles/List/People";

const Success = ({ show }) => {
  const { data } = useQuery({
    queryKey: ["credits", show.id],
    queryFn: () => getCredits("tv", show.id),
  });

  const cast = data?.cast || [];
  const crew = data?.crew || [];

  return (
    <Main>
      <ScreenplayPageTile
        title={show.name}
        poster={show.poster_path}
        date={show.first_air_date}
        production={show.production_countries}
        description={show.overview}
        genres={show.genres}
        score={show.vote_average}
        votes={show.vote_count}
      />

      {cast.length > 0 ? (
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

      {crew.length > 0 ? (
        <>
          <Header>Crew</Header>
          <Wrapper>
            {crew.map(({ name, profile_path: image, id, job }: PeopleProps) => (
              <PeopleListTile name={name} image={image} id={id} role={job} />
            ))}
          </Wrapper>
        </>
      ) : null}
    </Main>
  );
};

export default Success;
