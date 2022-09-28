import React from 'react';

const Day = ({ cityData, day }) => {
  return (
    <div className='w-2/3 lg:w-2/5 flex justify-between'>
      <span className='text-white text-xl'>
        {
          new Date(parseInt(cityData.list[day].dt) * 1000).toLocaleDateString('en-US', {weekday: 'long' })
        }
      </span>
      <span className='text-white text-xl'>{(parseFloat(cityData.list[day].main.temp) - 272.15).toFixed(2) + '°'}</span>
      <img src={require(`../images/icons/${cityData.list[day].weather[0].icon}.png`)} alt='weather-logo' className='w-12' />
    </div>
  );
};

export default Day;