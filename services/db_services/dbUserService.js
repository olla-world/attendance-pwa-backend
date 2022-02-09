const User = require('./models/User');
const { findBy } = require('./../../utils/findByConditions');

const getUser = async function (query) {
    let { email } = query;

    const allUsers = User
        .find({"email": findBy(email)})
        .then(users => users)
        .catch(err => console.log(err));
    
    return allUsers;
}

module.exports = {
    getUser
}