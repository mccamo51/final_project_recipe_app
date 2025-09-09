import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
  persist(
    (set, get) => ({
      isDark: false,

      toggleTheme: () => {
        const currentTheme = get().isDark;
        const newTheme = !currentTheme;

        console.log('Toggle called - Current:', currentTheme, 'New:', newTheme);

        // Update state first
        set({ isDark: newTheme });

        // Force DOM update immediately
        const htmlElement = document.documentElement;
        console.log('HTML classes before:', Array.from(htmlElement.classList));

        if (newTheme) {
          htmlElement.classList.remove('light'); // Remove any conflicting classes
          htmlElement.classList.add('dark');
        } else {
          htmlElement.classList.remove('dark');
          htmlElement.classList.add('light'); // Explicitly add light class
        }

        console.log('HTML classes after:', Array.from(htmlElement.classList));

        // Force a re-render by triggering a style recalculation
        htmlElement.style.colorScheme = newTheme ? 'dark' : 'light';
      },

      initializeTheme: () => {
        const isDark = get().isDark;
        console.log('Initializing theme:', isDark ? 'dark' : 'light');

        const htmlElement = document.documentElement;

        if (isDark) {
          htmlElement.classList.remove('light');
          htmlElement.classList.add('dark');
          htmlElement.style.colorScheme = 'dark';
        } else {
          htmlElement.classList.remove('dark');
          htmlElement.classList.add('light');
          htmlElement.style.colorScheme = 'light';
        }
      },

      // Force set theme (for debugging)
      setTheme: (isDark) => {
        set({ isDark });
        const htmlElement = document.documentElement;

        if (isDark) {
          htmlElement.classList.remove('light');
          htmlElement.classList.add('dark');
          htmlElement.style.colorScheme = 'dark';
        } else {
          htmlElement.classList.remove('dark');
          htmlElement.classList.add('light');
          htmlElement.style.colorScheme = 'light';
        }
        console.log('Theme set to:', isDark ? 'dark' : 'light');
      }
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        console.log('Theme rehydrated:', state);
        if (state) {
          // Ensure DOM is ready
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
              state.initializeTheme();
            });
          } else {
            state.initializeTheme();
          }
        }
      }
    }
  )
);

export default useThemeStore;