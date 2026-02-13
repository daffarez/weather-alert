export const isExtreme = (weather) => {
  return (
    weather.temp > 32 ||
    weather.temp < 18 ||
    weather.humidity > 75 ||
    weather.humidity < 30
  );
};
