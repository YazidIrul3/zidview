// store.js
import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetMovie = create((set, get) => ({
  data: [],
  isFetched: false,
  isLoading: false,

  fetchData: async (path) => {
    // Hindari refetch jika sudah fetch
    if (get().isFetched) return;

    set({ isLoading: true });

    try {
      const result = await axiosInstance.get(path);

      if (!Array.isArray(result)) {
        set({ isLoading: false });
        return;
      }

      // Simpan data dan flag fetched
      set((state) => ({
        data: Array.isArray(result)
          ? [...state.data, ...result]
          : [...state.data], // jika ingin menambahkan, bukan mengganti
        isFetched: true,
        isLoading: false,
      }));
    } catch (error) {
      console.error("Failed to fetch:", error);
      set({ data: {}, isLoading: true });
    }
  },
}));

export default useGetMovie;
