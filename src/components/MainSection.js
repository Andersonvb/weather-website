import React from 'react';
import { FaWind } from 'react-icons/fa';
import { FiDroplet } from 'react-icons/fi';

const MainSection = () => {
  return (
    <div className='px-5 py-10 flex flex-col items-center gap-3'>
      <img src='https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png' alt='weather' className='w-96' />
      <span className='text-2xl'>Cloudy</span>
      <h2 className='text-9xl'>28°</h2>
      <small className='text-2xl'>London</small>
      <div className='my-5 flex gap-5 items-center justify-center'>
        <FaWind />
        <small className='text-xl'>8 km/h</small>
        <FiDroplet />
        <small className='text-xl'>47%</small>
      </div>
    </div>
  );
};

export default MainSection;