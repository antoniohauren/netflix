import Image from "next/image";
import { SelectUserCardProps } from ".";

export function SelectUserCard({ image, name }: SelectUserCardProps) {
  return (
    <div className="group flex-row w-44 mx-auto">
      <div className="relative w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
        <Image
          src={image}
          fill={true}
          alt={`${name} picture`}
          className="object-cover"
          draggable={false}
        />
      </div>

      <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
        {name}
      </div>
    </div>
  );
}
