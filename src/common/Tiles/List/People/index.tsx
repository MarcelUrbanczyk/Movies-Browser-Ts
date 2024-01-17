import { PeopleProps } from "../../../../types/PeopleProps";
import { Frame, Name, Tile, Image } from "./styled";
import { PeopleTileProps } from "../../../../types/PeopleProps";

const PeopleListTile = ({ name, image }: PeopleTileProps) => (
  <Tile>
    <Frame>
      <Image src={`https://image.tmdb.org/t/p/original//${image}`} />
    </Frame>
    <Name>{name}</Name>
  </Tile>
);

export default PeopleListTile;
