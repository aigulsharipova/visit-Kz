const comments = require("../models/comments");
const users = require("../models/users");
const posts = require("../models/post");
const argon2 = require('argon2');
const LocalStorage = require('node-localstorage').LocalStorage;

localStorage = new LocalStorage('./scratch');

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
        if (req.get('referer').includes('?'))
        {
            res.redirect(req.get('referer').slice(0, req.get('referer').indexOf('?')));
        }
        else {
            res.redirect(req.get('referer'));
        }
    });
}

exports.edit = function (req, res) {
    if (req.body.comment_edit && req.body.comment_edit.trim())
    {
        comments.findByIdAndUpdate(req.params.id, {comment: req.body.comment_edit.trim()}, function(err, result) {
            res.redirect(req.get('referer').slice(0, req.get('referer').indexOf('?')));
        });
    }
    else {
        res.redirect(req.get('referer').slice(0, req.get('referer').indexOf('?')));
    }
}