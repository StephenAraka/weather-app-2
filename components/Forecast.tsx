import React from 'react';
import { View } from 'react-native';
import ForecastItem from './ForecastItem';

const Forecast = ({ weather = 'cloudy'}) => {
  return (
    <View className={`h-1/2 justify-start flex gap-6 pt-6 items-start bg-weather-${weather}`}>
      <ForecastItem day="Tuesday" temp={27} />
      <ForecastItem day="Wednesday" temp={27} />
      <ForecastItem day="Thursday" temp={27} />
      <ForecastItem day="Friday" temp={27} />
      <ForecastItem day="Saturday" temp={27} />
      <ForecastItem day="Sunday" temp={27} />
    </View>
  );
};

export default Forecast;
