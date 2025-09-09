import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, BookOpen, ChefHat, Info, Search, Home, Users } from "lucide-react";
import useThemeStore from "../store/themeStore";

const navItems = [
  { id: '/', label: 'Home', icon: Home },
  { id: '/favorites', label: 'Favorites', icon: Users },
  { id: '/about', label: 'About', icon: Info },
];

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <nav className="bg-white dark:bg-gray-900 fixed top-0 left-0 right-0 z-50 shadow-md border-b border-[#E5E8EB] dark:border-gray-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Nav Items */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
                Recipe Finder
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6">
              {navItems.map(({ id, label, icon: Icon }) => (
                <Link
                  key={id}
                  to={id}
                  className={`flex items-center gap-1 font-medium cursor-pointer transition-colors duration-200 ${
                    currentPath === id
                      ? "text-red-500"
                      : "text-gray-700 dark:text-gray-300 hover:text-red-400"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Search + Icons */}
          <div className="flex space-x-4 items-center">
            <div className="bg-[#F5F0F0] dark:bg-gray-800 rounded-md flex items-center h-[30px] px-2 transition-colors duration-200">
              <Search height={15} className="text-gray-600 dark:text-gray-400" />
              <input
                className="placeholder:text-sm pl-2 bg-transparent border-none focus:outline-none w-24 sm:w-32 md:w-40 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                placeholder="Search ..."
              />
            </div>

            <button
              onClick={() => {
                console.log('Button clicked, current isDark:', isDark);
                toggleTheme();
                // Force a small delay to ensure state update
                setTimeout(() => {
                  console.log('After toggle, isDark:', useThemeStore.getState().isDark);
                }, 50);
              }}
              className="h-[30px] w-[30px] flex items-center justify-center rounded-md bg-[#F5F0F0] dark:bg-gray-800 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun height={15} className="text-yellow-500" />
              ) : (
                <Moon height={15} className="text-gray-600" />
              )}
            </button>

            <div className="h-[30px] w-[30px] rounded-full bg-[#F5F0F0] dark:bg-gray-800 cursor-pointer transition-colors duration-200" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;