import { useEffect, useState } from 'react';

export default function useGeolocationLatLong() {
  const [latLong, setLatLong] = useState({});
  const [error, setError] = useState(null);

  const handleChange = ({ coords }) => {
    const { latitude: lat, longitude: long } = coords;
    setLatLong({ lat, long });
  };

  const handleError = () => setError(true);

  useEffect(() => {
    const getLocation = () => navigator.geolocation.getCurrentPosition(position => handleChange(position), () => handleError());

    if ('geolocation' in navigator) {
      getLocation();
      setError(false);
    } else {
      setError(true);
    }
  }, []);
  return { latLong, error };
}
