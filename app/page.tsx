import { BillBoard } from "@/components/BillBoard";
import { MovieList } from "@/components/MovieList";
import { NavBar } from "@/components/NavBar";
import { useMovies } from "@/hooks/useMovies";

export default function Home() {
  const movies = useMovies();

  return (
    <>
      <NavBar />

      <BillBoard />

      <div className="pb-40">
        <MovieList title="Trending" items={movies} />
      </div>
    </>
  );
}
