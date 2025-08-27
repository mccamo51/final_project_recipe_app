
import './App.css'
import useAuthStore  from  "../src/store/store"

import LoginPage from '../src/pages/LoginPage'
import HomePage from '../src/pages/HomePage'
// Main App Component
const App = () => {
  const { currentPage, isAuthenticated } = useAuthStore();
  const { setState } = useAuthStore;

  const handlePageChange = (page) => {
    setState({ currentPage: page });
  };

  const handleLogout = () => {
    setState({ 
      user: null, 
      isAuthenticated: false, 
      currentPage: 'login' 
    });
  };

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'recipes':
        return <RecipesPage />;
      case 'community':
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <Users className="h-24 w-24 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Community Page</h2>
              <p className="text-gray-600">Coming soon! Connect with fellow food enthusiasts.</p>
            </div>
          </div>
        );
      case 'about':
        return (
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
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <div className="relative">
        {renderPage()}
        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="fixed bottom-6 right-6 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors"
          title="Logout"
        >
          <LogIn className="h-5 w-5 rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default App;

