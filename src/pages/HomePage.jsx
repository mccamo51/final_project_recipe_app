import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';
import { getRandomMeal, searchForMeal, getMealsByCategory } from '../service/theMealDB';
import LikeButton from '../components/LikeButton';

const HomePage = () => {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchRandomMeals() {
            try {
                setLoading(true);
                const meals = await getRandomMeal('b');
                setRecipes(meals || []);
                setError(meals ? '' : 'No meals found.');
            } catch {
                setError('Failed to fetch meals.');
            } finally {
                setLoading(false);
            }
        }

        if (!searchTerm && !selectedCategory) {
            fetchRandomMeals();
        }
    }, [searchTerm, selectedCategory]);

    useEffect(() => {
        if (!searchTerm.trim()) return;

        async function fetchSearchedMeals() {
            try {
                setLoading(true);
                const meals = await searchForMeal(searchTerm);
                setRecipes(meals || []);
                setError(meals ? '' : `No results found for "${searchTerm}".`);
            } catch {
                setError('Error searching for meals.');
            } finally {
                setLoading(false);
            }
        }

        fetchSearchedMeals();
    }, [searchTerm]);

    useEffect(() => {
        if (!selectedCategory) return;

        async function fetchFilteredMeals() {
            try {
                setLoading(true);
                const meals = await getMealsByCategory(selectedCategory);
                console.log("===========", meals)
                setRecipes(meals || []);
                setError(meals ? '' : `No meals in "${selectedCategory}" category.`);
            } catch {
                setError('Error fetching meals by category.');
            } finally {
                setLoading(false);
            }
        }

        fetchFilteredMeals();
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col lg:flex-row transition-colors duration-200">
            <div className="w-full lg:w-80 bg-white dark:bg-gray-900 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700 transition-colors duration-200">
                <FilterBar onFilterSelect={setSelectedCategory} />
            </div>

            <div className="flex-1 p-4 sm:p-6">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
                        Recipes
                    </h2>

                    {loading && (
                        <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">
                            Loading recipes...
                        </p>
                    )}
                    {error && !loading && (
                        <p className="text-red-500 dark:text-red-400 font-medium transition-colors duration-200">
                            {error}
                        </p>
                    )}
                    {!loading && !error && recipes.length === 0 && (
                        <p className="text-gray-500 dark:text-gray-400 transition-colors duration-200">
                            No meals to display.
                        </p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                        {recipes.map((recipe, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-all duration-200 cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        onClick={() => navigate(`/recipes/${recipe.idMeal}`)}
                                        src={recipe.strMealThumb}
                                        alt={recipe.strMeal}
                                        className="w-full h-48 object-cover"
                                    />
                                    <LikeButton meal={recipe} />
                                </div>

                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                                        {recipe.strMeal}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-200">
                                        {[recipe.strCategory, recipe.strArea].filter(Boolean).join(' - ')}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomePage;