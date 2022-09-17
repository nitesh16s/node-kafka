const { kafka } = require('../../../../config/kafka');

const kafkaConsumer = async () => {
    try {
        const consumer = kafka.consumer({
            minBytes: 1,
            // maxWaitTimeInMs: 10000,
            // sessionTimeout: 10000,
            groupId: 'group_id'
        });
        
        await consumer.connect();
        await consumer.subscribe({
            topic: 'topic_name',
            fromBeginning: false
        });

        await consumer.run({
            // partitionsConsumedConcurrently: 3, // Default: 1
            eachMessage: async ({ topic, partition, message }) => {
                console.log(message.key.toString(), message.value.toString())
            },
        });
    } catch (error) {
        console.log(error);
        throw error;
    };
};


module.exports = {
    kafkaConsumer,
};
