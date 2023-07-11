import { mockShows } from "@/share/constants";

type Movie = (typeof mockShows)[number];

export type MovieCardProps = {
  data: Movie;
};
