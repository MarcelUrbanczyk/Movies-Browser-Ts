import { Button, Pages, Wrapper, Strong } from "./styled";

const Pagination = () => {
  return (
    <Wrapper>
      <Button>First</Button>
      <Button>Previous</Button>
      <Pages>
        Page <Strong>1</Strong> of <Strong>500</Strong>
      </Pages>
      <Button>Next</Button>
      <Button>Last</Button>
    </Wrapper>
  );
};

export default Pagination;
