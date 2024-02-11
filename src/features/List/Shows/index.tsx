import { useQuery } from "@tanstack/react-query";
import Success from "./Success";
import Error from "../../Error";
import Loading from "../../Loading";
import { getListData } from "../../getData";
import { useLocation } from "react-router";
import { useDebounce } from "../../useDebounce";

const ShowList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = useDebounce(searchParams.get("search"), 1 * 1000);
  const page = parseInt(searchParams.get("page") || "1");

  const { isLoading, error, data } = useQuery({
    queryKey: ["shows", query, page],
    queryFn: () => getListData("tv", query, page),
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  const {
    results: shows,
    total_results: totalShows,
    total_pages: totalPages,
  } = data;

  return (
    <Success
      shows={shows}
      totalShows={totalShows}
      totalPages={totalPages}
      query={query}
    />
  );
};

export default ShowList;
