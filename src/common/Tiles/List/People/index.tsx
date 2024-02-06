import { Frame, Name, Tile, Image } from "./styled";
import { PeopleTileProps } from "../../../../features/types";
import ImagePlaceholder from "../../imagePlaceholder";

const PeopleListTile = ({ name, image }: PeopleTileProps) => (
  <Tile>
    <Frame>
      {image ? (
        <Image src={`https://image.tmdb.org/t/p/original//${image}`} />
      ) : (
        <ImagePlaceholder isPerson={true} />
      )}
    </Frame>
    <Name>{name}</Name>
  </Tile>
);

export default PeopleListTile;
