// src/components/FilterBar.jsx
import React, { useEffect, useState } from 'react';
import { getList } from '../service/spoonacularApiService';

function FilterBar({ onFilterSelect }) {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getList('c'); // list of categories
        setFilters(data);
      } catch (error) {
        console.error('Failed to fetch filters:', error);
      }
    }

    fetchData();
  }, []);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    if (onFilterSelect) {
      onFilterSelect(filter); // send selection to parent
    }
  };

  return (
    <div className="w-80 bg-white p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Filters</h2>

      <div className="space-y-4">
        {filters.map((filter, index) => (
          <label key={index} className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="category"
              value={filter.strCategory}
              checked={selectedFilter === filter.strCategory}
              onChange={() => handleFilterChange(filter.strCategory)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-700 text-sm">{filter.strCategory}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
