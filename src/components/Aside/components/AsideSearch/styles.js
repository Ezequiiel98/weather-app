import styled from '@emotion/styled';

export const ContainerAsideSearch = styled.div`
  padding: 10px 20px;
  max-width: 100%;
`;

export const ButtonClose = styled.button`
  padding: 8px;
  background-color: transparent;
  border: none;
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
  margin-top: 20px;
  display: flex;
  justify-content: center;

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
  max-width: 160px;
  margin-right: 10px;
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
  min-width: 300px; 
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

