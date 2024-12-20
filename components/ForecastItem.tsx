import { getWeatherIcon } from '@/lib/utils';
import React from 'react';
import { Image, Text, View } from 'react-native';

const ForecastItem = ({ day, temp, weather }: { day: string; temp: number, weather: string }) => {
  return (
    <View className="px-4 w-full flex flex-row items-center justify-between">
      <Text className="w-1/3 text-white text-xl">{day}</Text>
      <View className="w-1/3 flex items-center">
        <Image source={getWeatherIcon(weather)} className="w-10 h-10" />
      </View>
      <Text className="w-1/3 text-white text-xl text-right font-bold">
        {temp}°
      </Text>
    </View>
  );
};

export default ForecastItem;
