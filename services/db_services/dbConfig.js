const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const dbConfigValues = require('../../config/config_values');

mongoose.plugin(beautifyUnique);
const db = mongoose.connect(dbConfigValues.dbConString, { useNewUrlParser: true })

module.exports = {
    db
}