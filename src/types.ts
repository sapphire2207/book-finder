export interface SearchFilters {
  author: string;
  year: string;
  subject: string;
}

export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
  language?: string[];
  edition_count?: number;
  ratings_average?: number;
  ratings_count?: number;
}
