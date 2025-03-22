import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from './routes/routes';  // Importando o componente de rotas

import './index.css';

const App = () => {
  return (
    <Router>
      <RoutesConfig />
    </Router>
  );
};

export default App;
