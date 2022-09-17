const { kafka } = require("../../../../config/kafka");


const kafkaAdmin = async () => {
    try {
        const admin = kafka.admin();
        await admin.connect();

        await admin.createTopics({
            topics: [{
                topic: 'topic_name',
                numPartitions: 2
            }]
        });
    } catch (error) {
        console.error(error);
    };
};

module.exports = {
    kafkaAdmin,
}