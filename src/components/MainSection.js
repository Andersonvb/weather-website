import React, { useEffect, useState } from 'react';
import { FaWind } from 'react-icons/fa';
import { FiDroplet } from 'react-icons/fi';

import d01 from '../images/illustrations/01d.svg'
import n01 from '../images/illustrations/01n.svg'
import d02 from '../images/illustrations/02d.svg'
import n02 from '../images/illustrations/02n.svg'
import d03 from '../images/illustrations/03d.svg'
import n03 from '../images/illustrations/03n.svg'
import d04 from '../images/illustrations/04d.svg'
import n04 from '../images/illustrations/04n.svg'
import d09 from '../images/illustrations/09d.svg'
import n09 from '../images/illustrations/09n.svg'
import d10 from '../images/illustrations/10d.svg'
import n10 from '../images/illustrations/10n.svg'
import d11 from '../images/illustrations/11d.svg'
import n11 from '../images/illustrations/11n.svg'
import d13 from '../images/illustrations/13d.svg'
import n13 from '../images/illustrations/13n.svg'

const PageLoaded = ({ cityData }) => {

  const [weatherImg, setWeatherImg] = useState(d01);

  useEffect(() => {
    if (cityData.list[0].weather[0].icon === '01d') {
      setWeatherImg(d01);
    } else if (cityData.list[0].weather[0].icon === '01n') {
      setWeatherImg(n01);
    } else if (cityData.list[0].weather[0].icon === '02d') {
      setWeatherImg(d02);
    } else if (cityData.list[0].weather[0].icon === '02n') {
      setWeatherImg(n02);
    } else if (cityData.list[0].weather[0].icon === '03d') {
      setWeatherImg(d03);
    } else if (cityData.list[0].weather[0].icon === '03n') {
      setWeatherImg(n03);
    } else if (cityData.list[0].weather[0].icon === '04d') {
      setWeatherImg(d04);
    } else if (cityData.list[0].weather[0].icon === '04n') {
      setWeatherImg(n04);
    } else if (cityData.list[0].weather[0].icon === '09d') {
      setWeatherImg(d09);
    } else if (cityData.list[0].weather[0].icon === '09n') {
      setWeatherImg(n09);
    } else if (cityData.list[0].weather[0].icon === '10d') {
      setWeatherImg(d10);
    } else if (cityData.list[0].weather[0].icon === '10n') {
      setWeatherImg(n10);
    } else if (cityData.list[0].weather[0].icon === '11d') {
      setWeatherImg(d11);
    } else if (cityData.list[0].weather[0].icon === '11n') {
      setWeatherImg(n11);
    } else if (cityData.list[0].weather[0].icon === '13d') {
      setWeatherImg(d13);
    } else if (cityData.list[0].weather[0].icon === '13n') {
      setWeatherImg(n13);
    }
  }, [cityData]);

  return (
    <div className='px-5 pt-5 pb-20 flex flex-col items-center gap-3'>
      <img src={weatherImg} alt='weather' className='w-96' />

      <div className='pr-3 flex justify-center items-center gap-5'>
        <span className='text-2xl'>{cityData.list[0].weather[0].main}</span>
        <img src={require(`../images/icons/${cityData.list[0].weather[0].icon}-black.png`)} alt='Weather icon' className='w-14' />
      </div>
      
      <h2 className='text-9xl'>{(parseFloat(cityData.list[0].main.temp) - 273.1).toFixed(2) + '°'}</h2>
      <small className='text-2xl'>{cityData.city.name + ', ' + cityData.city.country}</small>
      <small className='text-xl'>
        {
          new Date(parseInt(cityData.list[0].dt) * 1000).toLocaleDateString('en-US', { day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric' })
        }
      </small>

      <div className='my-5 flex gap-5 items-center justify-center'>
        <FaWind />
        <small className='text-xl'>{(parseFloat(cityData.list[0].wind.speed) * 3.6).toFixed(2) + ' km/h'}</small>
        <FiDroplet />
        <small className='text-xl'>{(parseFloat(cityData.list[0].pop) * 100) + '%'}</small>
      </div>

    </div>
  );
};

const MainSection = ({ city }) => {

  const [cityName, setCityName] = useState('London');
  const [loading, setLoading] = useState(true);
  const [cityData, setCityData] = useState([]);

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
    return <div className='h-96'></div>
  } else {
    return <PageLoaded cityData={cityData} />
  }
};

export default MainSection;