"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { AccountMenuProps } from ".";

export function AccountMenu({ visible }: AccountMenuProps) {
  const router = useRouter();

  function handleSignOut() {
    router.push("/auth");
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-600 flex rounded-sm">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <div className="relative w-8 h-8">
            <Image
              src="/images/default-blue.png"
              fill={true}
              alt="user profile picture"
              className="rounded-md"
            />
          </div>

          <p className="text-white text-sm group-hover/item:underline">
            Antonio
          </p>
        </div>

        <hr className="bg-gray-600 border-0 h-px my-4" />

        <div
          onClick={handleSignOut}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign out
        </div>
      </div>
    </div>
  );
}
