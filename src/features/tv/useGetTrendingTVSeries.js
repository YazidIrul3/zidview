import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetTrendingTVSeries = create((set) => ({
  data: [],
  isLoading: true,

  fetchTV: async () => {
    set({ data: {}, isLoading: true });

    try {
      const response = await axiosInstance.get(
        "/trending/tv/day?language=en-US"
      );

      set({ data: response, isLoading: false });
    } catch (error) {
      set({ data: {}, isLoading: true });
      console.log(error);
    }
  },
}));

export default useGetTrendingTVSeries;
