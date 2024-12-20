import CurrentWeather from '@/components/CurrentWeather';
import Forecast from '@/components/Forecast';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const Home = () => {
  return (
    <SafeAreaView className=" flex flex-1" edges={['left', 'right']}>
      <CurrentWeather />
      <Forecast />
    </SafeAreaView>
  )
}

export default Home