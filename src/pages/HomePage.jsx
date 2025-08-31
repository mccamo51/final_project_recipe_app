import React, { useEffect, useState } from 'react';
import { Search, Heart } from "lucide-react";
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';
import { getRandomMeal, searchForMeal } from '../service/spoonacularApiService';
import { useNavigate } from 'react-router-dom';




const HomePage = () => {

    const navigate = useNavigate()
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


useEffect(() => {
  async function fetchData() {
    const meals = await getRandomMeal("b");
    setRecipes(meals)
    console.log(meals); // Array of recipes
  }

  fetchData();
}, []);


  const toggleFavorite = (recipeId) => {
    setRecipes(prev => 
      prev.map(recipe => 
        recipe.idMeal === recipeId 
          ? { ...recipe, isFavorite: !recipe.isFavorite }
          : recipe
      )
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:flex-shrink-0">
          <FilterBar />
        </div>
        
        <div className="flex-1 p-4 sm:p-6">
          <SearchBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recipes</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
              {recipes.map((recipe, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                
                onClick={()=>navigate(`/recipes/${recipe.idMeal}`)}
                >
                  <div className="relative">
                    <img
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal}
                      className="w-full h-48 object-cover"
                    />
                    <button
                      onClick={() => toggleFavorite(recipe.idMeal)}
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
                      {recipe.strMeal}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {recipe.strCategory} {" -  "} {recipe.strArea}
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