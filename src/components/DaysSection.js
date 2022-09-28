import React, { useEffect, useState } from 'react';
import Day from './Day';

const PageLoaded = ({ cityData }) => {
  return (
    <div className='w-full py-10 flex flex-col items-center gap-5 bg-slate-900'>
      <div className='w-2/3 lg:w-2/5'>
        <span className='text-white text-2xl'>Next week</span>
      </div>
      <Day cityData={cityData} day={8} />
      <Day cityData={cityData} day={16} />
      <Day cityData={cityData} day={24} />
      <Day cityData={cityData} day={32} />
      <Day cityData={cityData} day={39} />
    </div>
  );
}

const DaysSection = ({ city }) => {

  const [cityName, setCityName] = useState('London');
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (city) {
      setCityName(city);
    } 
  }, [city]);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=a9bab2ea9261fb24ce0ec82314dd7fcf`)
      .then(res => res.json())
      .then(data => {
        setCityData(data);
        if (data.cod === '200') {
          setLoading(false);
        }
      });
  }, [cityName]);

  
  if (loading) {
    return <div className='bg-slate-900'></div>
  } else {
    return <PageLoaded cityData={cityData} />
  }
};

export default DaysSection;