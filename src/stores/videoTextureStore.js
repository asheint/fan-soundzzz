import { create } from "zustand";

export const useVideoLoadedStore = create((set) => ({
  isDevWorkLoaded: false,
  isDesignWorkLoaded: false,

  setIsExperienceReady: (boolean) =>
    set({
      isDevWorkLoaded: boolean,
      isDesignWorkLoaded: boolean,
    }),
}));
