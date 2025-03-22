import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import SearchInput from '../components/SearchInput';
import BookList from '../components/BookList';
import Footer from '../components/Footer'
import FilterSidebar from '../components/FilterSidebar';
import { fetchBooks } from '../data/books';
import '../styles/global.css';

const AcervoList = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);  // Novo estado de carregamento

  useEffect(() => {
    const loadBooks = async () => {
      const booksData = await fetchBooks();
      setBooks(booksData);
      setFilteredBooks(booksData);
      setLoading(false);  // Marca como carregado após os dados serem recuperados
    };

    loadBooks();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilter = (filters) => {
    let filtered = books;

    if (filters.genre) {
      filtered = filtered.filter((book) => book.genre === filters.genre);
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-');
      filtered = filtered.filter((book) => {
        if (max === '+') {
          return book.price >= parseInt(min);
        } else {
          return book.price >= parseInt(min) && book.price <= parseInt(max);
        }
      });
    }

    setFilteredBooks(filtered);
  };

  // Mostrar um spinner enquanto os dados estão carregando
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full" role="status">
          <span className="sr-only">Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
        <div className="flex p-6 bg-white min-h-screen">
          <FilterSidebar onFilter={handleFilter} />
          <div className="flex-grow ml-6">
            <SearchInput onSearch={handleSearch} />
            <BookList books={filteredBooks} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AcervoList;
