import { getFavorites } from '@/lib/storage';
import { getWeatherDescription } from '@/lib/utils';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Linking,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FavoritesScreen = () => {
  const router = useRouter();
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const savedFavorites = await getFavorites();
      setFavorites(savedFavorites);
    };

    fetchFavorites();
  }, []);

  // Open coords in google maps
  const openMap = (latitude: number, longitude: number) => {
    const url = Platform.select({
      ios: `maps:0,0?q=${latitude},${longitude}`,
      android: `geo:${latitude},${longitude}`,
    });
    Linking.openURL(url as string);
  };

  const renderItem = ({ item }: { item: any }) => (
    <View className="p-4 mb-4 bg-white rounded-lg shadow-md">
      <Text className="text-xl font-bold">{item.name}</Text>
      <Text className="text-gray-600">
        Weather:{' '}
        {getWeatherDescription(item.weather[0].description).toUpperCase()}
      </Text>
      <Text className="text-gray-600">Temp: {item.main.temp}°C</Text>
      <Text className="text-gray-600">
        Time saved: {new Date(item.dt * 1000).toLocaleString()}
      </Text>

      <TouchableOpacity onPress={() => openMap(item.coord.lat, item.coord.lon)}>
        <Text className="text-blue-500 mt-2">Open in Maps</Text>
      </TouchableOpacity>
    </View>
  );

  const goBack = () => {
    router.replace('/(root)/(tabs)/home');
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-50">
      <View style={{ padding: 16, display: 'flex', flex: 1 }}>
        <TouchableOpacity
          onPress={goBack}
          className="absolute top-8 left-4 p-2 bg-general-200 rounded-full"
        >
          <Text className="text-white font-semibold">Back</Text>
        </TouchableOpacity>

        <View className="flex-1 flex justify-center mt-10">
          <FlatList
            data={favorites}
            renderItem={renderItem}
            keyExtractor={(item, i) =>
              `${new Date(item.dt * 1000).toLocaleString()}-${i}`
            }
            contentContainerStyle={{ paddingTop: 16, paddingHorizontal: 16 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
