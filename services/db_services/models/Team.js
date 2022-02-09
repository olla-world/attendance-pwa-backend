const { model, Schema } = require('mongoose');

const TeamSchema = new Schema({
    teamName: {
        type: String,
        required: true,
        trim: true,
    },
    ipAddress:{
        type: String,
        trim: true,
        required:true
    },
    admin: {
        type: Schema.ObjectId,
        ref: 'User',
        required:true
    },
    members: [{
        type: Schema.ObjectId,
        ref: 'User',
        required: false,
        unique: true
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Team', TeamSchema);