// bookService.js
export const fetchBooks = async () => {
  const response = await fetch('https://openlibrary.org/subjects/love.json?limit=20');
  const data = await response.json();
  
  const bookData = data.works.map((book) => ({
    id: book.key,
    title: book.title,
    author: book.authors ? book.authors[0].name : 'Desconhecido',
    price: Math.floor(Math.random() * (60 - 20 + 1)) + 20, // Preço aleatório entre 20 e 60
    image: book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg` : 'https://via.placeholder.com/150',
  }));
  
  return bookData;
};
