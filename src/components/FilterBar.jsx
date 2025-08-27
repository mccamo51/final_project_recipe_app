import React, { useState } from 'react'

function FilterBar() {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const filters = [
        'Vegetarian',
        'Vegan',
        'Gluten-Free'
    ];

    const handleSurpriseMe = () => {
        // Shuffle the recipes for a surprise effect
        setRecipes(prev => [...prev].sort(() => Math.random() - 0.5));
    };
    const handleFilterChange = (filter) => {
        setSelectedFilters(prev =>
            prev.includes(filter)
                ? prev.filter(f => f !== filter)
                : [...prev, filter]
        );
    };

    return (
        <div className="w-80 bg-white p-6 ">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Filters</h2>

            <div className="space-y-4">
                {filters.map((filter) => (
                    <label key={filter} className="flex items-center space-x-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={selectedFilters.includes(filter)}
                            onChange={() => handleFilterChange(filter)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-700 text-sm">{filter}</span>
                    </label>
                ))}
            </div>

            <button
                onClick={handleSurpriseMe}
                className="w-full mt-8 bg-[#F5F0F0] hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors"
            >
                Surprise Me
            </button>
        </div>

    )
}

export default FilterBar