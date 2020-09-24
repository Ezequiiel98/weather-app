import React from 'react';
import Aside from 'components/Aside';
import styled from '@emotion/styled';

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 100vw;
  min-height: 100vh;
  background-color: red;
   
  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const ContainerInfoWeather = styled.div`
  flex: 1;
  background: green;
`;


function App() {
  return (
    <ContainerApp>
      <Aside />
      <ContainerInfoWeather><h1>info</h1></ContainerInfoWeather>
    </ContainerApp>
  );
}

export default App;
