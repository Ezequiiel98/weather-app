import styled from '@emotion/styled';
import backgroundCloud from 'assets/img/cloud-background.png';

export const ContainerAsideInfo = styled.div`
  padding: 25px 0 10px 0;
  min-width: 300px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const IconAimSight = styled.img`
  width: 22px;
  height: 22px;
  padding: 0; 
  margin: 0;
`;

export const ContainerImgWeather = styled.div`
  background: transparent;
  margin-top: 25px;
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
    background-position: center;
  }
`;

export const ImgWeather = styled.img`
  width: 150px;
`;

export const WeatherInfoAside = styled.div`
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

export const Degress = styled.span`
  font-size: 108px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const DegressType = styled.span`
  font-size: 45px;
  line-height: 0;
  opacity: .6;
  display: inline-flex;
  letter-spacing: -3px;
  transform: translate(-2px, 14px);
  font-weight: 400;

  & > span {
    font-size: 55px;
    padding-top: 10px;
  }
`;

export const Weather = styled.h4`
  font-size: 28px;
  color: #88869D;
  font-weight: 600;
`;

export const Date = styled.span`
  color: #A09FB1;
  font-size: 18px;
  margin: 25px 0;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: #88869D;

  & > img {
    padding: 0 5px;
  }
`;

