import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = () => {
  return (
    <div className='flex gap-5'>
      <button><FaSearch className='text-xl' /></button>
      <input type='text' placeholder='Search a location' className='h-8 px-8 rounded-lg outline-none bg-slate-300 placeholder-slate-500'/>
    </div>
  );
};

export default SearchBox;