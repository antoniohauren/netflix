"use client";

import { useMovie } from "@/hooks/useMovie";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

export default function WatchPage({ params }: { params: { movieId: string } }) {
  const movieId = params.movieId;
  const movie = useMovie(movieId);

  const router = useRouter();

  return (
    <div className="w-screen h-screen bg-black">
      <nav className="fixed w-full p-4 flex flex-row items-center gap-8 bg-black bg-opacity-70 z-10">
        <BsArrowLeft
          onClick={() => router.push("/")}
          className="text-white cursor-pointer"
          size={40}
        />

        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span>
          {movie?.title}
        </p>
      </nav>

      <video
        className="w-full h-full"
        autoPlay={true}
        controls={true}
        src={movie?.videoUrl}
      />
    </div>
  );
}
