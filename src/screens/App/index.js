import React, { useEffect, useState } from 'react';
import Aside from 'components/Aside';
import Search from 'components/Search';
import Main from 'components/Main';
import WeatherProvider from 'contexts/providers/weatherProvider';

import { ContainerApp } from './styles';

export default function App() {
  return (
    <ContainerApp>
      <WeatherProvider>
        <Aside />
        <Main />
      </WeatherProvider>
    </ContainerApp>
  );
}

