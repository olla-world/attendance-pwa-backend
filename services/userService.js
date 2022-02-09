const dbService = require('./db_services/dbServiceInitiator');

const initiateGetUser = async function (req) {
    const users = await dbService.getUser(req.query);

    return users
}

module.exports = {
    initiateGetUser
}