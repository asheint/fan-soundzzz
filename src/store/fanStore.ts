import { create } from 'zustand';

export type FanType = 'table' | 'ceiling' | 'box';

interface FanState {
  isPlaying: boolean;
  fanType: FanType;
  volume: number;
  speed: number;
  timerMinutes: number;
  timerActive: boolean;
  timerRemaining: number;
  setPlaying: (playing: boolean) => void;
  setFanType: (type: FanType) => void;
  setVolume: (volume: number) => void;
  setSpeed: (speed: number) => void;
  setTimerMinutes: (minutes: number) => void;
  startTimer: () => void;
  stopTimer: () => void;
  decrementTimer: () => void;
}

export const useFanStore = create<FanState>((set) => ({
  isPlaying: false,
  fanType: 'table',
  volume: 0.8,
  speed: 0.5,
  timerMinutes: 30,
  timerActive: false,
  timerRemaining: 0,
  
  setPlaying: (playing) => set({ isPlaying: playing }),
  setFanType: (type) => set({ fanType: type }),
  setVolume: (volume) => set({ volume }),
  setSpeed: (speed) => set({ speed }),
  setTimerMinutes: (minutes) => set({ timerMinutes: minutes }),
  
  startTimer: () => set((state) => ({ 
    timerActive: true, 
    timerRemaining: state.timerMinutes * 60 
  })),
  
  stopTimer: () => set({ 
    timerActive: false, 
    timerRemaining: 0 
  }),
  
  decrementTimer: () => set((state) => {
    if (!state.timerActive || state.timerRemaining <= 0) return state;
    
    const newRemaining = state.timerRemaining - 1;
    
    if (newRemaining <= 0) {
      return {
        timerActive: false,
        timerRemaining: 0,
        isPlaying: false
      };
    }
    
    return { timerRemaining: newRemaining };
  }),
}));