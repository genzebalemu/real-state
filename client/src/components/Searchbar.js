import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [searchData, setSearchData] = useState("");

  return (
    <div className="relative">
      <input 
        className="border border-gray-300 rounded-xl pl-3 pr-4 py-1.5 focus:outline-none focus:border-blue-500"
        name='searchData' 
        value={searchData} 
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
        placeholder="Search..."
      />
      <FaSearch className="absolute top-1/2 right-3  -translate-y-1/2 text-gray-500" />
    </div>
  );
}

export default SearchBar;

