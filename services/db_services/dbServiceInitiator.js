const dbUserService = require('./dbUserService');
const dbAuthService = require('./dbAuthService');
const dbTeamService = require('./dbTeamService');

async function getUser(req) {
    return await dbUserService.getUser(req);
}

async function register(req) {
    return await dbAuthService.register(req);
}

async function signIn(req) {
    return await dbAuthService.signIn(req);
}

async function createTeam(req) {
    return await dbTeamService.create(req);
}

async function getTeams(req) {
    return await dbTeamService.get(req);
}

async function addMemberTeam(params, body) {
    return await dbTeamService.addMember(params, body);
}

async function updateMemberListTeam(params, body) {
    return await dbTeamService.updateMemberList(params, body);
}

module.exports = {
    getUser,
    register,
    signIn,
    createTeam,
    getTeams,
    addMemberTeam,
    updateMemberListTeam
}