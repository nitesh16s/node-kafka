require('dotenv').config();

module.exports = {
	env: process.env.ENV || 'development',
	port: process.env.PORT || '3000',
};