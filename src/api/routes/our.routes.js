const express = require('express');
const controller = require('../controllers/our.controller');

const router = express.Router();

router
    .route('/kafka')
    .post(controller.ourController);


module.exports = router;