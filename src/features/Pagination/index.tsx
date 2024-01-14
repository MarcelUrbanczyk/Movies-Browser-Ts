import Arrow from "./arrowIcon";
import { Button, Pages, Wrapper, Strong, Paragraph } from "./styled";

const Pagination = () => {
  const page: number = 1;
  return (
    <Wrapper>
      <Button disabled={page === 1}>
        <Arrow $disabled={page === 1} />
        <Paragraph>First</Paragraph>
      </Button>
      <Button disabled={page === 1}>
        <Arrow $disabled={page === 1} />
        <Paragraph>Previous</Paragraph>
      </Button>
      <Pages>
        Page <Strong>1</Strong> of <Strong>500</Strong>
      </Pages>
      <Button disabled={page === 500}>
        <Paragraph>Next</Paragraph>
        <Arrow $flipped $disabled={page === 500} />
      </Button>
      <Button disabled={page === 500}>
        <Paragraph>Last</Paragraph>
        <Arrow $flipped $disabled={page === 500} />
      </Button>
    </Wrapper>
  );
};

export default Pagination;
