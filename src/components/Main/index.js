import React, { useContext } from 'react';
import Button from 'components/Button';
import WeatherContext from 'contexts/weatherContext';

import WeatherDays from './components/WeatherDays';
import WeatherInfo from './components/WeatherInfo';
import Footer from './components/Footer';
import { ContainerWeather, ContainerButtons } from './styles';

export default function Main() {
  const [{ unitTemp, dataDaysWeather }, setDataWeather] = useContext(WeatherContext);
  console.log(dataDaysWeather);

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
      { Object.keys(dataDaysWeather).length >= 1
          ? <>
            <WeatherDays dataDaysWeather={dataDaysWeather} />
            <WeatherInfo dataWeatherToday={dataDaysWeather[0]} />
            </>
       : <p> loading</p>
      }
      <Footer />
    </ContainerWeather>
  );
}
