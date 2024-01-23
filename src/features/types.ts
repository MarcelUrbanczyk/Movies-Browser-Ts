export type MovieProps = {
  title: string;
  release_date: string;
  poster_path?: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  id: number;
};

export type MovieListTileProps = {
  title: string;
  year?: string;
  poster?: string;
  rating?: number;
  votes?: number;
  genres?: number[];
  id: number;
};

export type PeopleTileProps = {
  name: string;
  image?: string;
};

export type PeopleProps = {
  name: string;
  profile_path?: string;
};

export type GenreProps = {
  id: number;
  name: string;
};
