import { mockShows } from "@/share/constants";
import { FavoriteButtonProps } from "../FavoriteButton";

type Movie = (typeof mockShows)[number];

export type MovieCardProps = {
  data: Movie;
} & Pick<FavoriteButtonProps, "favoriteIds" | "handleFavorite">;
