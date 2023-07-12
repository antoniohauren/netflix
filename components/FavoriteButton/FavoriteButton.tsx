import { useFavoritesStore } from "@/stores/useFavoritesStore";
import { BsCheck, BsPlus } from "react-icons/bs";
import { FavoriteButtonProps } from ".";

export function FavoriteButton({ movieId }: FavoriteButtonProps) {
  const { handleFavorite, favoriteIds } = useFavoritesStore();
  const isFavorite = favoriteIds.includes(movieId);

  const Icon = isFavorite ? BsCheck : BsPlus;

  return (
    <div
      onClick={() => handleFavorite(movieId)}
      className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon className="text-white" size={30} />
    </div>
  );
}
