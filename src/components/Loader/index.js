import React from 'react';
import PropTypes from 'prop-types';

import DotLoader from './components/DotLoader';
import SpinerLoader from './components/SpinerLoader';

export default function Loader({ dot }) {
  return (
    dot ? <DotLoader /> : <SpinerLoader />
  );
}

Loader.propTypes = {
  dot: PropTypes.bool
};
