import React from 'react';
import PropTypes from 'prop-types';
import iconAimSight from 'assets/icons/aimSight.svg';
import iconPin from 'assets/icons/pin.svg';
import Button from 'components/Button';
import getDate from 'helpers/getDate';
import convertDegressTemp from 'helpers/convertDegressTemp';

import IMG_WEATHER from '../../../../constants/imgWeather';

import {
  ContainerButtons,
  IconAimSight,
  ContainerImgWeather,
  ImgWeather,
  WeatherInfoAside,
  Degress,
  DegressType,
  Weather,
  Date,
  Location
} from './styles';

export default function AsideDayWeatherInfo({ onClickUserLocation, onClickShowSearch, dataDay, locationName, unitTemp }) {
  return (
    <>
      <ContainerButtons>
        <Button onClick={() => onClickShowSearch(true)}>
          Search for places
        </Button>
        <Button onClick={onClickUserLocation} round>
          <IconAimSight src={iconAimSight} />
        </Button>
      </ContainerButtons>
      <ContainerImgWeather>
        <ImgWeather src={IMG_WEATHER[dataDay.weather_state_abbr]} alt={dataDay.weather_state_name} />
      </ContainerImgWeather>
      <WeatherInfoAside>
        <Degress>
          {convertDegressTemp(dataDay.the_temp, unitTemp)}<DegressType><span>°</span>{unitTemp}</DegressType>
        </Degress>
        <Weather>{dataDay.weather_state_name}</Weather>
        <Date>Today • { getDate(dataDay.created) }</Date>
        <Location>
          <img src={iconPin} alt="Location pin" /> <span>{locationName}</span>
        </Location>
      </WeatherInfoAside>
    </>
  );
}

WeatherInfoAside.propTypes = {
  dataDay: PropTypes.instanceOf(Object),
  locationName: PropTypes.string,
  unitTemp: PropTypes.string,
  onClickShowSearch: PropTypes.func,
  onClickUserLocation: PropTypes.func
};
