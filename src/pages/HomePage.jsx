import { BookOpen, ChefHat, Users } from "lucide-react";

// Home Page Component
const HomePage = () => {
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Recipe Finder, {user?.email?.split('@')[0]}!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing recipes, share your own creations, and connect with fellow food enthusiasts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <BookOpen className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Browse Recipes</h3>
            <p className="text-gray-600">Explore thousands of delicious recipes from around the world.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <Users className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Join Community</h3>
            <p className="text-gray-600">Connect with other food lovers and share your culinary adventures.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <ChefHat className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Share Your Recipes</h3>
            <p className="text-gray-600">Upload and share your favorite recipes with the community.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;