import { MovieListProps } from ".";
import { MovieCard } from "../MovieCard";

export function MovieList({
  items,
  title,
  favoriteIds,
  handleFavorite,
}: MovieListProps) {
  if (items?.length === 0) {
    return null;
  }

  return (
    <section className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <h1 className="text-white text-md md:text-xl lg:text-2xl font-semibold">
          {title}
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {items?.map((item) => (
          <MovieCard
            key={item.id}
            data={item}
            favoriteIds={favoriteIds}
            handleFavorite={handleFavorite}
          />
        ))}
      </div>
    </section>
  );
}
