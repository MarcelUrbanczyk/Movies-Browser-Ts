import Arrow from "./arrowIcon";
import { Button, Pages, Wrapper, Strong } from "./styled";

const Pagination = () => {
  const page: number = 1;
  return (
    <Wrapper>
      <Button disabled={page === 1}>
        <Arrow $disabled={page === 1} />
        &nbsp;First
      </Button>
      <Button disabled={page === 1}>
        <Arrow $disabled={page === 1} />
        &nbsp;Previous
      </Button>
      <Pages>
        Page <Strong>1</Strong> of <Strong>500</Strong>
      </Pages>
      <Button disabled={page === 500}>
        Next &nbsp;
        <Arrow $flipped $disabled={page === 500} />
      </Button>
      <Button disabled={page === 500}>
        Last &nbsp;
        <Arrow $flipped $disabled={page === 500} />
      </Button>
    </Wrapper>
  );
};

export default Pagination;
