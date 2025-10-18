import { create } from "zustand";

export const usePageTransitionStore = create((set) => ({
  isEntering: false,
  isExiting: false,
  delay: 0,

  setIsEntering: (boolean) =>
    set({
      isEntering: boolean,
    }),

  setIsExiting: (boolean) =>
    set({
      isExiting: boolean,
    }),

  setDelay: (value) =>
    set({
      delay: value,
    }),
}));
