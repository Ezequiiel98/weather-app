import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyle } from './styles';

export default function Button({ round, light, children }) {
  return (
    <ButtonStyle type="button" light={light} round={round}>
      { children }
    </ButtonStyle>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  round: PropTypes.bool,
  light: PropTypes.node
}
