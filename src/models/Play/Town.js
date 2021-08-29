const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const options = {
    type: String
};


const townSchema = new Schema({
    name: options
});


module.exports = mongoose.model('Town', townSchema);