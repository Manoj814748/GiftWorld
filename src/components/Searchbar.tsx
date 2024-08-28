import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  // Handle input change
  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setQuery(e.target.value);
    // You can handle search logic here, such as filtering a list or making an API call
  };

  return (
    <div style={{ margin: '20px' }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        style={{
          padding: '10px',
          width: '300px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
};

export default SearchBar;
