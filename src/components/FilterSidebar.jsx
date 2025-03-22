import React, { useState } from 'react';
import { Button, Select, MenuItem, FormControl, InputLabel, Checkbox, ListItemText, Box, Typography } from '@mui/material';

const FilterSidebar = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    condition: [],
    priceRange: '',
    editors: [],
    languages: []
  });

  const handleCheckboxChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: prevFilters[name].includes(value)
        ? prevFilters[name].filter((item) => item !== value)
        : [...prevFilters[name], value]
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    onFilter(filters);
  };

  return (
    <Box width="100%" maxWidth={300} p={2} bgcolor="white" boxShadow={3} borderRadius={2}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Filtrar
      </Typography>

      {/* Condição do Produto */}
      <Typography variant="subtitle1" fontWeight="medium" mt={2}>
        Condição do Produto
      </Typography>
      {['Usado', 'Novo', 'Semi-novo'].map((condition) => (
        <Box key={condition} display="flex" alignItems="center">
          <Checkbox
            checked={filters.condition.includes(condition)}
            onChange={() => handleCheckboxChange('condition', condition)}
          />
          <ListItemText primary={condition} />
        </Box>
      ))}

      {/* Faixa de Preço */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Faixa de Preço</InputLabel>
        <Select
          name="priceRange"
          value={filters.priceRange}
          onChange={handleChange}
        >
          <MenuItem value="">Todos</MenuItem>
          <MenuItem value="15-25">R$ 15,00 - R$ 25,00</MenuItem>
          <MenuItem value="25-50">R$ 25,00 - R$ 50,00</MenuItem>
          <MenuItem value="50-100">R$ 50,00 - R$ 100,00</MenuItem>
          <MenuItem value="100-250">R$ 100,00 - R$ 250,00</MenuItem>
          <MenuItem value="250+">Acima de R$ 250,00</MenuItem>
        </Select>
      </FormControl>

      {/* Editoras */}
      <Typography variant="subtitle1" fontWeight="medium" mt={2}>
        Editoras
      </Typography>
      {['Record', 'Companhia das Letras', 'Nova Fronteira', 'Rocco'].map((editor) => (
        <Box key={editor} display="flex" alignItems="center">
          <Checkbox
            checked={filters.editors.includes(editor)}
            onChange={() => handleCheckboxChange('editors', editor)}
          />
          <ListItemText primary={editor} />
        </Box>
      ))}

      {/* Idiomas */}
      <Typography variant="subtitle1" fontWeight="medium" mt={2}>
        Idiomas
      </Typography>
      {['Português', 'Inglês', 'Espanhol', 'Alemão'].map((language) => (
        <Box key={language} display="flex" alignItems="center">
          <Checkbox
            checked={filters.languages.includes(language)}
            onChange={() => handleCheckboxChange('languages', language)}
          />
          <ListItemText primary={language} />
        </Box>
      ))}

      <Button
        variant="contained"
        className="bg-custom-green text-white"
        onClick={applyFilters}
        fullWidth
        sx={{ mt: 2, backgroundColor: '#588C3C' }}
      >
        Aplicar Filtros
      </Button>
    </Box>
  );
};

export default FilterSidebar;
