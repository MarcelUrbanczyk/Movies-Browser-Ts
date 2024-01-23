import { Frame, Name, Tile, Image } from "./styled";
import { PeopleTileProps } from "../../../../features/types";

const PeopleListTile = ({ name, image }: PeopleTileProps) => (
  <Tile>
    <Frame>
      <Image src={`https://image.tmdb.org/t/p/original//${image}`} />
    </Frame>
    <Name>{name}</Name>
  </Tile>
);

export default PeopleListTile;
