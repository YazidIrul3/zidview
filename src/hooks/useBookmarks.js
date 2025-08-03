import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useBookmark = create()(
  persist(
    (set, get) => ({
      movies: [],
      addMovie: () => set({ bears: get().bears }),
    }),
    {
      name: "bookmark", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
