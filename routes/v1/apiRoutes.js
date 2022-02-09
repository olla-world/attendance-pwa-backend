const express = require('express');
const router = express.Router();
const v1PrivateRoutes = require('./Apis/private');

router.use('/private', v1PrivateRoutes);

module.exports = router;