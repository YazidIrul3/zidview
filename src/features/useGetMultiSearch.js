import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetMultiSearch = create((set) => ({
  data: [],
  isLoading: true,

  fetchData: async (query) => {
    set({ data: {}, isLoading: true });

    try {
      const response = await axiosInstance.get(`/search/multi?query=${query}`);

      set({ data: response, isLoading: false });
    } catch (error) {
      set({ data: {}, isLoading: true });
      console.log(error);
    }
  },
}));

export default useGetMultiSearch;
