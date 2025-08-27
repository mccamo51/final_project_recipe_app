import { Bell, BookOpen, ChefHat, Heart, Home, Info, LogIn, Search, Users } from "lucide-react";


// Navigation Component
const Navigation = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'recipes', label: 'Categories', icon: BookOpen },
    { id: 'community', label: 'Favorites', icon: Users },
    { id: 'about', label: 'About', icon: Info },
  ];

  return (
    <nav className="bg-white shadow-lg  border-b-1 border-b-[#E5E8EB]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">

        <div className="flex  space-x-8 items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-red-500" />
            <span className="text-xl font-bold text-gray-900">Recipe Finder</span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex space-x-8 ">
            {navItems.map((item) => {
                const Icon = item.icon;
                return (
                    
                    <h2 className="text-black cursor-pointer">{item.label}</h2>
                );
            })}
          </div>

          
        </div>

        <div className="flex space-x-8  items-center h-16">
            <div className="bg-[#F5F0F0] rounded-md flex items-center h-[30px]">
                <Search height={15} />
                <input className="placeholder:text-sm pl-2 border-0 focus:border-0 focus:ring-0 outline-none" placeholder="Search ..."/>
            </div>
            <div className="h-[30px] w-[30px] cursor-pointer rounded-md bg-[#F5F0F0] items-center place-content-center place-items-center">
            <Bell height={15} />

            </div>
            <div className="h-[30px] w-[30px] rounded-full bg-[#F5F0F0] cursor-pointer">
                
            </div>
          </div>
      </div>
            </div>
    </nav>
  );
};

export default Navigation;