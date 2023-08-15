const Video = require('../models/Video');
const { tryCatch } = require('../utilities/tryCatch');
const { OK, SUCCESS } = require('../helpers/constants');
const {
	responseFormatter,
	responseCacher,
} = require('../helpers/helperFunctions');

exports.getVideosController = tryCatch(async (req, res, next) => {
	const { categoryId } = req.params;
	const result = await Video.find({ categoryId });
	const response = responseFormatter(OK, SUCCESS, result);
	responseCacher(req, res, response);
});

exports.newVideoController = tryCatch(async (req, res, next) => {
	// Video.syncIndexes();
	// To sync Model and MongoDB after unique is removed from a field
	const { body } = req;
	const result = await Video.create(body);
	const response = responseFormatter(OK, SUCCESS, result);
	res.json(response);
});

exports.updateVideoController = tryCatch(async (req, res, next) => {
	const { videoId, trailerId } = req.body;
	const result = await Video.updateOne({ id: videoId }, { trailerId });	
	const response = responseFormatter(OK, SUCCESS, result);
	res.json(response);
});

exports.newVideosController = tryCatch(async (req, res, next) => {
	// Video.syncIndexes();
	// To sync Model and MongoDB after unique is removed from a field
	const { body } = req;
	const result = await Video.insertMany([...body]);
	const response = responseFormatter(OK, SUCCESS, result);
	res.json(response);
});

