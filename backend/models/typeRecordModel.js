const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const typeRecordSchema = new Scheme({
    username:{
        type: String,
        required: true
    },
    user_id:{
        type: Number,
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
    map:{
        type: String,
        required: true
    }
});