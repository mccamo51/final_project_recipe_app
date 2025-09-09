import { useState } from "react";
import { ChefHat, Eye, EyeOff } from 'lucide-react';
import useAuthStore from "../store/authStore";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setState } = useAuthStore;

  const handleLogin = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setState({ 
        user: { email }, 
        isAuthenticated: true,
        currentPage: 'home'
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-dvw bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-200">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-200">
        <div className="text-center mb-8">
          <ChefHat className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
            Welcome to Recipe Finder
          </h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
              Username or Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your username or email"
              className="w-full text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 transition-colors duration-200"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full text-black dark:text-white px-3 py-2 pr-10 border placeholder:text-gray-500 dark:placeholder:text-gray-400 border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 transition-colors duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center bg-transparent"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                )}
              </button>
            </div>
          </div>
          
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-red-600 hover:text-red-500">
            Forgot password?
          </a>
        </div>
        
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">
            Don't have an account?{' '}
            <a href="#" className="text-red-600 hover:text-red-500 font-medium">
              Sign Up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;