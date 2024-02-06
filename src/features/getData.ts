import { options } from "./queryOptions";

export const getMovieGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list",
    options
  );
  const { genres } = await response.json();

  return genres;
};

export const getShowGenres = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/tv/list",
    options
  );

  const { genres } = await response.json();

  return genres;
};

export const getMovies = async (
  query: string | null | undefined,
  page: number
) => {
  const urlPopular = `https://api.themoviedb.org/3/movie/popular${
    page ? `?page=${page}` : ""
  }`;

  const urlSearch = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${
    page ? page : 1
  }'`;

  const response = await fetch(query ? urlSearch : urlPopular, options);
  return await response.json();
};

export const getPeople = async (
  query: string | null | undefined,
  page: number
) => {
  const urlPopular = `https://api.themoviedb.org/3/person/popular${
    page ? `?page=${page}` : ""
  }`;
  const urlSearch = `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=${page}`;

  const response = await fetch(query ? urlSearch : urlPopular, options);
  return await response.json();
};

export const getShows = async (
  query: string | null | undefined,
  page: number
) => {
  const urlPopular = `https://api.themoviedb.org/3/tv/popular${
    page ? `?page=${page}` : ""
  }`;
  const urlSearch = `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=${page}`;

  const response = await fetch(query ? urlSearch : urlPopular, options);
  return await response.json();
};
