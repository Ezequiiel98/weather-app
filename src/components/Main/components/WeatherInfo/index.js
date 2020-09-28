import React from 'react';
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

export default function WeatherInfo() {
  return (
    <ContainerWeatherInfo>
      <Title>Todays&apos;s Hightlights</Title>
      <ContainerInfo>
        <ItemInfo title="Wind Status" boldText="7" bigText="mph">
          <ContainerWindDirection>
            <IconDirection degressDirection="200">
              <img src={iconWindDirection} alt="Wind direction" />
            </IconDirection>
            <p>wsw</p>
          </ContainerWindDirection>
        </ItemInfo>
        <ItemInfo title="Humidity" boldText="84" bigText="%">
          <ContainerPercentage>
            <p>0</p>
            <p>100</p>
            <Percentage>
              <PercentageFill humidityPercentage="84" />
            </Percentage>
            <p>%</p>
          </ContainerPercentage>
        </ItemInfo>
        <ItemInfo title="Visibility" boldText="6,4" bigText="&nbsp;miles" />
        <ItemInfo title="Air Pressure" boldText="998" bigText="&nbsp;mb" />
      </ContainerInfo>
    </ContainerWeatherInfo>
  );
}
