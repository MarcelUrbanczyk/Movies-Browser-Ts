import { Header, Wrapper } from "./styled";
import Main from "../../../../common/main";
import Pagination from "../../../Pagination";
import PeopleListTile from "../../../../common/Tiles/List/People";
import { PeopleProps } from "../../../types";

const Success = ({ people, totalPeople, totalPages, query }) => {
  return (
    <>
      <Main>
        <Wrapper>
          <Header>
            {!query
              ? "Popular people"
              : totalPeople === 0 && query
              ? `Sorry, there are no results for "${query}"`
              : `Search results for "${query}" (${totalPeople})`}
          </Header>
          {people.map(({ name, profile_path: image, id }: PeopleProps) => (
            <PeopleListTile name={name} image={image} id={id} />
          ))}
        </Wrapper>
      </Main>
      {totalPeople > 20 && <Pagination totalPages={totalPages} />}
    </>
  );
};

export default Success;
