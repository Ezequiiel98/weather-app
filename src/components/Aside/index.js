import React, { useEffect, useState, useContext } from 'react';
import { fetchLocationByLatLong } from 'services/fetchLocation';
import { fetchWeather } from 'services/fetchWeather';
import useGeolocationLatLong from 'hooks/useGeolocationLatLong';
import WeatherContext from 'contexts/weatherContext';
import Search from 'components/Search';
import Loader from 'components/Loader';

import AsideDayWeatherInfo from './components/AsideDayWeatherInfo';
import { ContainerAside } from './styles';

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
    if (errorLocation) {
      alert('To use it, you must enable location service');
    } else {
      setDataWeather({ dataDaysWeather: {}, unitTemp: 'c' });
      setGetUserLocation(true);
    }
  };

  return (
    <>
      <ContainerAside>
        { Object.keys(dataDaysWeather).length >= 1
          ? <AsideDayWeatherInfo
              onClickUserLocation={handleClickUserLocation}
              onClickShowSearch={setShowSearch}
              dataDay={dataDaysWeather[0]}
              locationName={dataLocation.title}
              unitTemp={unitTemp}
            />
          : <Loader />
      }
      </ContainerAside>
      {
        showSearch && <Search
          setDataLocation={setDataLocation}
          setShowSearch={setShowSearch}
          setDataWeather={setDataWeather}
          showSearch={showSearch}
                      />
      }
    </>
  );
}

