import styled from '@emotion/styled';

export const ContainerSearch = styled.div`
  position: fixed; 
  background-color: #1E213A;
  color: #E7E7EB;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  padding: 10px 20px;
  min-width: 300px;
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  padding: 8px 0 8px 8px;
  display: block;
  margin: auto 0 auto auto;

  & > img {
    width: 30px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  max-width: 280px;
  margin-top: 20px;
  
  &>button {
    padding: 9px 12px;
  }
`;

export const Input = styled.input`
  padding: 15px;
  padding-left: 40px;
  border: 1px solid #E7E7EB;
  background-color: #1E213A;
  color: #616475;
  font-size: 16px;
  max-width: 150px;
  
  @media (min-width: 310px) {
    margin-right: 10px;
  }
`;

export const IconSearch = styled.img`
  position: absolute;
  left: 10px;
  top: 11px;
  width: 25px;
`;

export const ContainerInput = styled.div`
  position: relative;
`;

export const ContainerPlaces = styled.div`
  margin-top: 30px;
`;

export const ButtonPlace = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: #E7E7EB;
  padding: 15px 10px;
  min-width: 280px;
  font-size: 16px;
  font-weight: 500px;
  border: 1px solid transparent; 
  transition: border .3s ease;
  margin: 5px auto; 
   
  &:hover {
    border-color: #616475;
    cursor: pointer;
  }
`;

export const IconArrowRight = styled.img`
  width: 30px;
`;

