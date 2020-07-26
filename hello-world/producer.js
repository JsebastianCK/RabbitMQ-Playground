const amqp = require('amqplib/callback_api');
const config = require('./config');

amqp.connect(config.rabbitMqConn, function(error0, connection) {

    if(error0)
        console.log(error0);

    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        let queue = process.argv[3] || 'default';
        let msg = process.argv[2] || 'default';
    
        channel.assertQueue(queue, {
            durable: false
        });
    
        channel.sendToQueue(queue, Buffer.from(msg));

        console.log(" [x] Sent %s to %s", msg, queue);
    });

    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});