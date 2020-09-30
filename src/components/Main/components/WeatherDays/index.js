import IMG_WEATHER from 'constants/imgWeather';

import React from 'react';

import { ContainerDays, CardDay, Day, ImgWeather, Degress, DegreeMin } from './styles';


export default function WeatherDays({ dataDaysWeather, unitTemp }) {
  return (
    <ContainerDays>
      {dataDaysWeather
         .filter((item, index) => index !== 0)
         .map(({ min_temp: minTemp, max_temp: maxTemp, weather_state_abbr: weatherAbbr, id }) => (
           <CardDay key={id}>
             <Day>Tomorrow</Day>
             <ImgWeather src={IMG_WEATHER[weatherAbbr]} />
             <Degress>
               <p>{ Math.floor(maxTemp) }°c</p>
               <DegreeMin>{ Math.floor(minTemp) }°c</DegreeMin>
             </Degress>
           </CardDay>
      ))}
    </ContainerDays>
  );
}
