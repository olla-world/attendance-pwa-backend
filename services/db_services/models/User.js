const { model, Schema } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    hash_password: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.hash_password);
};

module.exports = model('User', userSchema);