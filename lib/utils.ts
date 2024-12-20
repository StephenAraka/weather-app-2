import { icons, weatherBackground } from "@/constants";

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

export const getWeatherDescription = (description: string): "sunny" | "cloudy" | "rainy" => {
  const sunnyConditions = ["clear sky"];
  const cloudyConditions = [
    "few clouds",
    "scattered clouds",
    "broken clouds",
    "overcast clouds",
    "mist",
    "fog",
    "windy",
    "haze",
    "smoke",
    "dust",
    "sand",
    "ash",
    "squalls",
    "snow",
    "light snow",
    "heavy snow",
    "sleet",
    "shower sleet",
    "freezing rain",
  ];
  const rainyConditions = [
    "light rain",
    "moderate rain",
    "heavy intensity rain",
    "very heavy rain",
    "extreme rain",
    "light intensity shower rain",
    "shower rain",
    "heavy intensity shower rain",
    "ragged shower rain",
    "thunderstorm",
    "thunderstorm with light rain",
    "thunderstorm with rain",
    "thunderstorm with heavy rain",
    "light thunderstorm",
    "heavy thunderstorm",
    "ragged thunderstorm",
    "thunderstorm with drizzle",
    "thunderstorm with light drizzle",
    "thunderstorm with heavy drizzle",
    "drizzle",
    "light intensity drizzle",
    "drizzle rain",
    "heavy intensity drizzle",
    "shower drizzle",
  ];

  if (sunnyConditions.includes(description)) {
    return "sunny";
  } else if (cloudyConditions.includes(description)) {
    return "cloudy";
  } else if (rainyConditions.includes(description)) {
    return "rainy";
  }

  return "cloudy";
}

export const getWeatherIcon = (weatherType: string) => {
  switch (weatherType.toLowerCase()) {
    case "sunny":
      return icons.clear;
    case "cloudy":
      return icons.partlysunny;
    case "rainy":
      return icons.rain;
    default:
      return icons.clear;
  }
};