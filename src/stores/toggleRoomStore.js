import { create } from "zustand";

export const useToggleRoomStore = create((set) => ({
  isDarkRoom: true,
  isTransitioning: false,
  isBeforeZooming: false,

  setDarkRoom: (booleanValue) =>
    set({
      isDarkRoom: booleanValue,
    }),

  setIsTransitioning: (booleanValue) =>
    set({
      isTransitioning: booleanValue,
    }),

  setIsBeforeZooming: (booleanValue) =>
    set({
      isBeforeZooming: booleanValue,
    }),
}));
