import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetFilterTV = create((set) => ({
  data: [],
  isLoading: true,

  fetchData: async (sorting, genre) => {
    set({ data: {}, isLoading: true });

    try {
      const response = await axiosInstance.get(
        `/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=${sorting}&with_genres=${genre}`
      );

      set({ data: response, isLoading: false });
    } catch (error) {
      set({ data: {}, isLoading: true });
      console.log(error);
    }
  },
}));

export default useGetFilterTV;
