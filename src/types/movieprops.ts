export type MovieProps = {
  title: string;
  release_date: string;
  poster_path?: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
};

export type MovieListTileProps = {
  title: string;
  year?: string;
  poster?: string;
  rating?: number;
  votes?: number;
  genres?: number[];
};
