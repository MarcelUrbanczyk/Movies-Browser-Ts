import { useQuery } from "@tanstack/react-query";
import Success from "./Success";
import Error from "../../Error";
import Loading from "../../Loading";
import { getMovies } from "../../getData";
import { useLocation } from "react-router";
import { useDebounce } from "../../useDebounce";

const MovieList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = useDebounce(searchParams.get("search"), 1 * 1000);

  const { isLoading, error, data } = useQuery({
    queryKey: ["movies", query],
    queryFn: () => getMovies(query, 1),
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  const {
    results: movies,
    total_results: totalMovies,
    total_pages: totalPages,
  } = data;

  return (
    <Success
      movies={movies}
      query={query}
      totalMovies={totalMovies}
      totalPages={totalPages}
    />
  );
};

export default MovieList;
