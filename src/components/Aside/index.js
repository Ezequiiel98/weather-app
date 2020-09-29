import React, { useEffect, useState } from 'react';
import iconAimSight from 'assets/icons/aimSight.svg';
import iconPin from 'assets/icons/pin.svg';
import imgWeather from 'assets/img/shower.png';
import Button from 'components/Button';
import { fetchLocationByLatLong } from 'services/fetchLocation';
import { fetchWeather } from 'services/fetchWeather';
import useGeolocationLatLong from 'hooks/useGeolocationLatLong';

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
  const [dataWeather, setDataWeather] = useState({});
  //  const [getUserLocation, setGetUserLocation] = useState(true);
  const { latLong: { lat, long }, error } = useGeolocationLatLong(true);
  // const { lat, long } = LAT_LONG_BS_AS;

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
      setDataWeather(res.data.consolidated_weather);
    };

    if (Object.keys(dataLocation).length >= 1) {
      getDataWeather();
    }
  }, [dataLocation]);

  return (
    <ContainerAside>
      { Object.keys(dataWeather).length >= 1 ? (
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
              {Math.floor(dataWeather[0].the_temp)}<DegressType><span>°</span>c</DegressType>
            </Degress>
            <Weather>{dataWeather[0].weather_state_name}</Weather>
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

