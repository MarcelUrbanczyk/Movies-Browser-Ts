import {
  Frame,
  Poster,
  Tile,
  ContentWrapper,
  Title,
  Year,
  InfoList,
  InfoListWrapper,
  Term,
  Info,
} from "./styled";
import { getYear } from "../../getYear";
import { formatDate } from "./formatDate";

const ScreenplayPageTile = ({ title, poster, date, production }) => {
  const productionCountries = production
    ?.map((country) => country.name)
    .join(", ");
  const shortProductionCountries = production
    ?.map((country) => country.iso_3166_1)
    .join(", ");
  return (
    <Tile>
      <Frame>
        <Poster
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt={title}
        />
      </Frame>
      <ContentWrapper>
        <Title>{title}</Title>
        {date && <Year>{getYear(date)}</Year>}
        {date || production ? (
          <InfoList>
            {production && (
              <InfoListWrapper>
                <Term>Production: &nbsp; </Term>
                <Info>{productionCountries}</Info>
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
      </ContentWrapper>
    </Tile>
  );
};

export default ScreenplayPageTile;
