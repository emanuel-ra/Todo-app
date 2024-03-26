import { create } from 'zustand';

interface Mode {
  mode: string;
  toggleMode: (mode: string) => void;
}

export const useModeStore = create<Mode>((set) => {
    return {
      mode: 'light',
      toggleMode: (mode: string) => {
        set({ mode });
      },
    };
});