import { Header, Wrapper } from "./styled";
import Main from "../../../../common/main";
import Pagination from "../../../Pagination";
import PeopleListTile from "../../../../common/Tiles/List/People";
import { PeopleProps } from "../../../types";

const Success = ({ data }) => {
  return (
    <>
      <Main>
        <Wrapper>
          <Header>Popular People</Header>
          {data.map(({ name, profile_path: image }: PeopleProps) => (
            <PeopleListTile name={name} image={image} />
          ))}
        </Wrapper>
      </Main>
      <Pagination />
    </>
  );
};

export default Success;
