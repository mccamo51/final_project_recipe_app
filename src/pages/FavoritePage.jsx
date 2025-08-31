import { Heart } from 'lucide-react';
import React, { useState } from 'react'
import useFavoriteStore from '../store/favoriteStore';


function FavoritePage() {
  // const [recipes, setRecipes] = useState(sampleRecipes);
    const { favorites } = useFavoriteStore();


  

  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-80 pt-10 min-h-screen bg-white'>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Saved Recipes</h2>
      {favorites.length === 0 ? (
        <p>You have no favorite meals yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((meal) => (
            <div key={meal.idMeal} className="bg-white p-4 rounded shadow">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded mb-2" />
              <h2 className="font-bold text-xl">{meal.strMeal}</h2>
              <p className="text-sm text-gray-500">{meal.strCategory} - {meal.strArea}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoritePage