import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import MainSection from './components/MainSection';
import DaysSection from './components/DaysSection';

function App() {

  const [city, setCity] = useState('');

  const searchBoxToApp = (city) => {
    setCity(city);
  };

  return (
    <div className='pt-5 flex flex-col items-center'>
      <SearchBox searchBoxToApp={searchBoxToApp} />
      <MainSection city={city} />
      <DaysSection city={city} />
    </div>
  );
};

export default App;
