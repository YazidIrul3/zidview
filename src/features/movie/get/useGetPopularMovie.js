import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetPopulerMovies = create((set) => ({
  movie: [],
  isLoading: true,

  fetchMovies: async () => {
    set({ movie: {}, isLoading: true });

    try {
      const response = await axiosInstance.get("/movie/popular");

      set({ movie: response, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useGetPopulerMovies;
