import { MovieCardProps } from "../MovieCard";

type Movie = MovieCardProps["data"];

export type MovieListProps = {
  title: string;
  items: Movie[];
};
