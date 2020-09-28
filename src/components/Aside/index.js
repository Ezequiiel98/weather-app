import React from 'react';
import styled from '@emotion/styled';

import AsideInfo from './components/AsideInfo';

const ContainerAside = styled.aside`
  background-color: #1E213A;
  color: #E7E7EB;
`;

export default function Aside() {
  return (
    <ContainerAside>
      <AsideInfo />
    </ContainerAside>
  );
}
