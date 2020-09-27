import React from 'react';
import thunderstrom from 'assets/img/Thunderstorm.png';
import hail from 'assets/img/Hail.png';
import heavyRain from 'assets/img/HeavyRain.png';
import shower from 'assets/img/shower.png';
import clear from 'assets/img/Clear.png';

import { ContainerDays, CardDay, Day, ImgWeather, Degress, DegreeMin } from './styles';

const URL_IMGS = [
  { id: 0,
    src: thunderstrom
  },
  {
    id: 1,
    src: hail
  },
  {
    id: 2,
    src: heavyRain
  },
  {
    id: 3,
    src: shower
  },
  {
    id: 4,
    src: clear
  }
];

export default function WeatherDays() {
  return (
    <ContainerDays>
      {URL_IMGS.map(({ id, src }) => (
        <CardDay key={id}>
          <Day>Tomorrow</Day>
          <ImgWeather src={src} />
          <Degress>
            <p>16°C</p>
            <DegreeMin>11°c</DegreeMin>
          </Degress>
        </CardDay>
      ))}
    </ContainerDays>
  );
}
