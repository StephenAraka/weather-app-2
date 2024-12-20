declare interface Location {
  coords: {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
  };
  timestamp: number;
}

declare interface WeatherData {
  base: string;
  city: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: Array<{
    description: string;
    icon: string;
    id: number;
    main: string;
  }>;
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

declare interface WeatherDataProps {
  data: WeatherData;
}

declare interface WeatherForecast {
  city: {
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  list: Array<{
    clouds: {
      all: number;
    };
    dt: number;
    dt_txt: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
    };
    pop: number;
    rain?: {
      [key: string]: number;
    };
    sys: {
      pod: string;
    };
    visibility: number;
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
  }>;
  message: number;
}

declare interface ForecastDataProps {
  weather: string,
  data: WeatherForecast;
}

declare interface SavedWeatherData {
  currentWeather: {
    temp: number;
    feels_like: number;
    humidity: number;
    weather: {
      description: string;
      icon: string;
    }[];
  };
  forecast: {
    list: {
      dt: number;
      main: {
        temp: number;
      };
      weather: {
        description: string;
      }[];
    }[];
  };
}