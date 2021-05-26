import displayData from './displaydata';
import processData from './processdata';

const searchBox = document.getElementById('searchbox');

const errorTxt = document.getElementById('errortxt');

const throwErrorMsg = () => {
  errorTxt.style.display = 'block';
};

const reset = () => {
  searchBox.reset();
};

const getWeatherData = async (location) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?APPID=85543fa448f54a66d6f9b8c88d388027&q=${location}`, {
      mode: 'cors',
    },
  );
  if (response.status === 400) {
    throwErrorMsg();
  } else {
    errorTxt.style.display = 'none';
    const weatherData = await response.json();
    const newData = processData(weatherData);
    displayData(newData);
    reset();
  }
};

export default getWeatherData;