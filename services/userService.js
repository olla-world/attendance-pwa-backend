const dbService = require('./db_services/dbServiceInitiator');

const initiateGetUser = async function (req) {
    const user = await dbService.getUser(req.query);

    return user;
}

const initiateGetUserTeam = async function (req) {
    const team = await dbService.getUserTeam(req.query)
}

module.exports = {
    initiateGetUser,
    initiateGetUserTeam
}