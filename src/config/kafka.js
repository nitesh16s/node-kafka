const { Kafka, logLevel } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'kafka_clientId',
    brokers: ['kafka-broker:9092'],
    logLevel: logLevel.ERROR,
});

module.exports = {
    kafka,
};
