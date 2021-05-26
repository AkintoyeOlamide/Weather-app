const processData = (weatherInfo) => {
  const myData = {
    location: weatherInfo.name,
    country: weatherInfo.sys.country.toUpperCase(),
    weatherMain: weatherInfo.weather[0].main,
    weatherDescription: weatherInfo.weather[0].description,
    weatherIcon: weatherInfo.weather[0].icon,
    Temparature: {
      f: Math.round((Math.ceil(weatherInfo.main.temp) - 273) * (9 / 5) + 32),
      c: (Math.ceil(weatherInfo.main.temp) - 273),
    },
    feelsLike: {
      f: Math.round((Math.ceil(weatherInfo.main.feels_like) - 273) * (9 / 5) + 32),
      c: (Math.ceil(weatherInfo.main.feels_like) - 273),
    },
    humidity: weatherInfo.main.humidity,
    wind: Math.round(weatherInfo.wind.speed),
  };

  return myData;
};

export default processData;