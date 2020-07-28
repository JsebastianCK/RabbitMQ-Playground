## 🤝🏼 Publish and Subscribe

In this implementation we will deliver a message to **multiple** consumers. This pattern is known as "publish/subscribe".
<img src="https://www.rabbitmq.com/img/tutorials/exchanges.png">

### Usage
Run RabbitMQ container
```bash
docker-compose up
```

Install dependencies
```bash
npm install
```

Init exchange receiver (you can try and run multiple instances!)
```bash
npm run receiver <EXCHANGE>
```

Send a message with a exchange producer

```bash
npm run producer <MESSAGE> <EXCHANGE>
```