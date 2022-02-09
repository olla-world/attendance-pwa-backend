const config = require('./config');

const dbConString = config.MONGODB;
const dbSecretKey = config.SECRET_KEY;

module.exports = {
    dbConString,
    dbSecretKey
}