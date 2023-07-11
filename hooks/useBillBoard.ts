import { mockShows } from "@/share/constants";

export function useBillBoard() {
  const index = Math.floor(Math.random() * mockShows.length);

  return mockShows[index];
}
