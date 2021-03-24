const users = require("../models/users");
const posts = require("../models/post");

exports.index = function (req, res) {

    res.render('admin', {
        admin: {
            logged: true
        }
    });

}