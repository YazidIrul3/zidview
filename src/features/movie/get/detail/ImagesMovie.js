import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetMovieImagesById = create((set) => ({
  data: [],
  isLoading: true,

  fetchMovies: async (id) => {
    set({ data: {}, isLoading: true });

    try {
      const response = await axiosInstance.get(`/movie/${id}/images`);

      set({ data: response, isLoading: false });
    } catch (error) {
      set({ data: {}, isLoading: true });
      console.log(error);
    }
  },
}));

export default useGetMovieImagesById;
