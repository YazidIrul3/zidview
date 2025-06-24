import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetEpisodeBySeason = create((set) => ({
  data: [],
  isLoading: true,

  fetchData: async (tv_series_id, season_number) => {
    set({ isLoading: true });

    try {
      const response = await axiosInstance.get(
        `/tv/${tv_series_id}/season/${season_number}`
      );
      set({ data: response, isLoading: false });
    } catch (error) {
      console.error("Failed to fetch:", error);
      set({ data: {}, isLoading: true });
    }
  },
}));

export default useGetEpisodeBySeason;
