const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const options = {
    type: String
};

const options2 = {
    type: Date
};


const UserSchema = new Schema({
    avatar: options,
    email: options,
    photo: options,
    password: options,
    role: options,
    online: options,
    created_at: options2
});


module.exports = mongoose.model('User', UserSchema);