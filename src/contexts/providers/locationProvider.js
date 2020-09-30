import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LocationContext from '../locationContext';

export default function LocationProvider({ children }) {
  const [dataLocation, setDataLocation] = useState({});

  return (
    <LocationContext.Provider value={[dataLocation, setDataLocation]}>
      { children }
    </LocationContext.Provider>
  );
}

LocationProvider.propTypes = {
  children: PropTypes.node.isRequired
};
