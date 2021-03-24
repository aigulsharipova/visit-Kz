const mongoose = require('mongoose');
const Schema = mongoose.Schema;
	
const usersSchema = new Schema({
    login: String,
    name: String,
    password: String,
    lastname: String,
    // date_reg: Date
});

module.exports = mongoose.model('Users', usersSchema);