import React from 'react';
import getDate from 'helpers/getDate';
import convertDegressTemp from 'helpers/convertDegressTemp';

import IMG_WEATHER from '../../../../constants/imgWeather';

import { ContainerDays, CardDay, Day, ImgWeather, Degress, DegreeMin } from './styles';


export default function WeatherDays({ dataDaysWeather, unitTemp }) {
  return (
    <ContainerDays>
      {dataDaysWeather
         .filter((item, index) => index !== 0) // borro el primer item del array porque es clima de hoy
         .map(({ min_temp: minTemp, max_temp: maxTemp, weather_state_abbr: weatherAbbr, created, id }, index) => (
           <CardDay key={id}>
             <Day>{ index === 0 ? 'Tomorrow' : getDate(created) }</Day>
             <ImgWeather src={IMG_WEATHER[weatherAbbr]} />
             <Degress>
               <p>{ `${convertDegressTemp(minTemp, unitTemp)}°${unitTemp}` }</p>
               <DegreeMin>{ `${convertDegressTemp(minTemp, unitTemp)}°${unitTemp}` }</DegreeMin>
             </Degress>
           </CardDay>
      ))}
    </ContainerDays>
  );
}
