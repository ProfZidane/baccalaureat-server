const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const options = {
    type: String
};

const options2 = {
    type: Boolean
};

const options3 = {
    type: Number
};

const simpleGameSchema = new Schema({
    letter: options,
    state: options2,
    score: options3,
    town : {
        state: options2,
        data: options
    },
    country : {
        state: options2,
        data: options
    },
    fruit : {
        state: options2,
        data: options
    },
    occupation: {
        state: options2,
        data: options
    },
    nameMal : {
        state: options2,
        data: options
    },
    nameFemale : {
        state: options2,
        data: options
    },
    player: options,
    created_at: options
});


module.exports = mongoose.model('SimpleGame', simpleGameSchema);