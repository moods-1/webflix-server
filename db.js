const mongoose = require('mongoose');
require('dotenv').config();

module.exports = function () {
	mongoose
		.set('strictQuery', true)
		.connect(process.env.MONGODB, {
			useNewUrlParser: true,
		})
		.then(() => console.log('MongoDB Connected'))
		.catch((err) => console.log(err));
};