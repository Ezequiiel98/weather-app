import styled from '@emotion/styled';

export const ContainerDays = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const CardDay = styled.div`
  background-color: #1E213A;
  color: #E7E7EB;
  font-size: 16px;
  padding: 15px 25px;
  margin: 0 auto 22px auto;
  min-width: 110px;
   
`;

export const Day = styled.h4`
  margin: 0 0 20px 0; 
  text-align: center;
  padding: 0;
`;

export const ImgWeather = styled.img`
  height: 80px;
  object-fit: cover;
  padding: 5px;
  display: block;
  margin: 0 auto;
`;

export const Degress = styled.div`
  display: flex;
  margin-top: 15px;
  font-size: 18px;
  justify-content: space-between; 
  padding: 10px;

  & > * {
    margin: 0;
  }
`;

export const DegreeMin = styled.p`
  color: #A09FB1;
`;
