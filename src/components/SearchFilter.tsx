import React, { useContext } from "react";
import { Filter, Loader2, Search } from "lucide-react";
import { BookContext } from "../contexts/BookContext";

const SearchFilter: React.FC = () => {
  const context = useContext(BookContext);
  if (!context) throw new Error("SearchFilter must be used within BookProvider");

  const {
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    loading,
    showFilters,
    toggleFilters,
    clearFilters,
    handleSearch,
  } = context;

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-white p-5 mb-6 rounded-xl shadow-sm border border-gray-200">
      <div className="space-y-4">
        {/* Search Bar & Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search for books, authors, or topics..."
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         transition text-sm"
            />
          </div>

          <div className="flex gap-2">
            {/* Filters Button */}
            <button
              type="button"
              onClick={toggleFilters}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition ${
                showFilters
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Filter size={16} className="mr-2" />
              Filters
            </button>

            {/* Search Button */}
            <button
              type="button"
              onClick={handleSearch}
              disabled={loading}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center justify-center 
                         text-sm font-medium transition hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Search"
              )}
            </button>
          </div>
        </div>

        {/* Filters Section */}
        {showFilters && (
          <div className="pt-4 mt-4 border-t border-gray-200">
            <div className="grid gap-3 md:grid-cols-3">
              <input
                type="text"
                placeholder="Filter by author..."
                value={filters.author}
                onChange={(e) => setFilters({ ...filters, author: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Filter by year..."
                value={filters.year}
                onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Filter by subject..."
                value={filters.subject}
                onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Clear Filters */}
            <button
              type="button"
              onClick={clearFilters}
              className="mt-3 text-blue-600 text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
