import { useQuery } from "@tanstack/react-query";
import Success from "./Success";
import { options } from "../../queryOptions";
import Error from "../../Error";
import Loading from "../../Loading";
import { getMovies } from "../../getData";

const MovieList = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;
  return <Success data={data} />;
};

export default MovieList;
