import React from 'react';
import Aside from 'components/Aside';
import Search from 'components/Search';
import Main from 'components/Main';
import styled from '@emotion/styled';

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
   
  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

export default function App() {
  return (
    <ContainerApp>
      <Aside />
      <Main />
    </ContainerApp>
  );
}

