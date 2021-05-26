import getWeatherData from "./getdata";

import './style/main.scss';

const searchBox = document.getElementById('searchbox');
const searchIcon = document.getElementById('searchicon');
// const errorTxt = document.getElementById('errortxt');
const input = document.getElementById('location');

const containerEl = document.querySelector('.container');
// const weatherConditionEl = document.querySelector('.weathercondition');
// const locationEl = document.querySelector('.location');
// const temparatureEl = document.querySelector('#celcius');
// const temparature2El = document.querySelector('#fahrenheit');

// const temparatureFeelsLikeEl = document.querySelector('.feels-like');
// const humidityEl = document.querySelector('.humidity');
// const windSpeedEl = document.querySelector('.windspeed');
// const weatherIcon = document.querySelector('.weathericon');
const bodyEl = document.querySelector('body');


const fetchWeather = () => {
  const userLocation = input.value;
  getWeatherData(userLocation);
};

// const throwErrorMsg = () => {
//   errorTxt.style.display = 'block';
// };

const submitHandler = (e) => {
  e.preventDefault();
  containerEl.classList.remove('w3-animate-zoom');
  bodyEl.className = '';
  fetchWeather();
};

searchBox.addEventListener('submit', submitHandler);
searchIcon.addEventListener('click', submitHandler);
getWeatherData('Lagos');