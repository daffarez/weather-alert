import { Kafka } from "kafkajs";
import { isExtreme } from "./extreme.js";

const kafka = new Kafka({
  clientId: "weather-alert-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "weather-alert-group" });

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
