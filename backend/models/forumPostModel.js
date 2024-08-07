const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const forumPostSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
    
}, {timestamps: true, collection: 'forums'});

module.exports = mongoose.model('forumPost',forumPostSchema);

