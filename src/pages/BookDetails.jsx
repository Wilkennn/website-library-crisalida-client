import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // useParams para acessar o id da URL

const BookDetails = () => {
  const { id } = useParams();  // Obtendo o id do livro da URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const response = await fetch(`https://api.example.com/books/${id}`);
      const data = await response.json();
      setBook(data);
    };
    fetchBookDetails();
  }, [id]);

  if (!book) return <div>Carregando...</div>;

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>Preço: R$ {book.price}</p>
    </div>
  );
};

export default BookDetails;
