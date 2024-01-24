import { ScreenplayListTileProps } from "../../../../features/types";
import {
  Poster,
  Tile,
  Frame,
  Title,
  Year,
  Rating,
  Score,
  Votes,
  GenreList,
  Genre,
  MobileWrapper,
  Wrapper,
} from "./styled";
import icon from "../../starIcon.png";
import { Star } from "../../starIcon";
import { getYear } from "../../getYear";
import {
  useGetMovieGenres,
  useGetShowGenres,
} from "../../../../features/useGetGenres";

const ScreenplayListTile = ({
  title,
  year,
  poster,
  rating,
  votes,
  genres,
}: ScreenplayListTileProps) => {
  const genreIds = useGetMovieGenres();
  console.log(genreIds);

  return (
    <Tile>
      <Frame>
        <Poster
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt={title}
        />
      </Frame>
      <Wrapper>
        <Title>{title}</Title>
        {year && <Year>{getYear(year)}</Year>}
        {genres && (
          <GenreList>
            {genres.map((genre) => (
              <Genre key={genre}>{genre}</Genre>
            ))}
          </GenreList>
        )}
        <Rating>
          {rating && votes ? (
            <>
              <Star src={icon} />
              <Score>{rating.toFixed(2)}</Score>
              <Votes>{votes} &nbsp;votes</Votes>
            </>
          ) : (
            <Votes>No votes yet</Votes>
          )}
        </Rating>
      </Wrapper>

      <MobileWrapper>
        <Title>{title}</Title>
        {year && <Year>{getYear(year)}</Year>}
        {genres && (
          <GenreList>
            {genres.map((genre) => (
              <Genre key={genre}>{genre}</Genre>
            ))}
          </GenreList>
        )}
        <Rating>
          {rating && votes ? (
            <>
              <Star src={icon} />
              <Score>{rating.toFixed(2)}</Score>
              <Votes>{votes} &nbsp;votes</Votes>
            </>
          ) : (
            <Votes>No votes yet</Votes>
          )}
        </Rating>
      </MobileWrapper>
    </Tile>
  );
};
export default ScreenplayListTile;
