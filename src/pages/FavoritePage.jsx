import { Heart } from 'lucide-react';
import React, { useState } from 'react'
import useFavoriteStore from '../store/favoriteStore';
import { useNavigate } from 'react-router-dom';


function FavoritePage() {
  const { favorites } = useFavoriteStore();
    const navigate = useNavigate();
  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-80 pt-10 min-h-screen bg-white'>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Saved Recipes</h2>
      {favorites.length === 0 ? (
        <p>You have no favorite meals yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {recipe.strMeal}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {[recipe.strCategory, recipe.strArea].filter(Boolean).join(' - ')}                    </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoritePage