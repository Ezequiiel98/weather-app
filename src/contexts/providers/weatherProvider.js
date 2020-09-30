import React, { useState } from 'react';
import PropTypes from 'prop-types';

import WeatherContext from '../weatherContext';

export default function WeatherProvider({ children }) {
  const initialState = {
    unitTemp: 'c',
    dataDaysWeather: {}
  };

  const [dataWeather, setDataWeather] = useState(initialState);

  return (
    <WeatherContext.Provider value={[dataWeather, setDataWeather]}>
      { children }
    </WeatherContext.Provider>
  );
}

WeatherProvider.propTypes = {
  children: PropTypes.node.isRequired
};
