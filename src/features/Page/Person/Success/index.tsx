import { useQuery } from "@tanstack/react-query";
import PersonPageTile from "../../../../common/Tiles/Page/Person";
import Main from "../../../../common/main";
import { getCredits } from "../../../getData";
import { Header, Wrapper } from "./styled";
import { MovieProps } from "../../../types";
import ScreenplayListTile from "../../../../common/Tiles/List/Screenplay";

const Success = ({ person }) => {
  const { data } = useQuery({
    queryKey: ["credits", person.id],
    queryFn: () => getCredits("person", person.id),
  });

  const cast = data?.cast || [];
  const crew = data?.crew || [];

  return (
    <Main>
      <PersonPageTile
        name={person.name}
        portrait={person.profile_path}
        birthday={person.birthday}
        birthplace={person.place_of_birth}
        biography={person.biography}
      />
      <Header>
        {data?.cast.length > 0 ? `Movies - cast (${data?.cast.length})` : ""}
      </Header>
      <Wrapper>
        {cast.map(
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
      <Header>
        {data?.crew.length > 0 ? `Movies - crew (${data?.crew.length})` : ""}
      </Header>
      <Wrapper>
        {crew.map(
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
  );
};

export default Success;
