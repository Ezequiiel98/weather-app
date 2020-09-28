import React from 'react';
import PropTypes from 'prop-types';

import { ContainerItem, TitleInfo, BoldText, BigText } from './styles';

export default function ItemInfo({ title, boldText, bigText, children }) {
  return (
    <ContainerItem>
      <TitleInfo>{title}</TitleInfo>
      <div>
        <BoldText>{boldText}</BoldText>
        <BigText>{bigText}</BigText>
      </div>
      {children}
    </ContainerItem>
  );
}

ItemInfo.propTypes = {
  bigText: PropTypes.string.isRequired,
  boldText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};
