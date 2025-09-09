import React, { useEffect, useState } from 'react';
import { getList } from '../service/theMealDB';
function FilterBar({ onFilterSelect }) {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getList('c'); 
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
      onFilterSelect(filter); 
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
        Filters
      </h2>

      <div className="space-y-4">
        {filters.map((filter, index) => (
          <label key={index} className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="radio"
              name="category"
              value={filter.strCategory}
              checked={selectedFilter === filter.strCategory}
              onChange={() => handleFilterChange(filter.strCategory)}
              className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200"
            />
            <span className="text-gray-700 dark:text-gray-300 text-sm group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
              {filter.strCategory}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;