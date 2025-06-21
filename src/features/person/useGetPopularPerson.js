import { axiosInstance } from "@/libs/axiosInstance";
import { create } from "zustand";

const useGetPopularPerson = create((set) => ({
  data: [],
  isLoading: true,

  fetchPerson: async () => {
    set({ data: {}, isLoading: true });

    try {
      const response = await axiosInstance.get("/person/popular");

      set({ data: response, isLoading: false });
    } catch (error) {
      set({ data: {}, isLoading: false });
      console.log(error);
    }
  },
}));

export default useGetPopularPerson;
