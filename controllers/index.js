const users = require("../models/users");

exports.index = function (req, res) {


    users.find({}, function(err, data) {
        console.log(data);
        res.render('index', {
            title: 'test'
        });
    })
}
