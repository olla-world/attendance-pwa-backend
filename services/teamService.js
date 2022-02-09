const dbService = require('./db_services/dbServiceInitiator');

const initiateCreate = async function (req) {
    return await dbService.createTeam(req);
}

const initiateGet = async function (req) {
    const teams = await dbService.getTeams(req.query);
    return teams;
}

const initiateUpdateMemberList = async function (req) {
    const team = await dbService.updateMemberListTeam(req.params , req.body);
    return team;
}


module.exports = {
    initiateCreate,
    initiateGet,
    initiateUpdateMemberList
}