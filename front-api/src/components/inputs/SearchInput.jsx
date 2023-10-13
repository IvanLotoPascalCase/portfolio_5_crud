import React from 'react';
import { HiSearchCircle } from 'react-icons/hi'

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div className="flex items-center border-b border-gray-500 py-2">
      <input
        type="text"
        placeholder="Buscar..."
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        onChange={handleSearch}
      />
      <button
        type="button"
        className="flex-shrink-0 text-grey-600 text-2xl py-2 px-4 rounded focus:outline-none"
      >
        <HiSearchCircle/>
      </button>
    </div>
  );
};

export default SearchBar;