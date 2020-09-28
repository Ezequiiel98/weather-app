import api from './api';

export const getWeather = weoid => api.get(`/${weoid}`);
