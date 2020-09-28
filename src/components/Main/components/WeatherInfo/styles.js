import styled from '@emotion/styled';

export const ContainerWeatherInfo = styled.div`
  color: #E7E7EB;
  margin-top: 50px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 27px;
`;

export const ContainerInfo = styled.div`

  @media (min-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;


export const ContainerPercentage = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-width: 80%;

  & > p {
    padding: 0;
    margin: 8px 5px;
  }

  & > p:last-of-type {
    margin: 8px 0 0 auto;
  }
`;

export const Percentage = styled.div`
  position: relative;
  background-color: #E7E7EB;
  height: 10px;
  width: 100%;
  border-radius: 70px;
`;

export const PercentageFill = styled.div`
  position: absolute;
  border-radius: 70px;
  top: 0;
  left: 0;
  height: 10px;
  width: ${props => props.humidityPercentage || 0}%;
  background-color: #FFEC65;
`;

export const ContainerWindDirection = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  min-width: 90px;

  & > p {
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export const IconDirection = styled.div`
  background-color: #6E707A;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 5px;
  
  & > img {
    display: block;
    margin: auto;
    width: 29px;
    height: 29px;
    transform: rotate(${props => props.degressDirection || 0}deg);
  }
`;

