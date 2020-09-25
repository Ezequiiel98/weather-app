import React from 'react';
import iconAimSight from 'assets/icons/aimSight.svg';
import iconPin from 'assets/icons/pin.svg';
import imgWeather from 'assets/img/shower.png';
import Button from 'components/Button';

import { ContainerAsideInfo, ContainerButtons, IconAimSight, ContainerImgWeather, ImgWeather, WeatherInfoAside, Degress, DegressType, Weather, Date, Location } from './styles';


export default function AsideInfo() {
  return (
    <ContainerAsideInfo>
      <ContainerButtons>
        <Button>
          Search for places
        </Button>
        <Button round>
          <IconAimSight src={iconAimSight} />
        </Button>
      </ContainerButtons>
      <ContainerImgWeather>
        <ImgWeather src={imgWeather} />
      </ContainerImgWeather>
      <WeatherInfoAside>
        <Degress>
          15<DegressType><span>°</span>c</DegressType>
        </Degress>
        <Weather>Shower</Weather>
        <Date>Today • Fri, 5 Jun</Date>
        <Location>
          <img src={iconPin} /> <span>Helsinki</span>
        </Location>
      </WeatherInfoAside>
    </ContainerAsideInfo>
  );
}
