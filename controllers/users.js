const users = require("../models/users");
const argon2 = require('argon2');

exports.reg = function (req, res) {

    console.log(req.body);

}

exports.index = function (req, res) {
    res.render('reg_page', {
        title: "Login Page"
    });
}


const hashPass = async (pass) => {
    if (!pass && !pass.trim())
    {
        return;
    }

    pass = pass.trim();
    const res = await argon2.hash(pass);

    return res;
}