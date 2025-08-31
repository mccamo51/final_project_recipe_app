import { Heart } from 'lucide-react';
import React, { useState } from 'react'

const sampleRecipes = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    description: "A simple and delicious pizza with fresh basil and tomatoes.",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop&crop=center",
    isFavorite: false
  },
  {
    id: 2,
    title: "Spicy Thai Green Curry",
    description: "A flavorful and aromatic curry with coconut milk and green chilies.",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop&crop=center",
    isFavorite: false
  },
  {
    id: 3,
    title: "Creamy Tomato Pasta",
    description: "A rich and creamy pasta dish with a hint of garlic.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop&crop=center",
    isFavorite: false
  },
  {
    id: 4,
    title: "Grilled Salmon with Lemon",
    description: "Perfectly grilled salmon fillets with a zesty lemon sauce.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop&crop=center",
    isFavorite: false
  }
];

function FavoritePage() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  

  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-80 pt-10'>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Saved Recipes</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4 sm:gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="rounded-lg overflow-hidden cursor-pointer transition-shadow">
            <div className="relative">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {recipe.title}
              </h3>
              <p className="text-[#876363] text-sm leading-relaxed">
                {recipe.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoritePage