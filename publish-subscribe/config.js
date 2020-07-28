require('dotenv').config();

module.exports =  config = {
    rabbitMqConn: `amqp://${process.env.RABBITMQ_URL || 'localhost'}`
}