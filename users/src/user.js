
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//mongoose.set('debug', true);

const UserSchema = new Schema({
    name: String
});

const User = mongoose.model('user', UserSchema);

module.exports = User;