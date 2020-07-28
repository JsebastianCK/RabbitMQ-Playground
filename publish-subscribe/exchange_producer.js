const amqp = require('amqplib/callback_api');
const config = require('./config');

amqp.connect(config.rabbitMqConn, function(error0, connection) {

    if(error0)
        console.log(error0);

    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        let exchange = process.argv[3] || 'default';
        let msg = process.argv[2] || 'default';
    
        channel.assertExchange(exchange, 'fanout', {
            durable: false
        });
    
        channel.publish(exchange, '', Buffer.from(msg));

        console.log(" [x] Sent %s", msg);
    });

    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});