import React from 'react';
import iconClose from 'assets/icons/close.svg';
import iconSearch from 'assets/icons/search.svg';
import iconArrowRight from 'assets/icons/arrow-right.svg';
import Button from 'components/Button';

import {
  ContainerSearch,
  ButtonClose,
  InputGroup,
  ContainerInput,
  Input,
  IconSearch,
  ContainerPlaces,
  ButtonPlace,
  IconArrowRight
} from './styles';

export default function Search() {
  return (
    <ContainerSearch>
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

      <ContainerPlaces>
        <ButtonPlace type="button">
          Buenos Aires
          <IconArrowRight src={iconArrowRight} />
        </ButtonPlace>
        <ButtonPlace type="button">
          London
          <IconArrowRight src={iconArrowRight} />
        </ButtonPlace>
        <ButtonPlace type="button">
          Madrid
          <IconArrowRight src={iconArrowRight} />
        </ButtonPlace>
      </ContainerPlaces>
    </ContainerSearch>
  );
}
