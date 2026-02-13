import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "weather-alert-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "weather-alert-group" });

const isExtreme = (weather) => {
  return (
    weather.temp > 32 ||
    weather.temp < 18 ||
    weather.humidity > 75 ||
    weather.humidity < 30
  );
};

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "weather", fromBeginning: false });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const weather = JSON.parse(message.value.toString());

      if (isExtreme(weather)) {
        console.log(
          `⚠️ Extreme Weather Alert! ${weather.city}: Temp=${weather.temp}°C, Humidity=${weather.humidity}%`,
        );
      }
    },
  });
};

run();
