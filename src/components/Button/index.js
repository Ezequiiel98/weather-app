import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyle } from './styles';

export default function Button({ round, light, blue, onClick, children, ...props }) {
  return (
    <ButtonStyle type="button" light={light} round={round} blue={blue} onClick={onClick} {...props}>
      { children }
    </ButtonStyle>
  );
}

Button.propTypes = {
  blue: PropTypes.bool,
  children: PropTypes.node,
  light: PropTypes.bool,
  round: PropTypes.bool
};
