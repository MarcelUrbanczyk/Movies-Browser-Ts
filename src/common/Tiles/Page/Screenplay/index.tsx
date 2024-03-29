import {
  Poster,
  Tile,
  ContentWrapper,
  Title,
  Year,
  InfoList,
  InfoListWrapper,
  Term,
  Info,
  Description,
  Genres,
  GenreTag,
  Rating,
  Score,
  Votes,
  Scale,
  MobileDescription,
} from "./styled";
import { PageStar } from "../../starIcon";
import { getYear } from "../../getYear";
import { formatDate } from "../formatDate";
import icon from "../../../../assets/starIcon.png";

const ScreenplayPageTile = ({
  title,
  poster,
  date,
  production,
  description,
  genres,
  score,
  votes,
}) => {
  const productionCountries = production
    ?.map((country) => country.name)
    .join(", ");
  const shortProductionCountries = production
    ?.map((country) => country.iso_3166_1)
    .join(", ");
  return (
    <Tile>
      <Poster
        src={`https://image.tmdb.org/t/p/original/${poster}`}
        alt={title}
      />
      <ContentWrapper>
        <Title>{title}</Title>
        {date && <Year>{getYear(date)}</Year>}
        {date || production ? (
          <InfoList>
            {production && (
              <InfoListWrapper>
                <Term>Production: &nbsp; </Term>
                <Info $country>{productionCountries}</Info>
                <Info $shortCountry>{shortProductionCountries}</Info>
              </InfoListWrapper>
            )}
            {date && (
              <InfoListWrapper>
                <Term>Release date: &nbsp; </Term>
                <Info>{formatDate(date)}</Info>
              </InfoListWrapper>
            )}
          </InfoList>
        ) : null}
        {genres && (
          <Genres>
            {genres.map((genre) => (
              <GenreTag key={genre.id}>{genre.name}</GenreTag>
            ))}
          </Genres>
        )}
        {score && votes ? (
          <Rating>
            <PageStar src={icon} />
            <Score>{score.toFixed(2)}</Score>
            <Votes>
              <Scale>/10</Scale> &nbsp; {votes} votes
            </Votes>
          </Rating>
        ) : (
          "No votes yet"
        )}
        {description && <Description>{description}</Description>}
      </ContentWrapper>
      {description && <MobileDescription>{description}</MobileDescription>}
    </Tile>
  );
};

export default ScreenplayPageTile;
