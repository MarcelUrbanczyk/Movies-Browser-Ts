import { options } from "./queryOptions";

type dataType = "movie" | "tv" | "person";

type genreType = "movie" | "tv";

export const getGenres = async (genreType: genreType) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/${genreType}}/list`,
    options
  );
  const { genres } = await response.json();

  return genres;
};

export const getListData = async (
  dataType: dataType,
  query: string | null | undefined,
  page: number
) => {
  const urlPopular = `https://api.themoviedb.org/3/${dataType}/popular${
    page ? `?page=${page}` : ""
  }`;
  const urlSearch = `https://api.themoviedb.org/3/search/${dataType}?query=${query}&include_adult=false&language=en-US&page=${page}`;

  const response = await fetch(query ? urlSearch : urlPopular, options);
  return await response.json();
};

export const getPageData = async (dataType: dataType, id: number) => {
  const url = `https://api.themoviedb.org/3/${dataType}/${id}`;

  const response = await fetch(url, options);

  return await response.json();
};
