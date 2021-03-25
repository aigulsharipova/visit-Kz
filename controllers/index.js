const posts = require("../models/post");
const LocalStorage = require('node-localstorage').LocalStorage;

localStorage = new LocalStorage('./scratch');

exports.index = function (req, res) {
    let user_info;
    let logged;
    if (!localStorage.getItem('logged'))
    {
        logged = false;
    }
    else {
        logged = localStorage.getItem('logged');
    }

    if (!localStorage.getItem('user_info'))
    {
        user_info = {};
    }
    else {
        user_info = JSON.parse(localStorage.getItem('user_info'));
    }

    posts.find({}, function(err, data) {
        console.log(data);
        res.render("index", {
            render: data,
            logged: logged,
            user_info: user_info
        });
    });
}