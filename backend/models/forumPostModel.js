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
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 5 * 60 // TTL of 5 minutes (300 seconds)
    }
    
}, {timestamps: true, collection: 'forums'});

module.exports = mongoose.model('forumPost',forumPostSchema);

