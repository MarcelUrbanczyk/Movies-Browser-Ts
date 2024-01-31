import { GenreProps } from "../../features/types";

export const filterGenres = (genreIds: GenreProps[], genres: number[]) => {
  if (!genreIds || !genres) return;
  const filteredGenres = genreIds.filter((genre) =>
    genres.find((id) => id === genre.id)
  );

  return filteredGenres;
};
