// BookList.js
import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../data/books';   // Importa a função que busca os livros
import BookCard from './BookCard';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const booksData = await fetchBooks(); // Chama a função para pegar os livros
      setBooks(booksData);  // Atualiza o estado com os livros
    };

    getBooks();
  }, []);

  return (
    <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
