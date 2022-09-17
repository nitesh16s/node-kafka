const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const morganMiddleware = require('./morganColor');
const helmet = require('helmet');
const webRoutes = require('../api/routes/index');
const expressValidation = require('express-validation');


const app = express();

// request logging. dev: console | production: file
app.use(morganMiddleware);

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount api v1 routes
app.use('/api/v1', webRoutes);

app.use(function (err, req, res, next) {
    if (err instanceof expressValidation.ValidationError) {
        return res.status(err.statusCode).json(err);
    };
    return res.status(500).json(err);
});


module.exports = app;
