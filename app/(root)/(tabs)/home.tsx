import CurrentWeather from '@/components/CurrentWeather';
import Forecast from '@/components/Forecast';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const weather = 'sunny';

const Home = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView className=" flex flex-1" edges={['left', 'right']}>
      <CurrentWeather weather={weather} />
      <Forecast weather={weather} />
    </SafeAreaView>
  );
};

export default Home;
