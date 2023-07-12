export type FavoritesStore = {
  favoriteIds: number[];
  setFavoriteIds: (ids: number[]) => void;
  handleFavorite: (id: number) => void;
};
