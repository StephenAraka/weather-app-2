import axios from 'axios';

// export const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
export const WEATHER_API_KEY = 'c2753d92817fffebd08013d23bd80def';
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

// Axios instance
export const axiosInstance = axios.create({
  baseURL: WEATHER_API_URL,
  params: {
    units: 'metric',
    appid: WEATHER_API_KEY,
  },
});


export const fetchWeatherData = async (latitude: number, longitude: number) => {
  const [currentWeatherResponse, forecastResponse] = await Promise.all([
    axiosInstance.get('/weather', {
      params: { lat: latitude, lon: longitude },
    }),
    axiosInstance.get('/forecast', {
      params: { lat: latitude, lon: longitude },
    }),
  ]);

  return {
    currentWeather: currentWeatherResponse.data,
    forecast: forecastResponse.data,
  };
};