import getWeatherData from './getdata';

import './style/main.scss';

const searchBox = document.getElementById('searchbox');
const searchIcon = document.getElementById('searchicon');
const input = document.getElementById('location');

const containerEl = document.querySelector('.container');
const bodyEl = document.querySelector('body');

const fetchWeather = () => {
  const userLocation = input.value;
  getWeatherData(userLocation);
};

const submitHandler = (e) => {
  e.preventDefault();
  containerEl.classList.remove('w3-animate-zoom');
  bodyEl.className = '';
  fetchWeather();
};

searchBox.addEventListener('submit', submitHandler);
searchIcon.addEventListener('click', submitHandler);
getWeatherData('Lagos');