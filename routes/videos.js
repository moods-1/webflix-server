const router = require('express').Router();
const auth = require('../middleware/auth');
const {
	getVideosController,
	newVideosController,
	updateVideoController
} = require('../controllers/videosController');

// GET
router.get('/:categoryId', getVideosController);

// POST
router.post('/new-video', newVideosController);

// PATCH
router.put('/update-video', updateVideoController);

module.exports = router;
