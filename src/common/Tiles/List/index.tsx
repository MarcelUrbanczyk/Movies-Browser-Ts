import React from "react";
import { MovieProps } from "../../../types/movieprops";
import {
  Poster,
  Tile,
  Frame,
  Title,
  Year,
  Rating,
  IconWrapper,
  Score,
  Votes,
  GenreList,
  Genre,
} from "./styled";
import Star from "../starIcon";

const ListTile = ({
  title,
  year,
  poster,
  rating,
  votes,
  genres,
}: MovieProps) => (
  <Tile>
    <Frame>
      <Poster
        src={`https://image.tmdb.org/t/p/original/${poster}`}
        alt={title}
      />
    </Frame>
    <Title>{title}</Title>
    {year && <Year>{year}</Year>}
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
          <IconWrapper>
            <Star />
          </IconWrapper>
          <Score>{rating}</Score>
          <Votes>{votes} &nbsp;votes</Votes>
        </>
      ) : (
        <Votes>No votes yet</Votes>
      )}
    </Rating>
  </Tile>
);
export default ListTile;
