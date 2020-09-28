import api from './api';

export const fetchLocationByName = name => api.get(`/search/?query=${name}`);

export const fetchLocationByLatLong = ({ lat, long }) => api.get(`/search/?lattlong=${lat},${long}`);
