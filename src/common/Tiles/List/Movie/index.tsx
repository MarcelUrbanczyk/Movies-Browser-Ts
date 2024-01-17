import React from "react";
import { MovieListTileProps, MovieProps } from "../../../../types/MovieProps";
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

const MovieListTile = ({
  title,
  year,
  poster,
  rating,
  votes,
  genres,
}: MovieListTileProps) => (
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
            <Genre>{genre}</Genre>
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
            <Genre>{genre}</Genre>
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
export default MovieListTile;
