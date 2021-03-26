const posts = require("../models/post");
const comments = require("../models/comments");
const users = require("../models/users");
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
        res.render("posts", {
            render: data,
            header_info: {
                'user_info' : user_info,
                'logged' : logged
            }
        });
    });
}

exports.add = function (req, res) {
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

    res.render("post_add", {
        header_info: {
            'user_info' : user_info,
            'logged' : logged
        },
        type: 'add'
    });
}

exports.createPost = function (req, res) {
    posts.create({
        title: req.body.post_title,
        date_created: new Date().toISOString().slice(0, 16),
        info_small : req.body.post_small,
        info_full : req.body.post_full,
        image_link : req.body.post_image
    });

    res.redirect('/');
}

exports.showOne = function (req, res) {
    console.log(req.query);
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

    posts.findById(req.params.id, function (err, data) {
        comments.find({}, function(err2, data2) {
            let usersIDs = [];

            for (let i=0; i<data2.length; i++)
            {
                usersIDs.push(data2[i].createdBy);
            }
            
            users.find({
                '_id' : {
                    $in: usersIDs
                }
            }, function (err3, data3) {
                let usersArr = {};
                
                for (let i=0; i<data3.length; i++)
                {
                    usersArr[data3[i]._id]=data3[i].login;
                }

                let show_type = 'show';
                let comment_one = '';

                if (req.query && req.query.action === 'edit_comment')
                {
                    show_type = 'edit';
                    comment_one = req.query.comment;
                }

                res.render("post_one", {
                    element: data,
                    header_info: {
                        'user_info' : user_info,
                        'logged' : logged
                    },
                    comments: data2,
                    usersObj: usersArr,
                    edit_comment: {
                        type: show_type,
                        comment: comment_one
                    },
                    storage: localStorage
                });
            });
        });
    });


}

exports.delete = function (req, res) {
    posts.deleteOne({
        _id: req.params.id
    }, function () {
        res.redirect('/posts');
    });
}

exports.edit = function (req, res) {
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

    posts.findById(req.params.id, function(err, data) {
        res.render("post_add", {
            header_info: {
                'user_info' : user_info,
                'logged' : logged
            },
            type: 'edit',
            item: data
        });
    });
}

exports.save = function (req, res) {
    posts.findByIdAndUpdate(req.params.id, {title: req.body.post_title_edit, info_small: req.body.post_small_edit, info_full: req.body.post_full_edit, image_link: req.body.post_image_edit}, function(err, result) {
        res.redirect("/posts");
    });
}