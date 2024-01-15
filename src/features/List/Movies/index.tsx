import { useQuery } from "@tanstack/react-query";
import Success from "./Success";
import { options } from "../../queryOptions";

const MovieList = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );
      const { results } = await response.json();
      return results;
    },
  });

  if (isLoading) return null;
  if (error) return null;
  return <Success data={data} />;
};

export default MovieList;
