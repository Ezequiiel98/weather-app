import React, { useState } from 'react';
import PropTypes from 'prop-types';
import iconWindDirection from 'assets/icons/windDirection.svg';
import Button from 'components/Button';
import convertUnitLength from 'helpers/convertUnitLength';

import ItemInfo from '../ItemInfo';

import {
  ContainerWeatherInfo,
  Title,
  ContainerInfo,
  ContainerWindDirection,
  IconDirection,
  ContainerPercentage,
  Percentage,
  PercentageFill,
  ContainerButtons
} from './styles';

export default function WeatherInfo({
  airPressure,
  windDirection,
  windSpeed,
  windCompass,
  visibility,
  humidity
}) {
  const [unitLength, setUnitLength] = useState('mi');

  const handleClickKm = () => {
    if (unitLength === 'mi') {
      setUnitLength('km');
    }
  };

  const handleClickMi = () => {
    if (unitLength === 'km') {
      setUnitLength('mi');
    }
  };

  return (
    <ContainerWeatherInfo>
      <Title>Todays&apos;s Hightlights</Title>
      <ContainerButtons>
        <Button onClick={handleClickKm} round light>KM</Button>
        <Button onClick={handleClickMi} round>MI</Button>
      </ContainerButtons>
      <ContainerInfo>
        <ItemInfo title="Wind Status" boldText={convertUnitLength(windSpeed, unitLength)} bigText={unitLength === 'mi' ? 'mph' : 'km/h'}>
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
        <ItemInfo title="Visibility" boldText={convertUnitLength(visibility, unitLength)} bigText={unitLength === 'mi' ? '\u00A0miles' : '\u00A0km'} />
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
