import React from 'react';
import styled from '@emotion/styled';


import Button from '../Button';

import AsideInfo from './components/AsideInfo';

const ContainerAside = styled.aside`
  background-color: #1E213A;
  color: #E7E7EB;
 
  @media (min-width: 768px) {
    width: 310px;
  }
`;


export default function Aside() {
  return (
    <ContainerAside>
      <AsideInfo />
    </ContainerAside>
  );
}
