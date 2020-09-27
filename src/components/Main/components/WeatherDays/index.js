import React from 'react';
import styled from '@emotion/styled';
import thunderstrom from 'assets/img/Thunderstorm.png';

import hail from '../../../../assets/img/Hail.png';
import heavyRain from '../../../../assets/img/HeavyRain.png';
import shower from '../../../../assets/img/shower.png';
import clear from '../../../../assets/img/Clear.png';

const URL_IMGS = [thunderstrom, hail, heavyRain, shower, clear];
const ContainerDays = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const CardDay = styled.div`
  background-color: #1E213A;
  color: #E7E7EB;
  font-size: 16px;
  padding: 15px 25px;
  margin: 0 auto 15px auto;
  min-width: 110px;
   
`;

const Day = styled.h4`
  margin: 0 0 20px 0; 
  text-align: center;
  padding: 0;
`;

const ImgWeather = styled.img`
  height: 80px;
  object-fit: cover;
  padding: 5px;
  display: block;
  margin: 0 auto;
`;

const Degress = styled.div`
  display: flex;
  margin-top: 15px;
  font-size: 18px;
  justify-content: space-between; 
  padding: 10px;

  & > * {
    margin: 0;
  }
`;

const DegreeMin = styled.p`
  color: #A09FB1;
`;

export default function WeatherDays() {
  return (
    <ContainerDays>
      {URL_IMGS.map(imgSrc => (
        <CardDay>
          <Day>Tomorrow</Day>
          <ImgWeather src={imgSrc} />
          <Degress>
            <p>16°C</p>
            <DegreeMin>11°c</DegreeMin>
          </Degress>
        </CardDay>
      ))};
    </ContainerDays>
  );
}
