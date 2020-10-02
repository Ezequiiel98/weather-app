import React, { useEffect, useState, useContext } from 'react';
import iconAimSight from 'assets/icons/aimSight.svg';
import iconPin from 'assets/icons/pin.svg';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Search from 'components/Search';
import { fetchLocationByLatLong } from 'services/fetchLocation';
import { fetchWeather } from 'services/fetchWeather';
import useGeolocationLatLong from 'hooks/useGeolocationLatLong';
import WeatherContext from 'contexts/weatherContext';
import getDate from 'helpers/getDate';
import convertDegressTemp from 'helpers/convertDegressTemp';

import IMG_WEATHER from '../../constants/imgWeather';

import { ContainerAside,
  ContainerButtons,
  IconAimSight,
  ContainerImgWeather,
  ImgWeather,
  WeatherInfoAside,
  Degress,
  DegressType,
  Weather,
  Date,
  Location
} from './styles';

// santacruz
const LAT_LONG_SANTA_CRUZ = {
  lat: 36.96,
  long: -122.02
};

export default function Aside() {
  const [dataLocation, setDataLocation] = useState({});
  const [showSearch, setShowSearch] = useState(false);
  const [{ dataDaysWeather, unitTemp }, setDataWeather] = useContext(WeatherContext);
  const [getUserLocation, setGetUserLocation] = useState(true);
  const [latLong, errorLocation] = useGeolocationLatLong();

  const { lat, long } = errorLocation ? LAT_LONG_SANTA_CRUZ : latLong;

  useEffect(() => {
    const getDataLocation = async () => {
      const res = await fetchLocationByLatLong({ lat, long });
      console.log('1', res);
      setDataLocation(res.data[0]);
      setGetUserLocation(false);
    };

    if (lat && long && getUserLocation) {
      getDataLocation();
    }
  }, [lat, long, getUserLocation]);

  useEffect(() => {
    const getDataWeather = async () => {
      const res = await fetchWeather(dataLocation.woeid);
      console.log('2', res);
      setDataWeather({ dataDaysWeather: res.data.consolidated_weather, unitTemp: 'c' });
    };

    if (Object.keys(dataLocation).length >= 1) {
      getDataWeather();
    }
  }, [dataLocation, setDataWeather]);

  const handleClickUserLocation = () => {
    if (!errorLocation) {
      setDataWeather({ dataDaysWeather: {}, unitTemp: 'c' });
      setGetUserLocation(true);
    } else {
      alert('to use it, you must enable location service');
    }
  };

  return (
    <>
      <ContainerAside>
        { Object.keys(dataDaysWeather).length >= 1 ? (
          <>
            <ContainerButtons>
              <Button onClick={() => setShowSearch(true)}>
                Search for places
              </Button>
              <Button onClick={handleClickUserLocation} round>
                <IconAimSight src={iconAimSight} />
              </Button>
            </ContainerButtons>
            <ContainerImgWeather>
              <ImgWeather src={IMG_WEATHER[dataDaysWeather[0].weather_state_abbr]} alt={dataDaysWeather[0].weather_state_name} />
            </ContainerImgWeather>
            <WeatherInfoAside>
              <Degress>
                {convertDegressTemp(dataDaysWeather[0].the_temp, unitTemp)}<DegressType><span>°</span>{unitTemp}</DegressType>
              </Degress>
              <Weather>{dataDaysWeather[0].weather_state_name}</Weather>
              <Date>Today • {getDate(dataDaysWeather[0].created)}</Date>
              <Location>
                <img src={iconPin} alt="Location pin" /> <span>{dataLocation.title}</span>
              </Location>
            </WeatherInfoAside>
          </>
    )
            : <Loader />
      }
      </ContainerAside>
      { showSearch && <Search
        setDataLocation={setDataLocation}
        setShowSearch={setShowSearch}
        setDataWeather={setDataWeather}
                      /> }
    </>
  );
}

