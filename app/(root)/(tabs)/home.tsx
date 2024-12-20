import CurrentWeather from '@/components/CurrentWeather';
import Forecast from '@/components/Forecast';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const weather = 'sunny';

const Home = () => {
  return (
    <SafeAreaView className=" flex flex-1" edges={['left', 'right']}>
      <CurrentWeather weather={weather} />
      <Forecast weather={weather} />
    </SafeAreaView>
  )
}

export default Home