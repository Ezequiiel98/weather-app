import React from 'react';
import Button from 'components/Button';

import WeatherDays from './components/WeatherDays';
import WeatherInfo from './components/WeatherInfo';
import Footer from './components/Footer';
import { ContainerWeather, ContainerButtons } from './styles';

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
      <Footer />
    </ContainerWeather>
  );
}
