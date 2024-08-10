const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const typeRecordSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required:true
    },
    wpm:{
        type: Number,
        required: true
    },
    elapsed_time:{
        type: Number,
        required: true
    },
    word_bank:{
        type: String,
        required: true
    }
}, {timestamps: true, collection: 'typeRecords'});

module.exports = mongoose.model('TypeRecord',typeRecordSchema);

