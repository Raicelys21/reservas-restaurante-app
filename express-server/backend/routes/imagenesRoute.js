const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imagenesController');

router.post('/upload', imageController.uploadImage);

module.exports = router;
