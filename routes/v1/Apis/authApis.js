const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const authService = require('../../../services/authService');
const { loginRequired } = require('../../../middlewares/authMiddleware');

const register = async function (req, res, next) {
    try {
        let newUser = await authService.initiateRegister(req.body);
        return res.json(newUser);
    } catch (err) {
        next(res.json(err.message));
    }
}

const signIn = async function (req, res, next) {
    try {
        let authUser = await authService.initiateSignIn(req.body);
        if (!authUser || !authUser.comparePassword(req.body.password)) {
            return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }
        return res.json({
            token: jwt.sign(
                {
                    email: authUser.email,
                    userName: authUser.userName,
                    _id: authUser._id
                }, 'ATTENDANCERESTFULAPIs'
            )
        });
    } catch (err) {
        next(res.json(err.message));
    }
}

const profile = function(req, res, next) {
    if (req.user) {
        res.send(req.user);
        next();
    } else {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

router.post('/register', register);
router.post('/sign_in', signIn);
router.get('/profile', loginRequired, profile);

module.exports = router;