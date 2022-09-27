import React from 'react';
import SearchBox from './components/SearchBox';
import MainSection from './components/MainSection';
import DaysSection from './components/DaysSection';

function App() {

  return (
    <div className='pt-5 flex flex-col items-center'>
      <SearchBox />
      <MainSection />
      <DaysSection />
    </div>
  );
};

export default App;
