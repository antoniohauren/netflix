import { PlayButton } from "@/components/PlayButton";
import { useBillBoard } from "@/hooks/useBillBoard";
import { BsInfoCircle } from "react-icons/bs";
import { BillBoardProps } from ".";
import { useMoreInfoModal } from "../MoreInfoModal";

export function BillBoard({}: BillBoardProps) {
  const movie = useBillBoard();
  const { open } = useMoreInfoModal();

  function handleOpenModal() {
    open(movie.id);
  }

  return (
    <div className="relative h-[56.25vw]">
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        poster={movie.thumbnailUrl}
        src={movie.videoUrl}
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
      />

      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <h2 className="text-white text-xl md:text-5xl h-full w-1/2 lg:text-6xl font-bold drop-shadow-xl">
          {movie.title}
        </h2>

        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-11/12 md:w-9/12 lg:w-1/2">
          {movie.description}
        </p>

        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={movie.id} />

          <button
            onClick={handleOpenModal}
            className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
          >
            <BsInfoCircle className="mr-1" />
            More info
          </button>
        </div>
      </div>
    </div>
  );
}
