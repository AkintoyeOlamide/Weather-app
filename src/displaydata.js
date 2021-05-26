import { ProcessData } from './processdata';

const displayData = (newData) => {
  containerEl.classList.add('w3-animate-zoom');
  if (newData.weatherMain === 'Rain') bodyEl.classList.add('background-rain');
  else if (newData.weatherMain === 'Thunderstorm') bodyEl.classList.add('background-thunder');
  else if (newData.weatherMain === 'Clouds') bodyEl.classList.add('background-cloud');
  else if (newData.weatherMain === 'Snow') bodyEl.classList.add('background-snow');
  else bodyEl.classList.add('background1');
  weatherIcon.src = `http://openweathermap.org/img/wn/${newData.weatherIcon}.png`;
  weatherConditionEl.textContent = `${newData.weatherMain}: ${newData.weatherDescription}`;
  locationEl.textContent = `${newData.location}, ${newData.country}`;

  temparatureEl.textContent = `${newData.Temparature.c} °C `;
  temparature2El.textContent = `${newData.Temparature.f} °F`;

  temparatureEl.onclick = function changeContent() {
    temparatureEl.classList.toggle('none');
    temparatureEl.classList.toggle('show');
    temparature2El.classList.toggle('none');
    temparature2El.classList.toggle('show');
  };
  temparature2El.onclick = function changeContent() {
    temparatureEl.classList.toggle('none');
    temparatureEl.classList.toggle('show');
    temparature2El.classList.toggle('none');
    temparature2El.classList.toggle('show');
  };

  temparatureFeelsLikeEl.textContent = `Feels-Like: ${newData.feelsLike.c} °C`;
  humidityEl.textContent = `Humidity: ${newData.humidity} % `;
  windSpeedEl.textContent = `Wind-Speed: ${newData.wind} MPH`;
};

export default displayData;