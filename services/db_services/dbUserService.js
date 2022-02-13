const User = require("./models/User");
const Team = require("./models/Team");

const { findBy } = require("./../../utils/findByConditions");

const getUser = async function (query) {
  let { email } = query;

  const allUsers = User.find({ email: findBy(email) })
    .populate("teams")
    .then((users) => users)
    .catch((err) => console.log(err));

  return allUsers;
};

const getUserTeam = async function (params) {
  let { userId } = params;

  const teams = User.findById(userId)
    .select("teams")
    .populate({
      path: "teams",
      populate: {
        path: "admin",
        model: User,
      },
      populate: {
        path: "members",
        model: User,
      },
    })
    .populate("teams.admin")
    .then((teams) => teams)
    .catch((err) => console.log(err));

  return teams;
};

module.exports = {
  getUser,
  getUserTeam,
};
