const { v2 } = require('cloudinary');

v2.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.storeImage = async (data) => {
	const img = await v2.uploader.upload(data);
	return img.url;
};

exports.firstCap = (value) => {
	return value.charAt(0).toUpperCase() + value.slice(1);
};

exports.responseFormatter = (status, message, response) => ({
	status,
	message,
	response,
});

exports.responseCacher = (req, res, data) => {
	const type = req.method;
	if (type === 'GET') {
		return res
			.set('Cache-control', 'must-revalidate', 'public, max-age=86400')
			.json(data);
	}
	return res.json(data);
};

exports.mongoErrorFormatter = (err) => {
	if (err?.keyValue || err?.code) {
		const keyValue = Object.entries(err.keyValue)[0];
		const message = `The ${keyValue[0]} of '${keyValue[1]}' already exists.`;
		return message;
	} else if (err.message.includes('Path')) {
		const msg = err.message;
		const chopIndex = msg.indexOf('(');
		const roughError = msg.slice(chopIndex);
		return roughError.replaceAll(/[()]/g, '');
	} else {
		return err.message;
	}
};
