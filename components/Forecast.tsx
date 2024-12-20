import { getBgColor } from '@/lib/utils';
import React from 'react';
import { View } from 'react-native';
import ForecastItem from './ForecastItem';

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const Forecast = ({ weather, data }: ForecastDataProps) => {
  const newDays = data?.list.filter((item) => item.dt_txt.includes('00:00:00'));
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <View
      className="h-1/2 justify-start flex gap-6 pt-6 items-start"
      style={{ backgroundColor: getBgColor(weather) }}
    >
      {newDays?.map((item, idx) => (
        <ForecastItem key={idx} weather={weather} day={forecastDays[idx]} temp={Math.round(item?.main.temp)} />
      ))}
    </View>
  );
};

export default Forecast;
