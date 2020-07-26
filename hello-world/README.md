## 👋🏼 Hello World
Basic implementation of RabbitMQ where we have two different services:

* A consumer that **receives** messages and prints them out
* A producer that **produces** a message

<img src="https://www.rabbitmq.com/img/tutorials/python-one.png">

### Usage
Run RabbitMQ container
```bash
docker-compose up
```

Install dependencies
```bash
npm install
```

Init consumer
```bash
npm run consumer <QUEUE>
```

Send a message with a producer

```bash
npm run producer <MESSAGE> <QUEUE>
```