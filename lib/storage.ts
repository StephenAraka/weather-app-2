import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@favorites';

// Adding a favorite
export const saveFavoriteWeather = async (favorite: any) => {
  try {
    const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);
    const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    favorites.push(favorite);

    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorite weather:', error);
  }
};

// Retrieving favorites
export const getFavorites = async () => {
  try {
    const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  } catch (error) {
    console.error('Error fetching favorites:', error);
    return [];
  }
};

export const storeWeatherData = async (weatherData: SavedWeatherData) => {
  try {
    await AsyncStorage.setItem('weatherData', JSON.stringify(weatherData));
  } catch (error) {
    console.error('Error saving weather data to AsyncStorage', error);
  }
};

export const getStoredWeatherData = async (): Promise<SavedWeatherData | null> => {
  try {
    const storedData = await AsyncStorage.getItem('weatherData');
    return storedData ? JSON.parse(storedData) : null;
  } catch (error) {
    console.error('Error retrieving weather data from AsyncStorage', error);
    return null;
  }
};