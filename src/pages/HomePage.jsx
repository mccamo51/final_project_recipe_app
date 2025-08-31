import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';
import { getRandomMeal, searchForMeal, getMealsByCategory } from '../service/spoonacularApiService';
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
        <div className="min-h-screen bg-white flex flex-col lg:flex-row">
            <div className="w-full lg:w-80 bg-white border-b lg:border-b-0 lg:border-r">
                <FilterBar onFilterSelect={setSelectedCategory} />
            </div>

            <div className="flex-1 p-4 sm:p-6">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Recipes</h2>

                    {loading && <p className="text-gray-600">Loading recipes...</p>}
                    {error && !loading && <p className="text-red-500 font-medium">{error}</p>}
                    {!loading && !error && recipes.length === 0 && (
                        <p className="text-gray-500">No meals to display.</p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                        {recipes.map((recipe, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
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
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {recipe.strMeal}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
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
