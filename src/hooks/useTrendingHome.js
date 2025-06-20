import { create } from "zustand";

const useTrendingMovie = create((set) => ({
  isMovie: true,

  setTrendingHome: async (bool) => {
    set({ isMovie: bool });
  },
}));

export default useTrendingMovie;
