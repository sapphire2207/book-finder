import React from "react";
import { User, Calendar, Star, BookOpen } from "lucide-react";
import type { Book } from "../types";

interface BookCardProps {
  book: Book;
  onSelect: () => void;
}

const getCoverUrl = (coverId?: number, size: "S" | "M" | "L" = "M") =>
  coverId ? `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg` : "";

const BookCard: React.FC<BookCardProps> = ({ book, onSelect }) => (
  <div
    onClick={onSelect}
    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm 
               hover:shadow-md transition-shadow cursor-pointer flex flex-col"
  >
    {/* Cover */}
    <div className="w-full h-52 flex items-center justify-center overflow-hidden bg-gray-50">
      {book.cover_i ? (
        <img
          src={getCoverUrl(book.cover_i, "M")}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-400">
          <BookOpen size={40} />
          <span className="text-xs mt-1 text-center">No Cover</span>
        </div>
      )}
    </div>

    {/* Info */}
    <div className="p-3 flex-1 flex flex-col">
      {/* Title */}
      <h3
        className="font-semibold text-sm md:text-base text-gray-900 mb-2 line-clamp-2"
      >
        {book.title}
      </h3>

      {/* Author */}
      {book.author_name && (
        <div className="flex items-center text-gray-600 mb-3 text-sm">
          <User size={14} className="mr-1 shrink-0" />
          <span className="truncate">
            {book.author_name.slice(0, 2).join(", ")}
            {book.author_name.length > 2 &&
              ` +${book.author_name.length - 2} more`}
          </span>
        </div>
      )}

      {/* Footer: Year + Rating */}
      <div className="flex items-center justify-between mt-auto text-xs text-gray-500">
        {book.first_publish_year && (
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{book.first_publish_year}</span>
          </div>
        )}
        {book.ratings_average && (
          <div className="flex items-center text-yellow-500 font-medium">
            <Star size={14} className="mr-1" />
            <span>{book.ratings_average.toFixed(1)}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default BookCard;
