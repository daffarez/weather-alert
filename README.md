# Weather Alert

This mini project simulates fake weather data and sends alerts when extreme weather is detected, using local Kafka and Node.js. No real weather API is needed; all data is generated randomly.

## Features

- Producer generates random weather data every few seconds
- Consumer detects extreme weather (temperature >32°C / <18°C, humidity >75% / <30%)
- Alerts are displayed immediately in the console
- Fully local setup, no Kafka Streams or external APIs required

## Docker Setup

1. Make sure Docker & Docker Compose are installed
2. Start Kafka & Zookeeper:

```
docker-compose up -d
```
3. Check containers: 
```
docker ps
```

## Intall Dependencies
```
npm install
```

## Run the Project
```
npm start
```
