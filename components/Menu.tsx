import { icons } from '@/constants';
import { router } from "expo-router";
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const Menu = ({ handleAddToFavorites }: any) => {
  return (
    <View className="absolute bg-slate-50  top-28 right-8 z-10 rounded-md">
      <TouchableOpacity
        className="flex flex-row items-center justify-between gap-3 py-2 px-4 border-b border-stone-300"
        onPress={handleAddToFavorites}
      >
        <Image source={icons.plus} className="w-6 h-6" />
        <Text className="text-left ">Add to favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex flex-row items-center justify-between gap-3 py-2 px-4 border-b border-stone-300"
        onPress={() => router.replace("/favorites")}
          >
        <Image source={icons.favorite} className="w-6 h-6" />
        <Text className="text-left flex-1">View favorites</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex flex-row items-center justify-between gap-3 py-2 px-4"
        onPress={() => router.replace("/(root)/(tabs)/about")}
      >
        <Image source={icons.info} className="w-6 h-6" />
        <Text className="text-left flex-1">About app</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
