import { formatDate } from "../formatDate";
import {
  Portrait,
  Name,
  Description,
  ContentWrapper,
  Tile,
  MobileDescription,
  InfoList,
  InfoListWrapper,
  Term,
  Info,
} from "./styled";

const PersonPageTile = ({
  name,
  portrait,
  birthday,
  birthplace,
  biography,
}) => {
  return (
    <Tile>
      <Portrait
        src={`https://image.tmdb.org/t/p/original/${portrait}`}
        alt={name}
      />
      <ContentWrapper>
        <Name>{name}</Name>
        {birthday || birthplace ? (
          <InfoList>
            {birthday && (
              <InfoListWrapper>
                <Term>Birthday: &nbsp; </Term>
                <Info>{formatDate(birthday)}</Info>
              </InfoListWrapper>
            )}
            {birthplace && (
              <InfoListWrapper>
                <Term>Place of birth: &nbsp; </Term>
                <Info>{birthplace}</Info>
              </InfoListWrapper>
            )}
          </InfoList>
        ) : null}
        {biography && <Description>{biography}</Description>}
      </ContentWrapper>
      {biography && <MobileDescription>{biography}</MobileDescription>}
    </Tile>
  );
};

export default PersonPageTile;
