import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetNowPlayingMovies = create((set) => ({
  data: [],
  isLoading: true,

  fetchMovies: async () => {
    set({ data: {}, isLoading: true });

    try {
      const response = await axiosInstance.get(
        "/movie/now_playing?language=en-US&page=1"
      );

      set({ data: response, isLoading: false });
    } catch (error) {
      set({ data: {}, isLoading: true });
      console.log(error);
    }
  },
}));

export default useGetNowPlayingMovies;
