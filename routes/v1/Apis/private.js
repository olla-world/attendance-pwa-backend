const express = require('express');
const router = express.Router();
const userApis = require('./userApis');
const authApis = require('./authApis');
const teamApis = require('./teamApis');

router.use('/user', userApis);
router.use('/auth', authApis);
router.use('/team', teamApis);

module.exports = router;