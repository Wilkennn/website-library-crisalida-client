import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';  // Importando Link do react-router-dom

const BookCard = ({ book }) => {
  return (
    <Link 
      to={`/detalhes-livro/${book.id}`} // Link para a página de detalhes do livro
      className="border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full min-h-[380px] hover:scale-105 cursor-pointer"
    >
      <img 
        src={book.image} 
        alt={book.title} 
        className="w-full h-48 object-contain rounded-t-lg" 
      />
      <div className="flex flex-col flex-grow justify-between">
        <h3 className="text-2xl font-semibold mt-4">{book.title}</h3>
        <p className="text-gray-700 text-lg">{book.author}</p>
        <p className="text-custom-green font-bold text-xl">R$ {book.price.toFixed(2)}</p>
      </div>
      <Button 
        variant="contained" 
        className="w-full mt-4 py-2 cursor-pointer hover:bg-custom-green"
        sx={{ backgroundColor: '#588C3C' }}
      >
        Comprar
      </Button>
    </Link>
  );
};

export default BookCard;
