import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { FaSearch } from 'react-icons/fa';

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <TextField
      value={query}
      onChange={handleChange}
      label="Pesquisar"
      variant="outlined"
      sx={{ width: '100%' }} // Garante que o campo tenha 100% de largura
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <FaSearch />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
