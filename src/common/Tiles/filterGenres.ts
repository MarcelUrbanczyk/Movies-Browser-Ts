import { GenreProps } from "../../features/types";

export const filterGenres = (genreIds: GenreProps[], genres: number[]) => {
  const filteredGenres = genreIds.filter((genre) => {
    genres.forEach((id) => {
      if (genre.id === id) {
        return genre;
      }
    });
  });

  return filteredGenres;
};
