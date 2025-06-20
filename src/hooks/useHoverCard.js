import { create } from "zustand";

const useHoverCard = create((set) => ({
  isHover: false,

  setIsHover: (bool) => set({ isHover: bool }),
}));

export default useHoverCard;
