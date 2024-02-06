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
import { useLocation, useHistory } from "react-router";

const Pagination = ({ totalPages }) => {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pageParams = parseInt(params.get("page") || "1");

  const [page, setPage] = useState(pageParams);
  const [maxPage, setMaxPage] = useState(500);

  const onPageChange = (action) => {
    let newPage;

    switch (action) {
      case "first":
        newPage = 1;
        break;
      case "previous":
        newPage = page - 1;
        break;
      case "next":
        newPage = page + 1;
        break;
      case "last":
        newPage = maxPage;
        break;
      default:
        newPage = 1;
        break;
    }

    params.set("page", newPage.toString());

    history.push({ search: params.toString() });
    setPage(newPage);
  };

  useEffect(() => {
    if (totalPages < 500) {
      setMaxPage(totalPages);
    }
  }, [totalPages]);

  return (
    <Wrapper>
      <Button onClick={() => onPageChange("first")} disabled={page === 1}>
        <Arrow $disabled={page === 1} />
        <MobileArrowWrapper>
          <Arrow $disabled={page === 1} />
        </MobileArrowWrapper>
        <Paragraph>First</Paragraph>
      </Button>
      <Button onClick={() => onPageChange("previous")} disabled={page === 1}>
        <Arrow $disabled={page === 1} />
        <Paragraph>Previous</Paragraph>
      </Button>
      <Pages>
        Page <Strong>{page}</Strong> of <Strong>{maxPage}</Strong>
      </Pages>
      <Button onClick={() => onPageChange("next")} disabled={page === maxPage}>
        <Paragraph>Next</Paragraph>
        <Arrow $flipped $disabled={page === maxPage} />
      </Button>
      <Button onClick={() => onPageChange("last")} disabled={page === maxPage}>
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
