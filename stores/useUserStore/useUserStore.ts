import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserStore } from "./useUserStore.types";

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      name: "",
      image: "",
      setUser: (name, image) => set({ name, image }),
    }),
    {
      name: "user-storage",
    }
  )
);
