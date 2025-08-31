// src/store/favoriteStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useFavoriteStore = create(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (meal) => {
        const exists = get().favorites.find((fav) => fav.idMeal === meal.idMeal);
        if (!exists) {
          set((state) => ({
            favorites: [...state.favorites, meal],
          }));
        }
      },

      removeFavorite: (idMeal) => {
        set((state) => ({
          favorites: state.favorites.filter((meal) => meal.idMeal !== idMeal),
        }));
      },

      isFavorite: (idMeal) => {
        return get().favorites.some((meal) => meal.idMeal === idMeal);
      },
    }),
    {
      name: 'favorite-meals-storage', // LocalStorage key
      getStorage: () => localStorage,
    }
  )
);

export default useFavoriteStore;
