import { useState } from "react";

// Recipes Page Component
const RecipesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes] = useState([
    { id: 1, title: 'Spaghetti Carbonara', time: '20 min', difficulty: 'Easy', image: '🍝' },
    { id: 2, title: 'Chicken Tikka Masala', time: '45 min', difficulty: 'Medium', image: '🍛' },
    { id: 3, title: 'Chocolate Chip Cookies', time: '30 min', difficulty: 'Easy', image: '🍪' },
    { id: 4, title: 'Beef Wellington', time: '2 hours', difficulty: 'Hard', image: '🥩' },
  ]);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Recipe Collection</h1>
          <div className="max-w-md mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search recipes..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="text-6xl text-center py-8 bg-gray-100">
                {recipe.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>⏱️ {recipe.time}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {recipe.difficulty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesPage