import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetTVImagesById = create((set) => ({
  data: [],
  isLoading: true,

  fetchData: async (id) => {
    set({ data: {}, isLoading: true });

    try {
      const response = await axiosInstance.get(`/tv/${id}/images`);

      set({ data: response, isLoading: false });
    } catch (error) {
      set({ data: {}, isLoading: true });
      console.log(error);
    }
  },
}));

export default useGetTVImagesById;
