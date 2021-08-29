const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const options = {
    type: String
};


const jobSchema = new Schema({
    name: options
});


module.exports = mongoose.model('Occupation', jobSchema);