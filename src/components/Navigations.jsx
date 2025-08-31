import { Link, useLocation } from "react-router-dom";
import { Bell, BookOpen, ChefHat, Info, Search, Home, Users } from "lucide-react";

const navItems = [
  { id: '/', label: 'Home', icon: Home },
  // { id: '/recipes', label: 'Categories', icon: BookOpen },
  { id: '/favorites', label: 'Favorites', icon: Users },
  { id: '/about', label: 'About', icon: Info },
];

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
<nav className="sticky top-0 z-50 bg-white  border-b border-[#E5E8EB]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex space-x-8 items-center">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold text-gray-900">Recipe Finder</span>
            </div>

            <div className="flex space-x-6">
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

          <div className="flex space-x-4 items-center">
            <div className="bg-[#F5F0F0] rounded-md flex items-center h-[30px] px-2">
              <Search height={15} />
              <input
                className="placeholder:text-sm pl-2 bg-transparent border-none focus:outline-none"
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
