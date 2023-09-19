import './SearchCity.css';
import { useState } from 'react';

export const SearchCity = () => {
  /* const urlBase = 'https://api.weatherbit.io/v2.0/current'; */
  const urlBase = 'https://api.weatherbit.io/v2.0/forecast/daily';
  const API_KEY = '70270ea0769546c28f7ecf69945bf219';
  const [city, setCity] = useState('');
  const [dataWeather, setDataWeather] = useState(null);

  /* Prueba */
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
  const today = new Date();
  const numberDay = today.getDay();
  const firstDay = daysToShow[numberDay];
  const secondDay = daysToShow[numberDay + 1];
  const thirdDay = daysToShow[numberDay + 2];
  const fourthDay = daysToShow[numberDay + 3];
  const fifthDay = daysToShow[numberDay + 4];

  /* FINPrueba */

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
      /* const response = await fetch(`${urlBase}?&city=${city}&key=${API_KEY}`); */
      const response = await fetch(`${urlBase}?&city=${city}&key=${API_KEY}`);
      /* ?city=Raleigh,NC&key=API_KEY */
      const dataResponse = await response.json();
      setDataWeather(dataResponse);
    } catch (error) {
      console.log(`Ha ocurrido un error: `, error);
    }
  };

  return (
    <div className=' d-flex flex-column align-items-center justify-content-center'>
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
          {/* FirstDay */}
          <div className='weatherCard'>
            <div className='headerCardWeather d-flex align-items-center justify-content-between mb-4'>
              <h2 className='cityName'>
                {dataWeather.city_name}
                <span className='country'>
                  {' '}
                  {dataWeather.country_code}
                </span>{' '}
                <h5>{firstDay}</h5>
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

          <div className='cards d-flex align-items-center justify-content-evenly '>
            {/* SecondDay */}
            <div className='secondaryWeatherCard'>
              <div className='align-items-center justify-content-around'>
                <div className='headerCardWeather d-flex align-items-center justify-content-between mb-4'>
                  <h5>{secondDay}</h5>
                  <img
                    className='iconWeatherSecondary'
                    src={`https://www.weatherbit.io/static/img/icons/${dataWeather.data[1].weather.icon}.png`}
                    alt='Weather Icon'
                  />
                </div>
                <h6>
                  Min Temp:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[1].min_temp}°C
                  </span>
                </h6>
                <h6>
                  Max Temp:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[1].max_temp}°C
                  </span>
                </h6>
                <h6>
                  Condition:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[1].weather.description}
                  </span>
                </h6>
                <h6>
                  Precipitation:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[1].precip}%
                  </span>
                </h6>
                <h6>
                  Wind Direction:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[1].wind_cdir_full}
                  </span>
                </h6>
                <h6>
                  Wind Speed:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[1].wind_spd} km/h
                  </span>
                </h6>
              </div>
            </div>

            {/* ThirdDay */}
            <div className='secondaryWeatherCard'>
              <div className='align-items-center justify-content-around'>
                <div className='headerCardWeather d-flex align-items-center justify-content-between mb-4'>
                  <h5>{thirdDay}</h5>
                  <img
                    className='iconWeatherSecondary'
                    src={`https://www.weatherbit.io/static/img/icons/${dataWeather.data[2].weather.icon}.png`}
                    alt='Weather Icon'
                  />
                </div>
                <h6>
                  Min Temp:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[2].min_temp}°C
                  </span>
                </h6>
                <h6>
                  Max Temp:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[2].max_temp}°C
                  </span>
                </h6>
                <h6>
                  Condition:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[2].weather.description}
                  </span>
                </h6>
                <h6>
                  Precipitation:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[2].precip}%
                  </span>
                </h6>
                <h6>
                  Wind Direction:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[2].wind_cdir_full}
                  </span>
                </h6>
                <h6>
                  Wind Speed:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[2].wind_spd} km/h
                  </span>
                </h6>
              </div>
            </div>

            {/* FourthDay */}
            <div className='secondaryWeatherCard'>
              <div className='align-items-center justify-content-around'>
                <div className='headerCardWeather d-flex align-items-center justify-content-between mb-4'>
                  <h5>{fourthDay}</h5>
                  <img
                    className='iconWeatherSecondary'
                    src={`https://www.weatherbit.io/static/img/icons/${dataWeather.data[3].weather.icon}.png`}
                    alt='Weather Icon'
                  />
                </div>
                <h6>
                  Min Temp:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[3].min_temp}°C
                  </span>
                </h6>
                <h6>
                  Max Temp:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[3].max_temp}°C
                  </span>
                </h6>
                <h6>
                  Condition:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[3].weather.description}
                  </span>
                </h6>
                <h6>
                  Precipitation:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[3].precip}%
                  </span>
                </h6>
                <h6>
                  Wind Direction:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[3].wind_cdir_full}
                  </span>
                </h6>
                <h6>
                  Wind Speed:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[3].wind_spd} km/h
                  </span>
                </h6>
              </div>
            </div>

            {/* FifthDay */}
            <div className='secondaryWeatherCard'>
              <div className='align-items-center justify-content-around'>
                <div className='headerCardWeather d-flex align-items-center justify-content-between mb-4'>
                  <h5>{fifthDay}</h5>
                  <img
                    className='iconWeatherSecondary'
                    src={`https://www.weatherbit.io/static/img/icons/${dataWeather.data[4].weather.icon}.png`}
                    alt='Weather Icon'
                  />
                </div>
                <h6>
                  Min Temp:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[4].min_temp}°C
                  </span>
                </h6>
                <h6>
                  Max Temp:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[4].max_temp}°C
                  </span>
                </h6>
                <h6>
                  Condition:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[4].weather.description}
                  </span>
                </h6>
                <h6>
                  Precipitation:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[4].precip}%
                  </span>
                </h6>
                <h6>
                  Wind Direction:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[4].wind_cdir_full}
                  </span>
                </h6>
                <h6>
                  Wind Speed:{' '}
                  <span className='textDataWeather'>
                    {dataWeather.data[4].wind_spd} km/h
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
