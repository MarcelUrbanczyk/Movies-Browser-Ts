import Arrow from "./arrowIcon";
import {
  Button,
  Pages,
  Wrapper,
  Strong,
  Paragraph,
  MobileArrowWrapper,
} from "./styled";
import { useState, useEffect } from "react";

const Pagination = ({ totalPages }) => {
  const page: number = 1;

  const [maxPage, setMaxPage] = useState(500);

  useEffect(() => {
    if (totalPages < 500) {
      setMaxPage(totalPages);
    }
  }, [totalPages]);

  return (
    <Wrapper>
      <Button disabled={page === 1}>
        <Arrow $disabled={page === 1} />
        <MobileArrowWrapper>
          <Arrow $disabled={page === 1} />
        </MobileArrowWrapper>
        <Paragraph>First</Paragraph>
      </Button>
      <Button disabled={page === 1}>
        <Arrow $disabled={page === 1} />
        <Paragraph>Previous</Paragraph>
      </Button>
      <Pages>
        Page <Strong>1</Strong> of <Strong>{maxPage}</Strong>
      </Pages>
      <Button disabled={page === maxPage}>
        <Paragraph>Next</Paragraph>
        <Arrow $flipped $disabled={page === maxPage} />
      </Button>
      <Button disabled={page === maxPage}>
        <Paragraph>Last</Paragraph>
        <Arrow $flipped $disabled={page === maxPage} />
        <MobileArrowWrapper>
          <Arrow $flipped $disabled={page === maxPage} />
        </MobileArrowWrapper>
      </Button>
    </Wrapper>
  );
};

export default Pagination;
