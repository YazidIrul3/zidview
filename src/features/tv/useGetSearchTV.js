import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetSearchTV = create((set) => ({
  data: [],
  isLoading: true,

  fetchData: async (query) => {
    set({ movie: {}, isLoading: true });

    try {
      const response = await axiosInstance.get(`/search/tv?query=${query}`);

      set({ data: response, isLoading: false });
    } catch (error) {
      set({ data: {}, isLoading: true });
      console.log(error);
    }
  },
}));

export default useGetSearchTV;
