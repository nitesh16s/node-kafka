const express = require('express');
const ourRoutes = require('./our.routes');

const router = express.Router();

router.use('/our', ourRoutes);


module.exports = router;