import React from 'react'
import useFavoriteStore from '../store/favoriteStore';
import { Heart } from 'lucide-react';

function LikeButton({ meal }) {
    const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore();
    const isFav = isFavorite(meal.idMeal);

    const toggleFavorite = () => {
        if (isFav) {
            removeFavorite(meal.idMeal);
        } else {
            addFavorite(meal);
        }
    };

    return (
        <button
            onClick={() => toggleFavorite(meal)}
            className="absolute top-3 right-3 p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all"
        >
            <Heart
                className={`w-5 h-5 ${isFav
                    ? 'fill-red-500 text-red-500'
                    : 'text-gray-600'
                    }`}
            />
        </button>)
}

export default LikeButton