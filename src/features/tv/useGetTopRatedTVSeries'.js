import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetTopRatedTVSeries = create((set) => ({
  data: [],
  isLoading: true,

  fetchTV: async () => {
    set({ data: {}, isLoading: true });

    try {
      const response = await axiosInstance.get(
        "/tv/top_rated?language=en-US&page=1"
      );

      set({ data: response, isLoading: false });
    } catch (error) {
      set({ data: {}, isLoading: true });

      console.log(error);
    }
  },
}));

export default useGetTopRatedTVSeries;
