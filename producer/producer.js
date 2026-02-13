import { Kafka } from "kafkajs";
import { generateWeather } from "./generate-weather.js";

const kafka = new Kafka({
  clientId: "weather-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

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
