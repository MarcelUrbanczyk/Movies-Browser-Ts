import { Button, Pages, Wrapper, Strong } from "./styled";

const Pagination = () => {
  const page: number = 1;
  return (
    <Wrapper>
      <Button disabled={page === 1}>First</Button>
      <Button disabled={page === 1}>Previous</Button>
      <Pages>
        Page <Strong>1</Strong> of <Strong>500</Strong>
      </Pages>
      <Button disabled={page === 500}>Next</Button>
      <Button disabled={page === 500}>Last</Button>
    </Wrapper>
  );
};

export default Pagination;
