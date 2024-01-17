import { useQuery } from "@tanstack/react-query";
import Success from "./Success";
import { options } from "../../queryOptions";

const PeopleList = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["people"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/person/popular",
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

export default PeopleList;
