import api from './api';

// woeid = Where On Earth ID
export const fetchWeather = woeid => api.get(`/${woeid}`);
