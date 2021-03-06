const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    avatar: String
});


const User = model('User', UserSchema);

module.exports = {
    User
}