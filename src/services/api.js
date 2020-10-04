import axios from 'axios';

const CORS_URL = 'https://cors-anywhere.herokuapp.com';
// const CORS_URL = 'https://cors-proxy.htmldriven.com';
const API_URL = 'https://www.metaweather.com/api/location';

const api = axios.create({
  baseURL: `${CORS_URL}/${API_URL}`,
  headers: {
    'Access-Control-Allow-Headers': 'Content-Type'
  }
});

export default api;

