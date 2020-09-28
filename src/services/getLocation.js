import api from './api';

export const getLocationByName = name => api.get(`/search/?query=${name}`);

export const getLocationByLatLong = ({ lat, long }) => api.get(`/search/?lattlong=${lat},${long}`);
