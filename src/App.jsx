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
import AboutPage from './pages/AboutPage';


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
            <Route path="/favorites" element={<FavoritePage />} />
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
