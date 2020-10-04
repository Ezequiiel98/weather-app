import React, { useContext } from 'react';
import Button from 'components/Button';
import Loader from 'components/Loader';
import WeatherContext from 'contexts/weatherContext';

import WeatherDays from './components/WeatherDays';
import WeatherInfo from './components/WeatherInfo';
import Footer from './components/Footer';
import { ContainerWeather, ContainerButtons } from './styles';

export default function Main() {
  const [{ unitTemp, dataDaysWeather }, setDataWeather] = useContext(WeatherContext);

  const handleClickCelcius = () => {
    if (unitTemp === 'f') {
      setDataWeather({ unitTemp: 'c', dataDaysWeather });
    }
  };

  const handleClickFarenheit = () => {
    if (unitTemp === 'c') {
      setDataWeather({ unitTemp: 'f', dataDaysWeather });
    }
  };

  return (
    <ContainerWeather>
      <ContainerButtons>
        <Button onClick={handleClickCelcius} round light>
          °C
        </Button>
        <Button onClick={handleClickFarenheit} round>
          °F
        </Button>
      </ContainerButtons>
      { Object.keys(dataDaysWeather).length >= 1
          ? <>
            <WeatherDays dataDaysWeather={dataDaysWeather} unitTemp={unitTemp} />
            <WeatherInfo
              airPressure={dataDaysWeather[0].air_pressure}
              windDirection={dataDaysWeather[0].wind_direction}
              windSpeed={dataDaysWeather[0].wind_speed}
              windCompass={dataDaysWeather[0].wind_direction_compass}
              {...dataDaysWeather[0]}
            />
          </>
          : <Loader /> 
      }
      <Footer />
    </ContainerWeather>
  );
}
