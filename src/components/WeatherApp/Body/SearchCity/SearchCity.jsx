import './SearchCity.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const urlBase = 'https://api.weatherbit.io/v2.0/forecast/daily';
const API_KEY = '70270ea0769546c28f7ecf69945bf219';

const daysToShow = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
];

export const SearchCity = () => {
  const [city, setCity] = useState('');
  const [dataWeather, setDataWeather] = useState(null);

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  const WeatherCard = ({ dayIndex }) => {
    const day = daysToShow[(new Date().getDay() + dayIndex) % 7];
    const weatherData = dataWeather && dataWeather.data[dayIndex];
    WeatherCard.propTypes = {
      dayIndex: PropTypes.number.isRequired,
    };

    return (
      <div className='secondaryWeatherCard'>
        {weatherData && (
          <div className='align-items-center justify-content-around'>
            <div className='headerCardWeather d-flex align-items-center justify-content-between'>
              <h5>{day}</h5>
              <img
                className='iconWeatherSecondary'
                src={`https://www.weatherbit.io/static/img/icons/${weatherData.weather.icon}.png`}
                alt='Weather Icon'
              />
            </div>
            <h6>
              Min Temp:{' '}
              <span className='textDataWeather'>{weatherData.min_temp}°C</span>
            </h6>
            <h6>
              Max Temp:{' '}
              <span className='textDataWeather'>{weatherData.max_temp}°C</span>
            </h6>
            <h6>
              Condition:{' '}
              <span className='textDataWeather'>
                {weatherData.weather.description}
              </span>
            </h6>
            <h6>
              Precipitation:{' '}
              <span className='textDataWeather'>{weatherData.precip}%</span>
            </h6>
            <h6>
              Wind Direction:{' '}
              <span className='textDataWeather'>
                {weatherData.wind_cdir_full}
              </span>
            </h6>
            <h6>
              Wind Speed:{' '}
              <span className='textDataWeather'>
                {weatherData.wind_spd} km/h
              </span>
            </h6>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
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
        <div className='cards d-flex justify-content-center align-items-center'>
          <div className='weatherCard'>
            <div className='headerCardWeather d-flex align-items-center justify-content-between'>
              <h2 className='cityName'>
                {dataWeather.city_name}
                <span className='country'> {dataWeather.country_code}</span>
              </h2>
              <span className='HeaderCardTemp d-flex align-items-center'>
                <h2>{dataWeather.data[0].temp}°C</h2>
                <img
                  className='iconWeather'
                  src={`https://www.weatherbit.io/static/img/icons/${dataWeather.data[0].weather.icon}.png`}
                  alt='Weather Icon'
                />
              </span>
            </div>
            <div className='align-items-center justify-content-around'>
              <h5>
                Timezone:{' '}
                <span className='textDataWeather'>{dataWeather.timezone}</span>
              </h5>
              <h5>
                Min Temp:{' '}
                <span className='textDataWeather'>
                  {dataWeather.data[0].min_temp}°C
                </span>
              </h5>
              <h5>
                Max Temp:{' '}
                <span className='textDataWeather'>
                  {dataWeather.data[0].max_temp}°C
                </span>
              </h5>
              <h5>
                Condition:{' '}
                <span className='textDataWeather'>
                  {dataWeather.data[0].weather.description}
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
          <div className='cards d-flex align-items-center justify-content-evenly'>
            <WeatherCard dayIndex={1} />
            <WeatherCard dayIndex={2} />
            <WeatherCard dayIndex={3} />
            <WeatherCard dayIndex={4} />
            <WeatherCard dayIndex={5} />
          </div>
        </div>
      )}
    </div>
  );
};
