import React from 'react';
import Day from './Day';

const DaysSection = () => {
  return (
    <div className='w-full py-5 flex flex-col items-center gap-5 bg-slate-900'>
      <div className='w-2/3 lg:w-2/5'>
        <span className='text-white text-2xl'>Next week</span>
      </div>
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
    </div>
  );
};

export default DaysSection;