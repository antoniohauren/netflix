"use client";

import { BillBoard } from "@/components/BillBoard";
import { MoreInfoModal, useMoreInfoModal } from "@/components/MoreInfoModal";
import { MovieList } from "@/components/MovieList";
import { NavBar } from "@/components/NavBar";
import { useMovies } from "@/hooks/useMovies";
import { useFavoritesStore } from "@/stores/useFavoritesStore";

export default function Home() {
  const { isOpen, close } = useMoreInfoModal();

  const { favoriteIds } = useFavoritesStore();

  const movies = useMovies();
  const favorites = movies.filter((movie) => favoriteIds.includes(movie.id));

  return (
    <>
      <MoreInfoModal visible={isOpen} onClose={close} />

      <NavBar />

      <BillBoard />

      <div className="pb-40">
        <MovieList title="Trending" items={movies} />

        <MovieList title="Favorites" items={favorites} />
      </div>
    </>
  );
}
