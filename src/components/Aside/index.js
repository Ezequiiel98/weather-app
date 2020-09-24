import React from 'react';
import styled from '@emotion/styled';
import iconLocation from 'assets/icons/icon-location.svg';
import imgWeather from 'assets/img/shower.png';
import backgroundCloud from 'assets/img/cloud-background.png';

import Button from '../Button';

const ContainerAside = styled.aside`
  background-color: #1E213A;
  flex-shrink: 1;
  padding: 30px 0;
  @media (min-width: 768px) {
    width: 310px;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

const IconLocation = styled.img`
  width: 22px;
  height: 22px;
  padding: 0; 
  margin: 0;
`;

const ContainerImgWeather = styled.div`
 background: transparent;
 margin-top: 15px;
 height: 300px;
 display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 
 &::before {
   content: "";
   position: absolute;
   height:  100%;
   width: 100%;
   top: 0;
   left: 0;
   filter: grayscale(100%);
   opacity: .2;
   background-image: url(${backgroundCloud});
   background-size: cover;
   backgroun-repeat: no-repeat;
   background-position: center ;
 }
`;

const ImgWeather = styled.img`
  width: 150px;
`;

export default function Aside() {
  return (
    <ContainerAside>
      <ContainerButtons>
        <Button>
          Search for places
        </Button>
        <Button round>
          <IconLocation src={iconLocation} />
        </Button>
      </ContainerButtons>
      <ContainerImgWeather>
        <ImgWeather src={imgWeather} />
      </ContainerImgWeather>
    </ContainerAside>
  );
}
