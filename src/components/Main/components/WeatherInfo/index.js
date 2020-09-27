import React from 'react';
import styled from '@emotion/styled';

const ContainerWeatherInfo = styled.div`
  color: #E7E7EB;
  margin-top: 50px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 27px;
`;

const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ItemInfo = styled.div`
  background-color: #1E213A;
  min-width: 48%;
  min-height: 200px;
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WindStatus = styled(ItemInfo)``;
const Humidity = styled(ItemInfo)``;
const Visibility = styled(ItemInfo)``;
const AirPressure = styled(ItemInfo)``;

const TitleInfo = styled.h3`
  color: #E7E7EB;
  padding: 0;
  margin: 22px 0 10px 0;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
`;

const BigText = styled.span`
  font-size: 45px;
`;

const BoldText = styled.span`
  font-weight: bold;
  font-size: 75px;
`;

const ContainerPercentage = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-width: 80%;
  margin-bottom: 15px;

  & > p {
    padding: 0;
    margin: 8px 5px;
  }

  & > p:last-of-type {
    margin: 8px 0 8px auto;
  }
`;

const Percentage = styled.div`
  position: relative;
  background-color: #E7E7EB;
  height: 10px;
  width: 100%;
  border-radius: 70px;
`;

const PercentageFill = styled.div`
  position: absolute;
  border-radius: 70px;
  top: 0;
  left: 0;
  height: 10px;
  width: 50%;
  background-color: #FFEC65;
`;

const ContainerWindDirection = styled.div`
  display: flex;
  margin-top: 20px;
`;

const IconDirection = styled.div`
  background-color: #6E707A;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export default function WeatherInfo() {
  return (
    <ContainerWeatherInfo>
      <Title>Todays's Hightlights</Title>
      <ContainerInfo>
        <WindStatus>
          <TitleInfo>Wind Status</TitleInfo>
          <div>
            <BoldText>7</BoldText>
            <BigText>mph</BigText>
          </div>
          <ContainerWindDirection>
            <IconDirection>
              <img src="" alt="" />
            </IconDirection>
            <p>wsw</p>
          </ContainerWindDirection>
        </WindStatus>
        <Humidity>
          <TitleInfo>Humidity</TitleInfo>
          <div>
            <BoldText>84</BoldText>
            <BigText>%</BigText>
          </div>
          <ContainerPercentage>
            <p>0</p>
            <p>100</p>
            <Percentage>
              <PercentageFill />
            </Percentage>
            <p>%</p>
          </ContainerPercentage>
        </Humidity>
        <Visibility>
          <TitleInfo>Visibility</TitleInfo>
          <div>
            <BoldText>6,4</BoldText>
            <BigText>&nbsp;miles</BigText>
          </div>
        </Visibility>
        <AirPressure>
          <TitleInfo>Air Pressure</TitleInfo>
          <div>
            <BoldText>998</BoldText>
            <BigText>&nbsp;mb</BigText>
          </div>
        </AirPressure>
      </ContainerInfo>
    </ContainerWeatherInfo>
  );
}
