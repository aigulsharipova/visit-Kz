// Require modules
const express = require('express');
const morgan = require('morgan');
const port = 3000;
const indexRouter = require('./routes/index');
// ^-- requiring the indexRouter


// more code below...

// Mount Routes app.use()
app.use('/', indexRouter);
const postSchema = new mongoose.Schema({
    content: String
    });
module.exports = mongoose.model('Post', postSchema);
const Post = require('./models/post');
Post.create({content: 'Amazing post...'});