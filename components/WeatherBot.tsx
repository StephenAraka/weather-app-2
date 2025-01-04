import { animations } from '@/constants';
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const WeatherBot = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 11000);

    return () => clearTimeout(timer);
  }, []);

  const handleLinkPress = () => {
    console.log('Link clicked!');
  };

  return (
    <View className="items-end absolute bottom-4 right-4">
      {showTooltip && (
        <View className="bg-white p-4 rounded-lg shadow-md mb-[-24] w-64 relative">
          <Text className="text-gray-800 text-sm">
            Hi 👋🏻, my name is Luna, and I can tell you what I think about your
            weather today!! Want to know what I think? 🤔💭{' '}
            <Text className="text-blue-500 underline" onPress={handleLinkPress}>
              click here
            </Text>
            .
          </Text>
          <View className="absolute bottom-[-6px] right-4 w-4 h-4 bg-white rotate-45" />
        </View>
      )}

      <TouchableOpacity onPress={() => setShowTooltip(!showTooltip)}>
        <LottieView
          loop
          source={animations.sun}
          autoPlay
          style={{
            height: 80,
            marginTop: 20,
            width: 80,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default WeatherBot;
