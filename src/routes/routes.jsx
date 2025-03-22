import React from 'react';
import { Route, Routes } from 'react-router-dom';  // Importando o Routes corretamente
import Home from '../pages/Home';
import AcervoList from '../pages/AcervoList';
import BookDetails from '../pages/BookDetails';

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/acervo",
    element: <AcervoList />
  },
  {
    path: "/detalhes-livro/:id",  // Rota dinâmica para detalhes do livro
    element: <BookDetails />
  }
];

const RoutesConfig = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default RoutesConfig;
