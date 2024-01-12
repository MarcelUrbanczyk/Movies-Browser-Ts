import Arrow from "./arrowIcon";
import { Button, Pages, Wrapper, Strong, ArrowWrapper } from "./styled";

const Pagination = () => {
  const page: number = 1;
  return (
    <Wrapper>
      <Button disabled={page === 1}>
        <ArrowWrapper $disabled={page === 1}>
          <Arrow />
        </ArrowWrapper>
        &nbsp;First
      </Button>
      <Button disabled={page === 1}>
        <ArrowWrapper $disabled={page === 1}>
          <Arrow />
        </ArrowWrapper>
        &nbsp;Previous
      </Button>
      <Pages>
        Page <Strong>1</Strong> of <Strong>500</Strong>
      </Pages>
      <Button disabled={page === 500}>
        Next &nbsp;
        <ArrowWrapper $flipped={true} $disabled={page === 500}>
          <Arrow />
        </ArrowWrapper>
      </Button>
      <Button disabled={page === 500}>
        Last &nbsp;
        <ArrowWrapper $flipped={true} $disabled={page === 500}>
          <Arrow />
        </ArrowWrapper>
      </Button>
    </Wrapper>
  );
};

export default Pagination;
