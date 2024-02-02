import { useQuery } from "@tanstack/react-query";
import Success from "./Success";
import Error from "../../Error";
import Loading from "../../Loading";
import { getMovies } from "../../getData";
import { useLocation } from "react-router";

const MovieList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("search");

  const { isLoading, error, data } = useQuery({
    queryKey: ["movies"],
    queryFn: () => getMovies(query, 1),
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;
  return <Success data={data} />;
};

export default MovieList;
