import React, { useEffect, useState, useContext } from 'react';
import iconAimSight from 'assets/icons/aimSight.svg';
import iconPin from 'assets/icons/pin.svg';
import imgWeather from 'assets/img/shower.png';
import Button from 'components/Button';
import { fetchLocationByLatLong } from 'services/fetchLocation';
import { fetchWeather } from 'services/fetchWeather';
import useGeolocationLatLong from 'hooks/useGeolocationLatLong';
import WeatherContext from 'contexts/weatherContext';

import { DAY_NUM, DAY_NAME, MONTH_NAME } from '../../constants/date';

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
const LAT_LONG_BS_AS = {
  lat: 36.96,
  long: -122.02
};

export default function Aside() {
  const [dataLocation, setDataLocation] = useState({});
  const [{ dataDaysWeather, unitTemp }, setDataWeather] = useContext(WeatherContext);
  //  const [getUserLocation, setGetUserLocation] = useState(true);
  const [latLong, error] = useGeolocationLatLong(true);

  const { lat, long } = error ? LAT_LONG_BS_AS : latLong;

  useEffect(() => {
    const getDataLocation = async () => {
      const res = await fetchLocationByLatLong({ lat, long });
      setDataLocation(res.data[0]);
    };

    if (lat && long) {
      getDataLocation();
    }
  }, [lat, long]);

  useEffect(() => {
    const getDataWeather = async () => {
      const res = await fetchWeather(dataLocation.woeid);
      console.log(res.data.consolidated_weather);
      setDataWeather({ dataDaysWeather: res.data.consolidated_weather, unitTemp });
    };

    if (Object.keys(dataLocation).length >= 1) {
      getDataWeather();
    }
  }, [dataLocation, setDataWeather]);

  return (
    <ContainerAside>
      { Object.keys(dataDaysWeather).length >= 1 ? (
        <>
          <ContainerButtons>
            <Button>
              Search for places
            </Button>
            <Button round>
              <IconAimSight src={iconAimSight} />
            </Button>
          </ContainerButtons>
          <ContainerImgWeather>
            <ImgWeather src={imgWeather} />
          </ContainerImgWeather>
          <WeatherInfoAside>
            <Degress>
              {Math.floor(dataDaysWeather[0].the_temp)}<DegressType><span>°</span>c</DegressType>
            </Degress>
            <Weather>{dataDaysWeather[0].weather_state_name}</Weather>
            <Date>Today • {DAY_NAME}, {DAY_NUM} {MONTH_NAME}</Date>
            <Location>
              <img src={iconPin} alt="Location pin" /> <span>{dataLocation.title}</span>
            </Location>
          </WeatherInfoAside>
        </>
    )
          : <p>cargandoo.</p>
      }
    </ContainerAside>
  );
}

