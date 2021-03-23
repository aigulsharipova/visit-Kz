const express = require('express');
const morgan = require('morgan');
const port = 3000; 
require('./config/database');

const indexRouter = require('./routes/index');
const visitRouter = require('./routes/visit');
const reviewsRouter = require("./routes/reviews");

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/', visitRouter);
app.use('/', indexRouter);

app.listen(3000, function() {
    console.log(`Express is listening on port:${port}`);
});