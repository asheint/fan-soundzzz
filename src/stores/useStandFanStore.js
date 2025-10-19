import { create } from "zustand";

export const useStandFanStore = create((set) => ({
  isRunning: false,
  isStopping: false,
  
  speed: 1,
  
  isOscillating: false,
  
  currentBladeSpeed: 0,
  currentOscillationAngle: 0,
  
  startFan: () => set({ isRunning: true, isStopping: false }),
  
  stopFan: () => set({ isRunning: false, isStopping: true }),
  
  completeStop: () => set({ isStopping: false }),
  
  setSpeed: (speed) => set({ speed }),
  
  toggleOscillation: () => set((state) => ({ isOscillating: !state.isOscillating })),
  
  setCurrentBladeSpeed: (speed) => set({ currentBladeSpeed: speed }),
  
  setCurrentOscillationAngle: (angle) => set({ currentOscillationAngle: angle }),
}));
