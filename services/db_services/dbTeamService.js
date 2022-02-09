const Team = require('./models/Team');
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

    const arrayAction = action === 'remove'?
        { $pull: { "members": userId } }
        : { $addToSet: { "members": userId } }

    const team = Team
        .findByIdAndUpdate(
            teamId,
            arrayAction,
            { new: true, useFindAndModify: false }
        ).then(team => team);
    
    return team;
}


module.exports = {
    create,
    get,
    updateMemberList
}