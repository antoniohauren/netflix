"use client";

import { BillBoard } from "@/components/BillBoard";
import { MoreInfoModal, useMoreInfoModal } from "@/components/MoreInfoModal";
import { MovieList } from "@/components/MovieList";
import { NavBar } from "@/components/NavBar";
import { useMovies } from "@/hooks/useMovies";
import { useState } from "react";

export default function Home() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const { isOpen, close } = useMoreInfoModal();

  const movies = useMovies();
  const favorites = movies.filter((movie) => favoriteIds.includes(movie.id));

  function handleFavorite(id: number) {
    if (favoriteIds.includes(id)) {
      setFavoriteIds((prev) => prev.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavoriteIds((prev) => [...prev, id]);
    }
  }

  return (
    <>
      <MoreInfoModal visible={isOpen} onClose={close} />

      <NavBar />

      <BillBoard />

      <div className="pb-40">
        <MovieList
          favoriteIds={favoriteIds}
          title="Trending"
          items={movies}
          handleFavorite={handleFavorite}
        />

        <MovieList
          favoriteIds={favoriteIds}
          title="Favorites"
          items={favorites}
          handleFavorite={handleFavorite}
        />
      </div>
    </>
  );
}
