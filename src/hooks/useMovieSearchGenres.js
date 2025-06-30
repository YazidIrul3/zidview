import { create } from "zustand";

const useMovieSearchGenres = create((set, get) => ({
  genres: [],

  setMovieSearchGenres: (genre) => {
    if (get().genres.includes(genre)) {
      const index = get().genres.indexOf(genre);
      get().genres.splice(index, 1);
      set({ genres: get().genres });
    } else {
      set({ genres: [...get().genres, genre] });
    }
  },
}));

export default useMovieSearchGenres;
