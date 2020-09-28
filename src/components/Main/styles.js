import styled from '@emotion/styled';

export const ContainerWeather = styled.main`
  flex: 1;
  padding: 15px 20px;
  background-color: #100E1D;

  @media (min-width: 768px) {
    padding: 15px 90px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
   
  & * + * {
    margin: 0 12px;
  }
 
  & > button {
    font-size: 18px;
    font-weight: 700;
    padding: 10px;
  }

`;
