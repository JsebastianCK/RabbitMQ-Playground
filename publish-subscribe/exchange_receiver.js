const amqp = require('amqplib/callback_api');
const config = require('./config');

amqp.connect(config.rabbitMqConn, function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        let exchange = process.argv[2] || 'default';

        channel.assertExchange(exchange, 'fanout', {
            durable: false
        });

        channel.assertQueue('', {durable: true}, handleMessageReceived(channel, exchange));
    });
});

const handleMessageReceived = (channel, exchange) => (err, q) => {
    if (err) {
        throw err;
    }
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
    channel.bindQueue(q.queue, exchange, '');

    channel.consume(q.queue, function(msg) {
        if (msg.content) {
            console.log(" [x] %s", msg.content.toString());
        }
    }, {
        noAck: true
    });
}