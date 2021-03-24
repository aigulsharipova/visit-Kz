const express = require('express');
const morgan = require('morgan');
const port = 3000;

const app = express();
require('./config/database');

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const adminRouter = require("./routes/admin");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);