import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetFilterMovie = create((set) => ({
  data: [],
  isLoading: true,

  fetchData: async (sorting, genre) => {
    set({ data: {}, isLoading: true });

    try {
      const response = await axiosInstance.get(
        `/discover/movie?sort_by=${sorting}&with_genres=${genre}`
      );

      set({ data: response, isLoading: false });
    } catch (error) {
      set({ data: {}, isLoading: true });
      console.log(error);
    }
  },
}));

export default useGetFilterMovie;
