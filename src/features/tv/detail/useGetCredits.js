import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetCreditsTV = create((set) => ({
  data: [],
  isLoading: true,

  fetchData: async (id) => {
    set({ isLoading: true });

    try {
      const response = await axiosInstance.get(`/tv/${id}/credits`);
      set({ data: response, isLoading: false });
    } catch (error) {
      console.error("Failed to fetch:", error);
      set({ data: {}, isLoading: true });
    }
  },
}));

export default useGetCreditsTV;
