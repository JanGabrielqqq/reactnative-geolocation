import { useEffect, useState } from "react";
import * as Location from 'expo-location';
import { ASPECT_RATIO } from "../utils/aspectRatio";

const latitudeDelta = 0.02
const longitudeDelta = latitudeDelta * ASPECT_RATIO
const initialLocation = {
  longitudeDelta,
  latitudeDelta,
  latitude: 0,
  longitude: 0
}

export const useLocation = () => {
  const [location, setLocation] = useState(initialLocation);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let { coords: { longitude, latitude } } = await Location.getCurrentPositionAsync({});
      setLocation(prev => ({ ...prev, longitude, latitude }));
    })();
  }, []);

  return { location, errorMsg, setLocation }
}