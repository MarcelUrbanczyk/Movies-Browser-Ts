import { useQuery } from "@tanstack/react-query";
import Success from "./Success";
import Error from "../../Error";
import Loading from "../../Loading";
import { getShows } from "../../getData";

const ShowList = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["shows"],
    queryFn: getShows,
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;
  return <Success data={data} />;
};

export default ShowList;
