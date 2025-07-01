import { create } from "zustand";

const useSorting = create((set, get) => ({
  sorting: "popularity.desc",

  setSorting: (value) => set({ sorting: value }),
}));

export default useSorting;
