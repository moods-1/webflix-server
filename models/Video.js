const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema(
	{
		adult: {
			type: Boolean,
			default: false,
		},
		backdropPath: {
			type: String,
			default: '',
		},
		categoryId: {
			type: Number,
		},
		firstAirDate: {
			type: String,
			default: '',
		},
		genreIds: [
			{
				type: Number,
			},
		],
		id: {
			type: Number,
		},
		name: {
			type: String,
			minlength: 2,
		},
		originalName: {
			type: String,
			default: '',
		},
		originalLanguage: {
			type: String,
			default: '',
		},
		originalTitle: {
			type: String,
			default: '',
		},
		originCountry: [
			{
				type: String,
			},
		],
		overview: {
			type: String,
			default: '',
		},
		popularity: {
			type: Number,
			default: 0,
		},
		posterPath: {
			type: String,
			default: '',
		},
		releaseDate: {
			type: String,
			default: '',
		},
		title: {
			type: String,
			minlength: 2,
		},
		video: {
			type: Boolean,
			default: false,
		},
		voteAverage: {
			type: Number,
			default: 0,
		},
		voteCount: {
			type: Number,
			default: 0,
		},
		imageSrc: {
			type: String,
			default: '',
		},
		mobileImg: {
			type: String,
			default: '',
		},
		desktopImg: {
			type: String,
			default: '',
		},
		trailerId: {
			type: String,
			default: '',
		},
	},
	{
		timestamps: true,
	}
);

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;
