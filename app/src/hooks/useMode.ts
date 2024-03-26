import { useModeStore } from '../stores/ModeStore';
export const useMode = () => {
  const mode = useModeStore((state) => state.mode);
  const toggleMode = useModeStore((state) => state.toggleMode);

    const handleMode = () => {
      const newMode = mode === 'light' ? 'dark' : 'light';
      toggleMode(newMode);
    };

    return { mode, handleMode };
};
