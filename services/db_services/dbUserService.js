const User = require('./models/User');
const { findBy } = require('./../../utils/findByConditions');

const getUser = async function (query) {
    let { email } = query;

    const allUsers = User
        .find({ "email": findBy(email) })
        .populate('teams')
        .then(users => users)
        .catch(err => console.log(err));
    
    return allUsers;
}

const getUserTeam = async function (params) {
    let { userId } = params;

    const teams = User
        .findById(userId)
        .select('teams')
        .populate('members')
        .populate('admin')
        .then(teams => teams)
        .catch(err => console.log(err));
    
    return teams;
}

module.exports = {
    getUser,
    getUserTeam
}
