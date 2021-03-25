const users = require("../models/users");
const posts = require("../models/post");
const argon2 = require('argon2');
const LocalStorage = require('node-localstorage').LocalStorage;

localStorage = new LocalStorage('./scratch');

exports.reg = function (req, res) {
    // console.log(req.body);

    if (req.body.reg_login && req.body.reg_name && req.body.reg_lastname && req.body.reg_pass && req.body.reg_email)
    {
        hashPass(req.body.reg_pass).then(val => {
            users.create({
                login: req.body.reg_login.trim(),
                name: req.body.reg_name.trim(),
                email: req.body.reg_email.trim(),
                lastname: req.body.reg_lastname.trim(),
                password: val
            }, function(err, data) {
                localStorage.setItem('user_info', JSON.stringify({'login' : data.login}));
                localStorage.setItem('logged', true);

                res.redirect('/');
            });
        });
    }
}

exports.login = function (req, res) {
    if (req.body.reg_login && req.body.reg_pass)
    {
        users.findOne({
            login: req.body.reg_login.trim()
        }, async function(err, data) {
            if (data)
            {
                try {
                    let user_full = {};
    
                    if (await argon2.verify(data.password, req.body.reg_pass)) {
                        user_full = {
                            'login' : data.login
                        };
                        localStorage.setItem('user_info', JSON.stringify(user_full));
                        localStorage.setItem('logged', true);
                    }
                    else {
                        localStorage.removeItem('user_info');
                        localStorage.removeItem('logged');
                    }
                   
    
                    res.redirect("/");
                }
                catch (err) {
                    console.log(err);
                }
            }
            else {
                localStorage.removeItem('user_info');
                localStorage.removeItem('logged');
                res.redirect('/');
            }
        });
    }
}

exports.index = function (req, res) {
    res.render('reg_page', {
        logged: false,
        user_info: {}
    });
}


exports.logout = function (req, res) {
    localStorage.setItem('user_info', JSON.stringify({}));
    localStorage.removeItem('logged', false);

    res.redirect('/');
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