const express = require('express');
const router = express.Router();

const teamService = require('../../../services/teamService');
const { loginRequired } = require('../../../middlewares/authMiddleware');

const create = async function (req, res, next) {
    try {
        let newTeam = await teamService.initiateCreate(req);
        res.json(newTeam);        
    } catch (err) {
        next(res.json(err.message));
    }
}

const get = async function (req, res, next) {
    try {
        let teams = await teamService.initiateGet(req);
        res.json(teams);
    } catch (err) {
        next(err);
    }
}

const updateMemberList = async function (req, res, next) {
    try {
        let team = await teamService.initiateUpdateMemberList(req);
        res.json(team);
    } catch (err) {
        next(err);
    }
}

router.get('/', loginRequired, get);
router.post('/', loginRequired, create);

//team member
router.post('/update_member_list/:teamId', loginRequired, updateMemberList);

module.exports = router;