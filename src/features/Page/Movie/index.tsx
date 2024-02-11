import { useQuery } from "@tanstack/react-query";
import Error from "../../Error";
import Loading from "../../Loading";
import Success from "./Success";
import { useLocation } from "react-router";
import { getPageData } from "../../getData";

const MoviePage = () => {
  const location = useLocation();
  const id = parseInt(location.pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getPageData("movie", id),
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return <Success movie={data} />;
};

export default MoviePage;
