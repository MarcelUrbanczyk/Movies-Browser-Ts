import React from "react";
import { Header, Wrapper } from "./styled";
import { people } from "../../../common/people";
import Main from "../../../common/main";
import Pagination from "../../Pagination";
import { PeopleProps } from "../../../types/PeopleProps";
import PeopleListTile from "../../../common/Tiles/List/People";

const PeopleList = () => {
  return (
    <>
      <Main>
        <Wrapper>
          <Header>Popular People</Header>
          {people.map(({ name, image }: PeopleProps) => (
            <PeopleListTile name={name} image={image} />
          ))}
        </Wrapper>
      </Main>
      <Pagination />
    </>
  );
};

export default PeopleList;
