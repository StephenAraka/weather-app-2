import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AboutScreen = () => {
  const router = useRouter();

  // Function to navigate back
  const goBack = () => {
    router.replace("/(root)/(tabs)/home")
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

        <View className='flex-1 flex justify-center'>
          <View className="items-center mb-4">
            <Image
              source={require('@/assets/images/splash-icon.png')}
              className="w-32 h-32"
              resizeMode="contain"
            />
          </View>

          {/* Title */}
          <Text className="text-2xl font-bold text-center text-blue-800">
            About AnyWeather
          </Text>

          {/* Description */}
          <Text className="text-base text-gray-600 mt-4 text-center leading-relaxed">
            AnyWeather is your go-to solution for accurate and real-time weather
            updates. Whether you're planning a day out, tracking storms, or
            checking conditions for your daily commute, we've got you covered.
          </Text>

          {/* Features */}
          <View className="mt-6">
            <Text className="text-xl font-semibold text-blue-700">
              Features:
            </Text>
            <View className="mt-2 space-y-2">
              <Text className="text-base text-gray-600">
                - Current weather updates
              </Text>
              <Text className="text-base text-gray-600">
                - 5-day weather forecasts
              </Text>
              <Text className="text-base text-gray-600">
                - User-friendly design and reliable data
              </Text>
            </View>
          </View>

          {/* Credits */}
          <View className="mt-6">
            <Text className="text-xl font-semibold text-blue-700">
              Credits:
            </Text>
            <Text className="text-base text-gray-600 mt-2">
              Weather data powered by{' '}
              <Text className="font-medium text-blue-500">OpenWeatherMap</Text>.
            </Text>
          </View>

          {/* Version */}
          <View className="mt-6 items-center">
            <Text className="text-sm text-gray-500">Version 1.0.0</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;
