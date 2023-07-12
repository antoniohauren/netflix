import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FavoritesStore } from "./useFavoritesStore.types";

function getNewFavorites(favoriteIds: number[], id: number) {
  if (favoriteIds.includes(id)) {
    return favoriteIds.filter((favoriteId) => favoriteId !== id);
  } else {
    return [...favoriteIds, id];
  }
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favoriteIds: [],
      setFavoriteIds: (ids) => set({ favoriteIds: ids }),
      handleFavorite: (id) => {
        const favoriteIds = get().favoriteIds;
        const newFavorites = getNewFavorites(favoriteIds, id);
        set({ favoriteIds: newFavorites });
      },
    }),
    {
      name: "favorites-storage",
    }
  )
);
