const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const options = {
    type: String
};


const fruitSchema = new Schema({
    name: options
});


module.exports = mongoose.model('Fruit', fruitSchema);