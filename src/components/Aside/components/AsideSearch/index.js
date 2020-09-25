import React from 'react';
import styled from '@emotion/styled';
import iconClose from 'assets/icons/close.svg';
import iconSearch from 'assets/icons/search.svg';
import Button from 'components/Button';

const ContainerAsideSearch = styled.div`
  padding: 10px 20px;
  max-width: 100%;
`;

const ButtonClose = styled.button`
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

const InputGroup = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  &>button {
    padding: 9px 12px;
  }

`;

const Input = styled.input`
  padding: 15px;
  padding-left: 40px;
  border: 1px solid #E7E7EB;
  background-color: #1E213A;
  color: #616475;
  font-size: 16px;
  max-width: 160px;
  margin-right: 10px;
`;

const IconSearch = styled.img`
  position: absolute;
  left: 10px;
  top: 11px;
  width: 25px;
`;

const ContainerInput = styled.div`
  position: relative;
`;

export default function AsideSearch() {
  return (
    <ContainerAsideSearch>
      <ButtonClose>
        <img src={iconClose} alt="icon close" />
      </ButtonClose>
      <InputGroup>
        <ContainerInput>
          <Input type="text" placeholder="Search location" />
          <IconSearch src={iconSearch} alt="Magnifying glass" />
        </ContainerInput>
        <Button blue>Search</Button>
      </InputGroup>
    </ContainerAsideSearch>
  );
}
