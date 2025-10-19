import { create } from 'zustand';

export const useSoundStore = create((set) => ({
  isSoundEnabled: true,
  toggleSound: () => set((state) => ({ isSoundEnabled: !state.isSoundEnabled })),
  setSoundEnabled: (enabled) => set({ isSoundEnabled: enabled }),
}));
