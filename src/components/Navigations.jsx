import { Link, useLocation } from "react-router-dom";
import { Bell, BookOpen, ChefHat, Info, Search, Home, Users } from "lucide-react";

const navItems = [
  { id: '/', label: 'Home', icon: Home },
  { id: '/favorites', label: 'Favorites', icon: Users },
  { id: '/about', label: 'About', icon: Info },
];

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md border-b border-[#E5E8EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Nav Items */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold text-gray-900">Recipe Finder</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6">
              {navItems.map(({ id, label, icon: Icon }) => (
                <Link
                  key={id}
                  to={id}
                  className={`flex items-center gap-1 font-medium cursor-pointer ${
                    currentPath === id
                      ? "text-red-500"
                      : "text-gray-700 hover:text-red-400"
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
            <div className="bg-[#F5F0F0] rounded-md flex items-center h-[30px] px-2">
              <Search height={15} />
              <input
                className="placeholder:text-sm pl-2 bg-transparent border-none focus:outline-none w-24 sm:w-32 md:w-40"
                placeholder="Search ..."
              />
            </div>

            <div className="h-[30px] w-[30px] flex items-center justify-center rounded-md bg-[#F5F0F0] cursor-pointer">
              <Bell height={15} />
            </div>

            <div className="h-[30px] w-[30px] rounded-full bg-[#F5F0F0] cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
