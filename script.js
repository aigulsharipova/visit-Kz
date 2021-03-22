// Require modules
const express = require('express');
const morgan = require('morgan');
const port = 3000; 

// Set up express app
const app = express();

// Connect to DB


// Configure the app with app.set()
app.set('view engine', 'ejs');

// Mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Mount routes with app.use()

// Tell App to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});