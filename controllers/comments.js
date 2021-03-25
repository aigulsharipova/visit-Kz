const comments = require("../models/comments");
const users = require("../models/users");
const argon2 = require('argon2');

exports.add = function (req, res) {
    users.findOne({'login' : JSON.parse(localStorage.getItem('user_info')).login}, function (err, data) {
        if (data)
        {
            comments.create({
                comment: req.body.comment,
                date: new Date().toISOString().slice(0, 16),
                postID: req.params.id,
                createdBy: data._id
            }, function(err, data) {
                res.redirect(`/posts/${req.params.id}`);
            });
        }
    });
}

exports.delete = function (req, res) {
    comments.deleteOne({
        _id: req.params.id
    }, function () {
        res.redirect(req.get('referer'));
        // res.redirect('/posts');
    });
}