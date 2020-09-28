import React from 'react';
import Aside from 'components/Aside';
import Search from 'components/Search';
import Main from 'components/Main';

import { ContainerApp } from './styles';

export default function App() {
  return (
    <ContainerApp>
      <Aside />
      <Main />
    </ContainerApp>
  );
}

