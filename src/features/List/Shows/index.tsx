import { useQuery } from "@tanstack/react-query";
import Success from "./Success";
import { options } from "../../queryOptions";
import Error from "../../Error";
import Loading from "../../Loading";

const ShowList = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["shows"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/popular",
        options
      );
      const { results } = await response.json();
      return results;
    },
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;
  return <Success data={data} />;
};

export default ShowList;
