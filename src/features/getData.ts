import { options } from "./queryOptions";

export const getMovieGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list",
    options
  );
  return response.json();
};

export const getShowGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/tv/list",
    options
  );

  const { genres } = await response.json();

  return genres;
};

export const getMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );
  const { results } = await response.json();
  return results;
};

export const getPeople = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/person/popular",
    options
  );
  const { results } = await response.json();
  return results;
};

export const getShows = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/tv/popular",
    options
  );
  const { results } = await response.json();
  return results;
};
