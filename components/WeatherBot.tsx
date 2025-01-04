import { animations } from '@/constants';
import * as GoogleGenerativeAI from '@google/generative-ai';
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const GOOGLE_AI_API_KEY = 'AIzaSyBT-P6MZ1hmRryl-a8prXIgSs7TAI9x8WE';

type WeatherBotProps = {
  feelsLike: string;
  location: string;
  type: string;
};

const WeatherBot = ({ feelsLike, location, type }: WeatherBotProps) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [aiResponse, setAiResponse] = useState('');
  const [promptingAI, setPromptingAI] = useState(false);
  const tooltipTimeout = aiResponse ? 60000 : 11000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, tooltipTimeout);

    return () => clearTimeout(timer);
  }, []);

  const handleLinkPress = async () => {
    try {
      const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(
        GOOGLE_AI_API_KEY
      );
      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
      });

      const prompt = `The weather in ${location} has ${type} and currently feels like ${feelsLike}°C. What would you recommend for such weather in case I am moving out maybe? What do you think I should wear or carry or consider? Make the response a little short, though. About 50 words max. Add a little sense of humor`;

      setPromptingAI(true);

      const result = await model.generateContent(prompt);

      // Assuming `result.content` holds the generated response.
      if (result && result.response) {
        setPromptingAI(false);
        setAiResponse(result.response.text());
      } else {
        setPromptingAI(false);
        console.error('No content received from the model.');
      }
    } catch (error) {
      setPromptingAI(false);
      console.error('Error generating content:', error);
    }
  };

  return (
    <View className="items-end absolute bottom-4 right-4">
      {showTooltip && (
        <View className="bg-white p-4 rounded-lg shadow-md mb-[-24] w-64 relative">
          {aiResponse && !promptingAI && (
            <Text className="text-gray-800 text-sm">{aiResponse}</Text>
          )}
          
          {!aiResponse && !promptingAI && (
            <Text className="text-gray-800 text-sm">
              Hi 👋🏻, my name is Luna, and I can tell you what I think about your
              weather today!! Want to know what I think? 🤔💭{' '}
              <Text
                className="text-blue-500 underline"
                onPress={handleLinkPress}
              >
                click here
              </Text>
              .
            </Text>
          )}

          {promptingAI && (
            <Text className="text-gray-800 text-sm">Hold on, let me think 🤔...</Text>
          )}
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
