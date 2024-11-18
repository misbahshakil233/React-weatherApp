

import './App.css';
import cloudImage from './cloud.png';

import { useEffect, useState } from 'react';

function App() {
  const [result, setResult] = useState({});
  const [city, setCity] = useState('');

  const API = {
    key: "b88a50dbea6d90e60d2a462edc647f5f",
    url: "https://api.openweathermap.org/data/2.5/weather"
  };

  const handleSearch = () => {
    fetch(`${API.url}?q=${city}&appid=${API.key}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setResult(data);
      });
  };

  // Function to convert Kelvin to Celsius
  const convertToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  useEffect(() => {
    fetch(`${API.url}?q=karachi&appid=${API.key}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setResult(data);
      });
  }, []);

  return (
    <>
 
      <div className='App flex flex-col items-center'>
        <h1 className="text-4xl font-bold text-white m-4">Weather</h1>
        <div>
          <input className='py-2 px-16 rounded-md m-4 text-start' type='text' name='city' placeholder='Enter City name' onChange={(e) => setCity(e.target.value)} />
          <button className='py-2 px-7 bg-blue-300 text-white rounded-xl' type='button' onClick={handleSearch}>SEARCH</button>
        </div>
        <img src={cloudImage} alt="Cloud" className='w-48' />
        <p>Location city: {result && result.name} Country: {result.main && result.sys.country}</p>
        <h1 className='text-8xl'>{result.main && convertToCelsius(result.main.temp).toFixed(2)}<sup>o</sup>C</h1>
        <div className='m-10 flex space-x-16'>
          <h1 >{result.main && result.main.humidity} humidity</h1>
          <h1 >{result.main && result.main.pressure} Newton/meter <sup>2</sup> (pascal)</h1>
        </div>
      </div>
     
    </>
  );
}

export default App;



