const dbService = require('./db_services/dbServiceInitiator');

const initiateRegister = async function (req) {
    return await dbService.register(req);
}

const initiateSignIn = async function (req) {
    return await dbService.signIn(req);
}

module.exports = {
    initiateRegister,
    initiateSignIn
}
