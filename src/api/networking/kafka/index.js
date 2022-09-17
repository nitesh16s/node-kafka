const { kafkaProducer } = require('./config/producer')
const { kafkaConsumer } = require('./config/consumer');


const kafkaController = async ({ key, value }) => {
    try {
        // producer 
        await kafkaProducer(key, value);
        // consumer
        await kafkaConsumer();
        return true;
    } catch (error) {
        console.log(error);
        throw error;
    };
};

module.exports = {
    kafkaController
};
