import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetMovieReview = create((set) => ({
  data: [],
  isLoading: true,

  fetchData: async (id) => {
    set({ data: {}, isLoading: true });

    try {
      const response = await axiosInstance.get(`/movie/${id}/reviews`);

      set({ data: response, isLoading: false });
    } catch (error) {
      set({ data: {}, isLoading: true });
      console.log(error);
    }
  },
}));

export default useGetMovieReview;
