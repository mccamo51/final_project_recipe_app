import { Heart } from 'lucide-react';
import React, { useState } from 'react'


 // Sample recipe data to match the design
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
  
  {/* Recipes Section */}
 

    const [recipes, setRecipes] = useState(sampleRecipes);



  return (
          <div className='px-12 pt-4'>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Saved Recipes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-48 object-cover"
                    />
                    <button
                      onClick={() => toggleFavorite(recipe.id)}
                      className="absolute top-3 right-3 p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all"
                    >
                      <Heart 
                        className={`w-5 h-5 ${
                          recipe.isFavorite 
                            ? 'fill-red-500 text-red-500' 
                            : 'text-gray-600'
                        }`}
                      />
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {recipe.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
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