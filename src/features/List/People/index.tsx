import { useQuery } from "@tanstack/react-query";
import Success from "./Success";
import Error from "../../Error";
import Loading from "../../Loading";
import { getPeople } from "../../getData";
import { useLocation } from "react-router";
import { useDebounce } from "../../useDebounce";

const PeopleList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = useDebounce(searchParams.get("search"), 1 * 1000);
  const { isLoading, error, data } = useQuery({
    queryKey: ["people", query],
    queryFn: () => getPeople(query, 1),
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  const {
    results: people,
    total_results: totalPeople,
    total_pages: totalPages,
  } = data;

  return (
    <Success
      people={people}
      totalPeople={totalPeople}
      totalPages={totalPages}
      query={query}
    />
  );
};

export default PeopleList;
