import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetPopularMovies = create((set) => ({
  data: [],
  isLoading: true,

  fetchMovies: async () => {
    set({ data: {}, isLoading: true });

    try {
      const response = await axiosInstance.get("/movie/popular");

      set({ data: response, isLoading: false });
    } catch (error) {
      set({ data: {}, isLoading: true });
      console.log(error);
    }
  },
}));

export default useGetPopularMovies;
