"use client";

import { SelectUserCard } from "@/components/SelectUserCard";
import { useRouter } from "next/navigation";

const users = [
  { name: "Antonio", image: "/images/default-blue.png" },
  { name: "Carlos", image: "/images/default-green.png" },
];

export default function ProfilesPage() {
  const router = useRouter();

  function handleProfileSelect() {
    router.push("/");
  }

  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who is watching?
        </h1>

        <div className="flex items-center justify-center gap-8 mt-10">
          {users.map((user, index) => (
            <div key={index} onClick={handleProfileSelect}>
              <SelectUserCard image={user.image} name={user.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
