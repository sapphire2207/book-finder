import React, {
  createContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { SearchFilters, Book } from "../types";
import axios from "axios";

interface BookContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filters: SearchFilters;
  setFilters: (filters: SearchFilters) => void;
  showFilters: boolean;
  toggleFilters: () => void;
  clearFilters: () => void;
  loading: boolean;
  error: string;
  hasSearched: boolean;
  books: Book[];
  selectedBook: Book | null;
  setSelectedBook: (book: Book | null) => void;
  searchBooks: (query?: string, searchFilters?: SearchFilters) => Promise<void>;
  handleSearch: () => void;
}

export const BookContext = createContext<BookContextType | undefined>(
  undefined
);

export const BookProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState<SearchFilters>({
    author: "",
    year: "",
    subject: "",
  });
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const searchBooks = useCallback(
    async (query = searchQuery, searchFilters = filters) => {
      const isEmpty =
        !query.trim() &&
        !searchFilters.author.trim() &&
        !searchFilters.year.trim() &&
        !searchFilters.subject.trim();

      if (isEmpty) {
        setBooks([]);
        setError("");
        setHasSearched(false);
        return;
      }

      setLoading(true);
      setError("");
      setHasSearched(true);

      try {
        let searchParams = new URLSearchParams();
        let searchTerms = query;

        if (searchFilters?.author) {
          searchTerms += ` author:${searchFilters.author}`;
        }
        if (searchFilters?.subject) {
          searchTerms += ` subject:${searchFilters.subject}`;
        }

        searchParams.append("q", searchTerms);
        searchParams.append("limit", "20");
        searchParams.append(
          "fields",
          "key,title,author_name,first_publish_year,isbn,cover_i,subject,publisher,language,edition_count,ratings_average,ratings_count"
        );

        if (searchFilters?.year) {
          searchParams.append("first_publish_year", searchFilters.year);
        }

        const url = `https://openlibrary.org/search.json?${searchParams.toString()}`;
        const response = await axios.get(url);
        setBooks(response.data.docs || []);
      } catch (err) {
        setError("Failed to search books. Please try again.");
        setBooks([]);
      } finally {
        setLoading(false);
      }
    },
    [filters, searchQuery]
  );

  const toggleFilters = () => setShowFilters((prev) => !prev);

  const clearFilters = () => {
    const cleared = { author: "", year: "", subject: "" };
    setFilters(cleared);
  };

  const handleSearch = () => {
    searchBooks(searchQuery, filters);
  };

  return (
    <BookContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        filters,
        setFilters,
        showFilters,
        toggleFilters,
        clearFilters,
        loading,
        error,
        hasSearched,
        books,
        selectedBook,
        setSelectedBook,
        searchBooks,
        handleSearch,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
