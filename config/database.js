const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.oc1n0.mongodb.net/movies?retryWrites=true&w=majority/movies', {
	useNewUrlParser: true, 
	useCreateIndex: true,
	useUnifiedTopology: true 
});