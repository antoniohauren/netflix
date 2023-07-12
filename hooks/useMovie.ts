import { mockShows } from "@/share/constants";

export function useMovie(id: number | string) {
  return mockShows.find((show) => show.id === Number(id));
}
