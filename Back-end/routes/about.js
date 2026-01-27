const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

// GET /api/about - Get about information
router.get('/', aboutController.getAboutInfo);

module.exports = router;