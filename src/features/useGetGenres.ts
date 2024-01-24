import { useQuery } from "@tanstack/react-query";
import { options } from "./queryOptions";

export const useGetMovieGenres = () => {
  useQuery({
    queryKey: ["movieGenres"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list",
        options
      );

      const { genres } = await response.json();

      return genres;
    },
  });
};

export const useGetShowGenres = () => {
  useQuery({
    queryKey: ["showGenres"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list",
        options
      );

      const { genres } = await response.json();

      return genres;
    },
  });
};
