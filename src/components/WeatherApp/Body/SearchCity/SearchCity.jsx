import './SearchCity.css';
import { useState } from 'react';

export const SearchCity = () => {
  const urlBase = 'https://api.weatherbit.io/v2.0/current';
  const API_KEY = '70270ea0769546c28f7ecf69945bf219';
  const [city, setCity] = useState('');
  const [dataWeather, setDataWeather] = useState(null);

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* if(city.length > 0) fetchWeather() */
    city.length > 0 && fetchWeather();
    setCity('');
  };

  const fetchWeather = async () => {
    try {
      const response = await fetch(`${urlBase}?&city=${city}&key=${API_KEY}`);
      const dataResponse = await response.json();
      setDataWeather(dataResponse);
    } catch (error) {
      console.log(`Ha ocurrido un error: `, error);
    }
  };
  return (
    <>
      <form className='d-flex' onSubmit={handleSubmit}>
        <input
          type='city'
          className='form-control'
          id='city'
          aria-describedby='city'
          placeholder='Search a city'
          value={city}
          onChange={handleChangeCity}
        />

        <button type='submit' className='btn btn-primary'>
          Search
        </button>
      </form>
      {dataWeather && (
        <div className='weatherCard'>
          <div className='d-flex align-items-center justify-content-around mb-4'>
            <h2 className='cityName'>
              {dataWeather.data[0].city_name}
              <span className='country'>
                {' '}
                {dataWeather.data[0].country_code}
              </span>
            </h2>
            <img
              className='iconWeather'
              src={`https://www.weatherbit.io/static/img/icons/${dataWeather.data[0].weather.icon}.png`}
              alt='Weather Icon'
            />
          </div>
          <div className='align-items-center justify-content-around'>
            <h5>
              Timezone:{' '}
              <span className='textDataWeather'>
                {dataWeather.data[0].timezone}
              </span>
            </h5>
            <h5>
              Temperature:{' '}
              <span className='textDataWeather'>
                {dataWeather.data[0].temp}°C
              </span>
            </h5>
            <h5>
              Condition:{' '}
              <span className='textDataWeather'>
                {dataWeather.data[0].weather.description}
              </span>
            </h5>
            <h5>
              Sunrise:{' '}
              <span className='textDataWeather'>
                {dataWeather.data[0].sunrise}
              </span>
            </h5>
            <h5>
              Sunset:{' '}
              <span className='textDataWeather'>
                {dataWeather.data[0].sunset}
              </span>
            </h5>
            <h5>
              Precipitation:{' '}
              <span className='textDataWeather'>
                {dataWeather.data[0].precip}%
              </span>
            </h5>
            <h5>
              Wind Direction:{' '}
              <span className='textDataWeather'>
                {dataWeather.data[0].wind_cdir_full}
              </span>
            </h5>
            <h5>
              Wind Speed:{' '}
              <span className='textDataWeather'>
                {dataWeather.data[0].wind_spd} km/h
              </span>
            </h5>
          </div>
        </div>
      )}
    </>
  );
};
