import { create } from "zustand";
import { UseMoreInfoModalState } from "../MoreInfoModal.types";

export const useMoreInfoModal = create<UseMoreInfoModalState>((set) => ({
  showId: undefined,
  isOpen: false,
  open: (showId: number) => set({ isOpen: true, showId }),
  close: () => set({ isOpen: false, showId: undefined }),
}));
