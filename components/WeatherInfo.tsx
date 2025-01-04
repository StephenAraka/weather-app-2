import React from 'react';
import { Text, View } from 'react-native';

const WeatherInfo = ({ isOnline, location, timestamp }: any) => {
  return (
    <View className="flex-1 justify-center items-start absolute bottom-8 left-4">
        <Text className="text-sm font-semibold text-white">Location: <Text className="font-normal capitalize">{location}</Text></Text>
        <Text className="text-sm font-semibold text-white">Last Updated: <Text className="font-normal">{`${new Date(timestamp * 1000).toLocaleString()}`}</Text></Text>
        <Text className="text-sm font-semibold text-white">Status: {isOnline ? <Text className="text-general-400">Online</Text> : <Text className="text-danger-800">Offline</Text>}</Text>
    </View>
  );
};

export default WeatherInfo;
