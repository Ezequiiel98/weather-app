import React, { useState } from 'react';
import iconClose from 'assets/icons/close.svg';
import iconSearch from 'assets/icons/search.svg';
import iconArrowRight from 'assets/icons/arrow-right.svg';
import { fetchLocationByName } from 'services/fetchLocation';
import Button from 'components/Button';
import Loader from 'components/Loader';

import {
  ContainerSearch,
  ButtonClose,
  FormGroup,
  ContainerInput,
  Input,
  IconSearch,
  ContainerPlaces,
  ButtonPlace,
  IconArrowRight,
  NotResultMessage
} from './styles';

export default function Search({ setShowSearch, setDataLocation, setDataWeather, showSearch }) {
  const [nameCountry, setNamecountry] = useState('');
  const [countriesData, setCountriesData] = useState([]);
  const [showNotResults, setShowNotResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [closeSearch, setCloseSearch] = useState(false);

  const handleChange = e => setNamecountry(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();

    setIsLoading(true);
    setShowNotResults(false);

    if (nameCountry !== '') {
      setCountriesData([]);
      const res = await fetchLocationByName(nameCountry);
      setCountriesData(res.data);
      setShowNotResults(res.data.length <= 0);
    } else {
      setShowNotResults(true);
    }

    setIsLoading(false);
  };

  const handleClick = woeid => {
     const [locationCountry] = countriesData.filter(country => country.woeid === woeid);

    setDataLocation(locationCountry);
    // reseteo el context para que se muestren los loaders
    setDataWeather({ dataDaysWeather: {}, unitTemp: 'c' });
    setShowSearch(false);
  };

  const handleCloseSearch = () => {
    setCloseSearch(true);
    setTimeout(() => {
      setShowSearch(false);
    }, 550);
  };

  return (
    <ContainerSearch close={closeSearch}>
      <ButtonClose onClick={handleCloseSearch}>
        <img src={iconClose} alt="icon close" />
      </ButtonClose>
      <FormGroup onSubmit={handleSubmit}>
        <ContainerInput>
          <Input type="text" placeholder="Search location" onChange={handleChange} />
          <IconSearch src={iconSearch} alt="Magnifying glass" />
        </ContainerInput>
        <Button blue type="submit">Search</Button>
      </FormGroup>

      <ContainerPlaces>
        {countriesData.map(({ title, woeid }) => (
          <ButtonPlace key={woeid} onClick={() => handleClick(woeid)} type="button">
            {title}
            <IconArrowRight src={iconArrowRight} />
          </ButtonPlace>
        ))}
        {showNotResults && <NotResultMessage>There weren't results :c </NotResultMessage>}
        { isLoading && <Loader dot />}
      </ContainerPlaces>
    </ContainerSearch>
  );
}
