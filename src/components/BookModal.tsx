import React from "react";
import { BookOpen, Star, ExternalLink } from "lucide-react";
import type { Book } from "../types";

interface BookModalProps {
  book: Book;
  onClose: () => void;
}

const getCoverUrl = (coverId?: number, size: "S" | "M" | "L" = "L") =>
  coverId ? `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg` : "";

const BookModal: React.FC<BookModalProps> = ({ book, onClose }) => (
  <div
    className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-xl shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex justify-between items-start p-5 border-b">
        <h2 className="text-xl font-bold text-gray-800">{book.title}</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition text-2xl leading-none"
        >
          ×
        </button>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col md:flex-row gap-6">
        {/* Cover */}
        <div className="md:w-1/3">
          <div className="bg-gray-100 rounded-lg flex items-center justify-center h-64 overflow-hidden">
            {book.cover_i ? (
              <img
                src={getCoverUrl(book.cover_i, "L")}
                alt={book.title}
                className="w-full h-full object-cover rounded"
              />
            ) : (
              <div className="flex flex-col items-center text-gray-400">
                <BookOpen size={48} />
                <span className="text-xs mt-2">No Cover Available</span>
              </div>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="md:w-2/3 space-y-4">
          {/* Authors */}
          {book.author_name && (
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Authors</h3>
              <p className="text-gray-600">{book.author_name.join(", ")}</p>
            </div>
          )}

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {book.first_publish_year && (
              <div>
                <h4 className="font-semibold text-gray-800">First Published</h4>
                <p className="text-gray-600">{book.first_publish_year}</p>
              </div>
            )}
            {book.edition_count && (
              <div>
                <h4 className="font-semibold text-gray-800">Editions</h4>
                <p className="text-gray-600">{book.edition_count}</p>
              </div>
            )}
            {book.ratings_average && (
              <div>
                <h4 className="font-semibold text-gray-800">Rating</h4>
                <div className="flex items-center text-yellow-500">
                  <Star size={14} className="mr-1" />
                  <span>
                    {book.ratings_average.toFixed(1)} ({book.ratings_count} reviews)
                  </span>
                </div>
              </div>
            )}
            {book.language && (
              <div>
                <h4 className="font-semibold text-gray-800">Languages</h4>
                <p className="text-gray-600">
                  {book.language.slice(0, 3).join(", ")}
                </p>
              </div>
            )}
          </div>

          {/* Open Library Button */}
          <div className="pt-2">
            <a
              href={`https://openlibrary.org${book.key}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 
                         text-white px-5 py-2.5 rounded-lg shadow-sm 
                         hover:from-blue-700 hover:to-indigo-700 transition"
            >
              View on Open Library
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BookModal;
