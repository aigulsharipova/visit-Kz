const mongoose = require('mongoose');
const Schema = mongoose.Schema;
	
const usersSchema = new Schema({
    login: { type : String , unique : true, required : true, dropDups: true },
    name: String,
    email: String,
    password: String,
    lastname: String,
    date_reg: Date
});

module.exports = mongoose.model('Users', usersSchema);