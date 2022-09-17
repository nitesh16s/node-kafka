const { kafkaController } = require('../networking/kafka/index');

const ourController = async (req, res, next) => {
    try {
        await kafkaController(req.body);
        return res.json({ 'success': true });
    } catch (error) {
        console.error(error);
        return next(error);
    };
};


module.exports = {
    ourController,
};
