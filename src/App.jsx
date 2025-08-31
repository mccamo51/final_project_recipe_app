// App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LogIn, Info } from 'lucide-react';
import './App.css';

import useAuthStore from "../src/store/store";
import LoginPage from '../src/pages/LoginPage';
import HomePage from '../src/pages/HomePage';
import FavoritePage from './pages/FavoritePage';
import RecipesPage from './pages/RecipeDetails';
import Navigation from './components/Navigations';

const AboutPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center max-w-2xl px-4">
      <Info className="h-24 w-24 text-gray-400 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-900 mb-2">About Recipe Finder</h2>
      <p className="text-gray-600">
        Recipe Finder is your ultimate destination for discovering, sharing, and enjoying
        incredible recipes from around the world. Join our community of food lovers today!
      </p>
    </div>
  </div>
);

const App = () => {
  const { isAuthenticated } = useAuthStore();
  const { setState } = useAuthStore;

  const handleLogout = () => {
    setState({
      user: null,
      isAuthenticated: false,
    });
  };

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes/:id" element={<RecipesPage />} />
            <Route path="/community" element={<FavoritePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <button
            onClick={handleLogout}
            className="fixed bottom-6 right-6 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors"
            title="Logout"
          >
            <LogIn className="h-5 w-5 rotate-180" />
          </button>
        </div>
      </div>
    </Router>
  );
};

export default App;
