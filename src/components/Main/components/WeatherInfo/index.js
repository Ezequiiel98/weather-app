import React from 'react';
import PropTypes from 'prop-types';
import iconWindDirection from 'assets/icons/windDirection.svg';

import ItemInfo from '../ItemInfo';

import {
  ContainerWeatherInfo,
  Title,
  ContainerInfo,
  ContainerWindDirection,
  IconDirection,
  ContainerPercentage,
  Percentage,
  PercentageFill
} from './styles';

export default function WeatherInfo({
  airPressure,
  windDirection,
  windSpeed,
  windCompass,
  visibility,
  humidity
}) {
  return (
    <ContainerWeatherInfo>
      <Title>Todays&apos;s Hightlights</Title>
      <ContainerInfo>
        <ItemInfo title="Wind Status" boldText={windSpeed.toFixed(1)} bigText="mph">
          <ContainerWindDirection>
            <IconDirection degressDirection={windDirection.toFixed(2)}>
              <img src={iconWindDirection} alt="Wind direction" />
            </IconDirection>
            <p>{windCompass}</p>
          </ContainerWindDirection>
        </ItemInfo>
        <ItemInfo title="Humidity" boldText={Math.floor(humidity)} bigText="%">
          <ContainerPercentage>
            <p>0</p>
            <p>100</p>
            <Percentage>
              <PercentageFill humidityPercentage={Math.floor(humidity)} />
            </Percentage>
            <p>%</p>
          </ContainerPercentage>
        </ItemInfo>
        <ItemInfo title="Visibility" boldText={visibility.toFixed(1)} bigText="&nbsp;miles" />
        <ItemInfo title="Air Pressure" boldText={Math.floor(airPressure)} bigText="&nbsp;mb" />
      </ContainerInfo>
    </ContainerWeatherInfo>
  );
}

WeatherInfo.propTypes = {
  airPressure: PropTypes.number.isRequired,
  windDirection: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  visibility: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windCompass: PropTypes.string.isRequired
};
