import {
  GenreProps,
  ScreenplayListTileProps,
} from "../../../../features/types";
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
  Link,
} from "./styled";
import icon from "../../starIcon.png";
import { Star } from "../../starIcon";
import { getYear } from "../../getYear";
import { useQuery } from "@tanstack/react-query";
import { getShowGenres, getMovieGenres } from "../../../../features/getData";
import { filterGenres } from "../../filterGenres";
import { useEffect, useState } from "react";
import ImagePlaceholder from "../../imagePlaceholder";
import { toMovie, toShow } from "../../../../core/routes";
const ScreenplayListTile = ({
  title,
  year,
  poster,
  rating,
  votes,
  genres,
  isMovie,
  id,
}: ScreenplayListTileProps) => {
  const [genreList, setGenreList] = useState<GenreProps[]>([]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["genres"],
    queryFn: isMovie ? getMovieGenres : getShowGenres,
  });

  useEffect(() => {
    if (genres && data) {
      const filteredGenres = filterGenres(data, genres!);
      setGenreList(filteredGenres!);
    }
  }, [data]);
  return (
    <Link
      to={() => {
        isMovie ? toMovie(id) : toShow(id);
      }}
    >
      <Tile>
        <Frame>
          {poster ? (
            <Poster
              src={`https://image.tmdb.org/t/p/original/${poster}`}
              alt={title}
            />
          ) : (
            <ImagePlaceholder isPerson={false} />
          )}
        </Frame>
        <Wrapper>
          <Title>{title}</Title>
          {year && <Year>{getYear(year)}</Year>}
          {genreList && (
            <GenreList>
              {genreList.map((genre) => (
                <Genre key={genre.id}>{genre.name}</Genre>
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
          {genreList && (
            <GenreList>
              {genreList.map((genre) => (
                <Genre key={genre.id}>{genre.name}</Genre>
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
    </Link>
  );
};
export default ScreenplayListTile;
