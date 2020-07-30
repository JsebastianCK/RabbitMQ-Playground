## 🎯 Routing

In this implementation we will deliver a message to **multiple** consumers just like in [🤝🏼 Publish and Subscribe](../publish-subscribe/) but with a little twist, being able to make it possible to subscribe only to a subset of the messages.

<img src="https://www.rabbitmq.com/img/tutorials/direct-exchange.png">
<img src="https://www.rabbitmq.com/img/tutorials/direct-exchange-multiple.png">

### Usage
Run RabbitMQ container
```bash
docker-compose up
```

Install dependencies
```bash
npm install
```

Init receiver (you can specify more than one subset separated by blank spaces)
```bash
npm run receive <SUBSET>
```

Send a message with a emitter
```bash
npm run emit <SUBSET> <MESSAGE>
```