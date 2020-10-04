import React from 'react';

import { ContainerLoader, Dot } from './styles';

export default function DotLoader() {
  return (
    <ContainerLoader>
      <Dot />
      <Dot delay="0.1555555s" margin="0 5px" />
      <Dot delay="0.3s" />
    </ContainerLoader>
  );
}

