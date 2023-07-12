export type FavoriteButtonProps = {
  movieId: number;
  favoriteIds: number[];
  handleFavorite: (id: number) => void;
};
