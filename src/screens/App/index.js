import React, { useEffect, useState } from 'react';
import Aside from 'components/Aside';
import Search from 'components/Search';
import Main from 'components/Main'; 
import useGeolocationLatLong from 'hooks/useGeolocationLatLong';

import { ContainerApp } from './styles';

export default function App() {
  const { latLong, error } = useGeolocationLatLong();
  
  return (
    <ContainerApp>
      <Aside {...latLong}/>
      <Main />
    </ContainerApp>
  );
}

