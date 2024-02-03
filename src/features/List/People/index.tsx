import { useQuery } from "@tanstack/react-query";
import Success from "./Success";
import Error from "../../Error";
import Loading from "../../Loading";
import { getPeople } from "../../getData";

const PeopleList = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["people"],
    queryFn: getPeople,
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;
  return <Success data={data} />;
};

export default PeopleList;
