import { useQuery } from "@tanstack/react-query";
import Error from "../../Error";
import Loading from "../../Loading";
import Success from "./Success";
import { useLocation } from "react-router";
import { getPageData } from "../../getData";

const ShowPage = () => {
  const location = useLocation();
  const id = parseInt(location.pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["show", id],
    queryFn: () => getPageData("tv", id),
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return <Success show={data} />;
};

export default ShowPage;
