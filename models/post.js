const mongoose = require('mongoose');
const Schema = mongoose.Schema;
	
const postSchema = new Schema({
    title: String,
    date_created: Date,
    info_small: String,
    info_full: String,
    image_link: String
});

module.exports = mongoose.model('Posts', postSchema);