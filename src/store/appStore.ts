import { create } from 'zustand';
import { AppState } from '../types';

export const useAppStore = create<AppState>((set) => ({
  currentSection: 'hero',
  setCurrentSection: (section) => set({ currentSection: section }),
  
  prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  setPrefersReducedMotion: (value) => set({ prefersReducedMotion: value }),
  
  theme: 'dark',
  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'dark' ? 'light' : 'dark' 
  })),
}));