import { Frame, Name, Tile, Image, Link } from "./styled";
import { PeopleTileProps } from "../../../../features/types";
import ImagePlaceholder from "../../imagePlaceholder";
import { toPerson } from "../../../../core/routes";

const PeopleListTile = ({ name, image, id }: PeopleTileProps) => (
  <Link to={toPerson(id)}>
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
  </Link>
);

export default PeopleListTile;
