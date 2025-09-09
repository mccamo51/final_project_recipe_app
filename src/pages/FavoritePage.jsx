import { Heart } from 'lucide-react';
import React, { useState } from 'react'
import useFavoriteStore from '../store/favoriteStore';
import { useNavigate } from 'react-router-dom';

function FavoritePage() {
  const { favorites } = useFavoriteStore();
  const navigate = useNavigate();
  
  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-80 pt-10 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200'>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
        My Saved Recipes
      </h2>
      {favorites.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">
          You have no favorite meals yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((recipe, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <div className="relative">
                <img
                  onClick={() => navigate(`/recipes/${recipe.idMeal}`)}
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                  {recipe.strMeal}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-200">
                  {[recipe.strCategory, recipe.strArea].filter(Boolean).join(' - ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoritePage;