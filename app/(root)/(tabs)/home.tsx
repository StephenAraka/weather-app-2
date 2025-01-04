import CurrentWeather from '@/components/CurrentWeather';
import Forecast from '@/components/Forecast';
import WeatherInfo from '@/components/WeatherInfo';
import { fetchWeatherData } from '@/lib/api';
import { getStoredWeatherData, storeWeatherData } from '@/lib/storage';
import { getWeatherDescription } from '@/lib/utils';
import NetInfo from '@react-native-community/netinfo';
import { useQuery } from '@tanstack/react-query';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [storedWeatherData, setStoredWeatherData] = useState<SavedWeatherData | null>(null);

  const [hasInternet, setHasInternet] = useState(true);

  useEffect(() => {
    // Check internet connection
    const netInfoSubscription = NetInfo.addEventListener((state) => {
      setHasInternet(state.isConnected ?? false);
    });
  
    // Get location
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
  
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    }
  
    getCurrentLocation();
  
    return () => {
      netInfoSubscription();
    };
  }, []);
  

  const { data, isLoading, isError } = useQuery({
    queryKey: ['weatherData', location?.coords.latitude, location?.coords.longitude],
    queryFn: async () => {
      const weatherData = await fetchWeatherData(
        location!.coords.latitude,
        location!.coords.longitude
      );

      storeWeatherData(weatherData);

      return weatherData;
    },
    enabled: !!location,
    retry: 2,
    staleTime: 5 * 60 * 1000,
  });

  // We'll check if data is being fetched when offline, if so, load from AsyncStorage
  useEffect(() => {
    if (!data) {
      getStoredWeatherData().then((storedData) => {
        if (storedData) {
          setStoredWeatherData(storedData);
        }
      });
    }
  }, [data]);

  if (errorMsg) {
    return (
      <SafeAreaView className="flex flex-1 justify-center items-center">
        <Text>{errorMsg}</Text>
      </SafeAreaView>
    );
  }

  if (isLoading && !data) {
    return (
      <SafeAreaView className="flex flex-1 justify-center items-center">
        <ActivityIndicator size="small" />
        <Text>Loading weather data...</Text>
      </SafeAreaView>
    );
  }

  if (hasInternet && isError && !data) {
    return (
      <SafeAreaView className="flex flex-1 justify-center items-center">
        <Text>Error fetching weather data. Please try again.</Text>
      </SafeAreaView>
    );
  }

  // if (!hasInternet) {
  //   return (
  //     <SafeAreaView className="flex flex-1 justify-center items-center">
  //       <Text>No internet connected.</Text>
  //     </SafeAreaView>
  //   );
  // }

  // For offline first, we check if either data or storedWeatherData is available, and return components accordingly
  const weatherToShow = data || storedWeatherData;

  return (
    <SafeAreaView className="flex flex-1" edges={['left', 'right']}>
      {weatherToShow ? (
        <>
          <CurrentWeather data={weatherToShow.currentWeather} />
          <Forecast
            weather={getWeatherDescription(weatherToShow.currentWeather.weather[0].description)}
            data={weatherToShow.forecast}
          />
          <WeatherInfo isOnline={hasInternet} location={weatherToShow.currentWeather.name} timestamp={weatherToShow.currentWeather.dt} />
        </>
      ) : (
        <Text>No weather data available</Text>
      )}
    </SafeAreaView>
  );
};

export default Home;
