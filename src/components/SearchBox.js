import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ searchBoxToApp }) => {

  const [city, setCity] = useState('');

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearchClick = (event) => {
    event.preventDefault();
    searchBoxToApp(city);
  };

  return (
    <div>
      <form className='flex gap-5'>
        <button onClick={handleSearchClick}><FaSearch className='text-xl' /></button>
        <input type='text' placeholder='Search a location' onChange={handleChange} className='h-8 px-8 rounded-lg outline-none bg-slate-300 placeholder-slate-500'/>
      </form>
    </div>
  );
};

export default SearchBox;