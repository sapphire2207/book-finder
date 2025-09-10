import React, { useContext } from "react";
import { BookOpen, Loader2 } from "lucide-react";
import BookCard from "./BookCard";
import BookModal from "./BookModal";
import { BookContext } from "../contexts/BookContext";

const BooksView: React.FC = () => {
  const context = useContext(BookContext);
  if (!context) throw new Error("BooksView must be used within BookProvider");

  const {
    books,
    loading,
    error,
    selectedBook,
    setSelectedBook,
    hasSearched,
    searchQuery,
    filters,
  } = context;

  const isEmptySearchAndFilters =
    !searchQuery.trim() &&
    !filters.author.trim() &&
    !filters.year.trim() &&
    !filters.subject.trim();

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold text-gray-800">
          {loading ? "Searching..." : `Found ${books.length} books`}
        </h2>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 mb-4 rounded-lg">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-10 text-gray-600">
          <Loader2 className="h-7 w-7 animate-spin text-blue-600 mb-2" />
          <p>Fetching books...</p>
        </div>
      ) : books.length > 0 ? (
        /* Results Grid */
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => (
            <BookCard
              key={book.key}
              book={book}
              onSelect={() => setSelectedBook(book)}
            />
          ))}
        </div>
      ) : hasSearched && !loading && !isEmptySearchAndFilters ? (
        /* No Results After Search */
        <div className="text-center py-12">
          <BookOpen className="mx-auto h-14 w-14 text-gray-400 mb-3" />
          <h3 className="text-lg font-medium text-gray-800">
            No books found
          </h3>
          <p className="text-gray-500 mt-1">
            Try adjusting your search terms or filters
          </p>
        </div>
      ) : isEmptySearchAndFilters ? (
        /* Empty Initial State */
        <div className="text-center py-12">
          <BookOpen className="mx-auto h-14 w-14 text-gray-300 mb-3" />
          <h3 className="text-lg font-medium text-gray-700">
            Start searching
          </h3>
          <p className="text-gray-500 mt-1">
            Enter a title, author, or subject to find books
          </p>
        </div>
      ) : null}

      {/* Modal */}
      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
};

export default BooksView;
