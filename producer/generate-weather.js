export const generateWeather = () => {
  const cities = ["Jakarta", "Bandung", "Surabaya", "Bali"];
  const temp = Math.floor(Math.random() * 15) + 20; // 20–34°C
  const humidity = Math.floor(Math.random() * 50) + 30; // 30–80%
  const city = cities[Math.floor(Math.random() * cities.length)];
  return { city, temp, humidity, timestamp: new Date().toISOString() };
};
