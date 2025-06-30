import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetMovieGenre = create((set) => ({
  data: [],
  isLoading: true,

  fetchData: async () => {
    set({ data: {}, isLoading: true });

    try {
      const response = await axiosInstance.get("/genre/movie/list");

      set({ data: response, isLoading: false });
    } catch (error) {
      set({ data: {}, isLoading: true });
      console.log(error);
    }
  },
}));

export default useGetMovieGenre;
