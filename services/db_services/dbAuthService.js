const bcrypt = require('bcrypt');
const User = require('./models/User');

const register = async function (req) {
    const newUser = new User(req);
    newUser.hash_password = bcrypt.hashSync(req.password, 10);

    return newUser.save();
}

const signIn = async function (req) {
    return User.findOne({
        email: req.email
    }).populate('teams');
}

module.exports = {
    register,
    signIn
}