const { kafka } = require('../../../../config/kafka');

const kafkaProducer = async (key, value) => {
    try {
        const producer = kafka.producer();
        await producer.connect();
        const result = await producer.send({
            acks: -1,
            topic: 'topic_name',
            messages: [
                { key: key, value: value },
            ],
        });
        // await producer.disconnect();
        return result;
    } catch (error) {
        console.error(error);
    };
};


module.exports = {
    kafkaProducer,
};