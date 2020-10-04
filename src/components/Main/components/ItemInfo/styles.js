import styled from '@emotion/styled';

export const ContainerItem = styled.div`
  background-color: #1E213A;
  margin: 10px auto;
  padding: 5px 12px 25px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 90%;

  @media (min-width: 1150px) {
    min-width: 45%; 
  }
`;

export const TitleInfo = styled.h3`
  color: #E7E7EB;
  padding: 0;
  margin: 22px 0 10px 0;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
`;

export const BigText = styled.span`
  font-size: 35px;
  
  @media (min-width: 480px) {
    font-size: 45px;
  }
`;

export const BoldText = styled.span`
  font-weight: bold;
  font-size: 60px;
    
  @media (min-width: 480px) {
    font-size: 75px;
  }
`;

