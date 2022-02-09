const Team = require('./models/Team');
const User = require('./models/User');

const { findBy } = require('./../../utils/findByConditions');

const create = async function (req) {
    const newTeam = new Team(req);
    return newTeam.save();
}

const get = async function (query) {
    let { teamName } = query; 
     
    const allTeams = Team
        .find({
            "teamName": findBy(teamName)
        })
        .populate('admin')
        .populate('members')
        .then(teams => teams)
        .catch(err => console.log(err));

    return allTeams;
}

const updateMemberList = async function (params, body) {
    const { teamId } = params;
    const { userId, action } = body;

    const arrayActionTeam = action === 'remove'?
        { $pull: { "members": userId } }
        : { $addToSet: { "members": userId } }
    
    const arrayActionUser = action === 'remove'?
        { $pull: { "teams": teamId } }
        : { $addToSet: { "teams": teamId } }

    const team = Team
        .findByIdAndUpdate(
            teamId,
            arrayActionTeam,
            { new: true, useFindAndModify: false }
        ).then(team => team);
    
    const user = User
        .findByIdAndUpdate(
            userId,
            arrayActionUser,
            { new: true, useFindAndModify: false }
        ).then(user=>user)
    
    return team;
}


module.exports = {
    create,
    get,
    updateMemberList
}