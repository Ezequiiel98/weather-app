import { useEffect, useState } from 'react';

export default function useGeolocationLatLong(get) {
  const [latLong, setLatLong] = useState({});
  const [error, setError] = useState(null);

  const handleChange = ({ coords }) => {
    const { latitude: lat, longitude: long } = coords;
    setLatLong({ lat, long });
  };

  const handleError = () => setError(true);

  useEffect(() => {
    const getLocation = () => navigator.geolocation.getCurrentPosition(position => handleChange(position), () => handleError());

    if ('geolocation' in navigator && get) {
      getLocation();
      setError(false);
    } else {
      setError(true);
    }
  }, [get]);

  return [latLong, error];
}
