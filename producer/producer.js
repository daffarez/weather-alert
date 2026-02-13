import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "weather-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const generateWeather = () => {
  const cities = ["Jakarta", "Bandung", "Surabaya", "Bali"];
  const temp = Math.floor(Math.random() * 15) + 20; // 20–34°C
  const humidity = Math.floor(Math.random() * 50) + 30; // 30–80%
  const city = cities[Math.floor(Math.random() * cities.length)];
  return { city, temp, humidity, timestamp: new Date().toISOString() };
};

const run = async () => {
  await producer.connect();
  setInterval(async () => {
    const weather = generateWeather();
    await producer.send({
      topic: "weather",
      messages: [{ value: JSON.stringify(weather) }],
    });
    console.log("Sent:", weather);
  }, 2000);
};

run();
