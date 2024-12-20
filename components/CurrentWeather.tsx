import { icons } from '@/constants';
import { saveFavoriteWeather } from '@/lib/storage';
import { getBgColor, getBgImage, getWeatherDescription } from '@/lib/utils';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Menu from './Menu';

const CurrentWeather = ({ data }: WeatherDataProps) => {
  const [showMenu, setShowMenu] = useState(false);


// Example function to save a weather item to favorites
const saveWeather = async (weatherData: any) => {
  const favorite = {
    name: weatherData.name,
    coord: weatherData.coord,
    weather: weatherData.weather,
    main: weatherData.main,
    dt: weatherData.dt,
  };

  await saveFavoriteWeather(favorite);
};

const addToFavs = () => {
  saveWeather(
    {
      name: data?.name,
      coord: data?.coord,
      weather: data?.weather,
      main: data?.main,
      dt: data?.dt,
    })
    setShowMenu(false);
}


  return (
    <View
      className={`flex-1 h-1/2 border-b-2 relative border-white`}
      style={{ backgroundColor: getBgColor(getWeatherDescription(data?.weather[0].description)) }}
    >
      <View className="absolute top-16 right-4 w-10 h-10 z-10">
        <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
          <Image source={icons.menudots} className="w-full h-full" />
        </TouchableOpacity>
      </View>

      {showMenu && (
        <Menu handleAddToFavorites={addToFavs} />
      )}

      <Image
        source={getBgImage(getWeatherDescription(data?.weather[0].description))}
        className="w-full h-[80%]"
        resizeMode="cover"
      />

      <View className="absolute w-full h-1/2 flex items-center justify-end">
        <Text className="text-white text-6xl">{Math.round(data.main.temp)}°</Text>
        <Text className="text-white text-xl font-bold uppercase">{getWeatherDescription(data.weather[0].description)}</Text>
      </View>

      <View className="absolute px-4 w-full h-1/2 flex flex-row items-end justify-between bottom-4">
        <View>
          <Text className="text-white text-xl text-center font-bold">{Math.round(data.main.temp_min)}°</Text>
          <Text className="text-white">min</Text>
        </View>

        <View>
          <Text className="text-white text-xl text-center font-bold">{Math.round(data.main.temp)}°</Text>
          <Text className="text-white">Current</Text>
        </View>

        <View>
          <Text className="text-white text-xl text-center font-bold">{Math.round(data.main.temp_max)}°</Text>
          <Text className="text-white">min</Text>
        </View>
      </View>
    </View>
  );
};

export default CurrentWeather;
