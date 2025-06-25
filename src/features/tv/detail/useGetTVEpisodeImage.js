import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetTVEpisodeImage = create((set) => ({
  data: [],
  isLoading: true,

  fetchData: async (series_id, sesason_number) => {
    set({ data: {}, isLoading: true });

    try {
      const response = await axiosInstance.get(
        `/tv/${series_id}/season/${sesason_number}/images`
      );

      set({ data: response, isLoading: false });
    } catch (error) {
      set({ data: {}, isLoading: true });
      console.log(error);
    }
  },
}));

export default useGetTVEpisodeImage;
