import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetTrendingMovies = create((set) => ({
  movie: [],
  isLoading: true,

  fetchMovies: async () => {
    set({ movie: {}, isLoading: true });

    try {
      const response = await axiosInstance.get(
        "/trending/movie/day?language=en-US"
      );

      set({ movie: response, isLoading: false });
    } catch (error) {
      set({ movie: {}, isLoading: true });
      console.log(error);
    }
  },
}));

export default useGetTrendingMovies;
