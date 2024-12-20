import { weatherBackground } from "@/constants";

export const getBgColor = (weather: string) => {

  switch (weather) {
    case 'cloudy':
      return '#54717a';

      case 'rainy':
      return '#57575d';
  
    default:
      return '#47ab2f';
  }
};

export const getBgImage = (weather: string) => {

  switch (weather) {
    case 'cloudy':
      return weatherBackground.cloudy;

      case 'rainy':
      return weatherBackground.rainy;
  
    default:
      return weatherBackground.sunny;
  }
};