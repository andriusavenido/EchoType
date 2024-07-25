const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const typeRecordSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    wpm:{
        type: Number,
        required: true
    },
    performance_string:{
        type: String,
        required: true
    },
    word_bank:{
        type: String,
        required: true
    }
}, {timestamps: true, collection: 'typeRecords'});

module.exports = mongoose.model('TypeRecord',typeRecordSchema);

