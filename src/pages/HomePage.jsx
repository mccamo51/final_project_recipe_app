import React, { useState } from 'react';
import { Search, Heart } from "lucide-react";

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

const HomePage = () => {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free'
  ];

  const handleFilterChange = (filter) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const toggleFavorite = (recipeId) => {
    setRecipes(prev => 
      prev.map(recipe => 
        recipe.id === recipeId 
          ? { ...recipe, isFavorite: !recipe.isFavorite }
          : recipe
      )
    );
  };

  const handleSurpriseMe = () => {
    // Shuffle the recipes for a surprise effect
    setRecipes(prev => [...prev].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Filters Sidebar */}
        <div className="w-80 bg-white p-6 ">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Filters</h2>
          
          <div className="space-y-4">
            {filters.map((filter) => (
              <label key={filter} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(filter)}
                  onChange={() => handleFilterChange(filter)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-gray-700 text-sm">{filter}</span>
              </label>
            ))}
          </div>

          <button
            onClick={handleSurpriseMe}
            className="w-full mt-8 bg-[#F5F0F0] hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors"
          >
            Surprise Me
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md bg-[#F5F0F0] rounded-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for recipes or ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 placeholder:text-sm  rounded-md focus:outline-none focus:ring-0 focus:rounded-md focus:border-transparent"
              />
            </div>
          </div>

          {/* Recipes Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recipes</h2>
            
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;