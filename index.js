require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const { join } = require('path');
const { errorHandler } = require('./middleware/errorHandler');
const videosRoutes = require('./routes/videos');

const app = express();
const PORT = process.env.PORT || 8088;
require('./db')();

app.use(
	cors({
		origin: '*',
	})
);

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, 'public')));

// Routes
app.use('/api/videos', videosRoutes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
