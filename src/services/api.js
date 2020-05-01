import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};

  config.params.APPIP = OPEN_WEATHER_MAP_APP_ID;
  config.params.unit = config.params.unit || 'metric';

  return config;
});

export default api;
