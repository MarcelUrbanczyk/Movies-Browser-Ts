import { Frame, Name, Tile, Image, Link, Role } from "./styled";
import { PeopleTileProps } from "../../../../features/types";
import ImagePlaceholder from "../../imagePlaceholder";
import { toPerson } from "../../../../core/routes";

const PeopleListTile = ({ name, image, id, role }: PeopleTileProps) => (
  <Link to={`/people/${id}`}>
    <Tile>
      <Frame>
        {image ? (
          <Image src={`https://image.tmdb.org/t/p/original//${image}`} />
        ) : (
          <ImagePlaceholder isPerson={true} />
        )}
      </Frame>
      <Name>{name}</Name>
      {role && <Role>{role}</Role>}
    </Tile>
  </Link>
);

export default PeopleListTile;
