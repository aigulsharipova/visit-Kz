const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || '3000';

const app = express();
require('./config/database');

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});

const indexRouter = require("./routes/index");
const postsRouter = require("./routes/posts");
const usersRouter = require("./routes/users");
const commentsRouter = require("./routes/comments");

app.use("/", indexRouter);
app.use("/posts", postsRouter);
app.use("/users", usersRouter);
app.use("/comments", commentsRouter);