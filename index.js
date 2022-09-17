Promise = require('bluebird');
const { port, env } = require('./src/config/vars.js');
const app = require('./src/config/express');

app.listen(port, () => console.log(`server started on port ${port} (${env})`));

module.exports = app;
