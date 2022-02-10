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

const getUserTeam = async function (req, res, next) {
    try {
        const team = await userService.initiateGetUserTeam(req);
        res.json(team);
    } catch (err) {
        next(err);
    }
}

router.get('/', loginRequired, getUser);

//user teams 
router.get('/team/:userId', loginRequired, getUserTeam);

module.exports = router;