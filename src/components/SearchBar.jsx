import { Search } from 'lucide-react'
import React from 'react'

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
<div className="mb-8">
            <div className="relative max-w-md bg-[#F5F0F0]  rounded-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for recipes or ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 placeholder:text-sm bg-transparent rounded-md focus:outline-none focus:ring-0 focus:rounded-md focus:border-transparent"
              />
            </div>
          </div>
  )
}

export default SearchBar