import { create } from "zustand";

export const useResponsiveStore = create((set) => ({
  isMobile: window.innerWidth < 768,
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,

  updateDimensions: () =>
    set({
      isMobile: window.innerWidth < 768,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    }),
}));
