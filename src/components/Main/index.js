import React from 'react';
import styled from '@emotion/styled';
import Button from 'components/Button';

import WeatherDays from './components/WeatherDays';
import WeatherInfo from './components/WeatherInfo';

const ContainerWeather = styled.div`
  flex: 1;
  padding: 15px 20px;
  @media (min-width: 768px) {
    padding: 15px 50px;
  }
  background-color: #100E1D;
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
   
  & * + * {
    margin: 0 12px;
  }
 
  & > button {
    font-size: 18px;
    font-weight: 700;
    padding: 10px;
  }

`;

export default function Main() {
  return (
    <ContainerWeather>
      <ContainerButtons>
        <Button round light>
          °C
        </Button>
        <Button round>
          °F
        </Button>
      </ContainerButtons>
      <WeatherDays />
      <WeatherInfo />
    </ContainerWeather>
  );
}
