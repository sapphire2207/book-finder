import BooksView from './components/BooksView';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import { BookProvider } from './contexts/BookContext';

function App() {
  return (
    <BookProvider>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchFilter />
        <BooksView />
      </main>
    </BookProvider>
  );
}

export default App;
