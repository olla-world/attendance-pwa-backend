const express = require('express');
const router = express.Router();

const userService = require('../../../services/userService');
const { loginRequired } = require('../../../middlewares/authMiddleware');

const getUser = async function (req, res, next) {
    try {
        const user = await userService.initiateGetUser(req);
        res.json(user);
    } catch (err) {
        next(err);
    }
}

router.get('/', loginRequired, getUser);

module.exports = router;