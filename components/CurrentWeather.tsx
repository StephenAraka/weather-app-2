import { icons } from '@/constants';
import { getBgColor, getBgImage } from '@/lib/utils';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Menu from './Menu';

const CurrentWeather = ({ weather }: { weather: string }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View
      className={`flex-1 h-1/2 border-b-2 relative border-white`}
      style={{ backgroundColor: getBgColor(weather) }}
    >
      <View className="absolute top-16 right-4 w-10 h-10 z-10">
        <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
          <Image source={icons.menudots} className="w-full h-full" />
        </TouchableOpacity>
      </View>

      {showMenu && (
        <Menu />
      )}

      <Image
        source={getBgImage(weather)}
        className="w-full h-[80%]"
        resizeMode="cover"
      />

      <View className="absolute w-full h-1/2 flex items-center justify-end">
        <Text className="text-white text-6xl">25°</Text>
        <Text className="text-white text-xl font-bold">SUNNY</Text>
      </View>

      <View className="absolute px-4 w-full h-1/2 flex flex-row items-end justify-between bottom-4">
        <View>
          <Text className="text-white text-xl text-center font-bold">19°</Text>
          <Text className="text-white">min</Text>
        </View>

        <View>
          <Text className="text-white text-xl text-center font-bold">25°</Text>
          <Text className="text-white">Current</Text>
        </View>

        <View>
          <Text className="text-white text-xl text-center font-bold">27°</Text>
          <Text className="text-white">min</Text>
        </View>
      </View>
    </View>
  );
};

export default CurrentWeather;
