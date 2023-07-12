import { useMovie } from "@/hooks/useMovie";
import { useEffect, useState } from "react";
import { BsXLg } from "react-icons/bs";
import { MoreInfoModalProps, useMoreInfoModal } from ".";
import { FavoriteButton } from "../FavoriteButton";
import { PlayButton } from "../PlayButton";

export function MoreInfoModal({ onClose, visible }: MoreInfoModalProps) {
  const [isVisible, setIsVisible] = useState(!!visible);

  const { showId } = useMoreInfoModal();
  const data = useMovie(showId || 0);

  function handleClose() {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        <div
          className={`${
            isVisible ? "scale-100" : "scale-0"
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className="relative h-96">
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              poster={data?.thumbnailUrl}
              src={data?.videoUrl}
              className="w-full h-full brightness-[60%] object-cover"
            />

            <div
              onClick={handleClose}
              className="cursor-pointer absolute top-3 right-3 w-10 h-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
            >
              <BsXLg className="text-white" size={20} />
            </div>

            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8 ">
                {data?.title}
              </p>

              <div className="flex flex-row gap-4 items-center">
                <PlayButton movieId={data?.id || 0} />
                <FavoriteButton movieId={data?.id || 0} favoriteIds={[]} />
              </div>
            </div>
          </div>

          <div className="px-12 py-8 ">
            <p className="text-green-400 font-semibold text-lg">New</p>
            <p className="text-white text-lg">{data?.duration}</p>
            <p className="text-white text-lg">{data?.genre}</p>
            <p className="text-white text-lg">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
