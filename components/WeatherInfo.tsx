import { formatTime } from '@/lib/utils';
import React from 'react';
import { Text, View } from 'react-native';

const WeatherInfo = ({ isOnline, location, timestamp }: any) => {
  return (
    <View className="items-start absolute bottom-8 left-4">
        <Text className="text-sm font-semibold text-white">Location: <Text className="font-normal capitalize">{location}</Text></Text>
        <Text className="text-sm font-semibold text-white">Last Updated: <Text className="font-normal">{formatTime(timestamp * 1000)}</Text></Text>
        <Text className="text-sm font-semibold text-white">Status: {isOnline ? <Text className="text-general-400">Online</Text> : <Text className="text-danger-800">Offline</Text>}</Text>
    </View>
  );
};

export default WeatherInfo;
