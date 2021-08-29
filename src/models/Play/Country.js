const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const options = {
    type: String
};


const countrySchema = new Schema({
    name: options
});


module.exports = mongoose.model('Countrie', countrySchema);