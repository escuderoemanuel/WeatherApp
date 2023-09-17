import React from 'react';
import ReactDOM from 'react-dom/client';
import { WeatherApp } from './components/WeatherApp/WeatherApp';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>
);
