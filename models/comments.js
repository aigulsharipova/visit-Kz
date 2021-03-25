const mongoose = require('mongoose');
const Schema = mongoose.Schema;
	
const commentsSchema = new Schema({
    comment: String,
    date: Date,
    postID: mongoose.ObjectId,
    createdBy: mongoose.ObjectId
});

module.exports = mongoose.model('Comments', commentsSchema);