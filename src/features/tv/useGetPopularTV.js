import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetPopularTV = create((set) => ({
  data: [],
  isLoading: true,

  fetchTV: async () => {
    set({ data: {}, isLoading: true });

    try {
      const response = await axiosInstance.get("/tv/popular");

      set({ data: response, isLoading: false });
    } catch (error) {
      set({ data: {}, isLoading: true });
      console.log(error);
    }
  },
}));

export default useGetPopularTV;
