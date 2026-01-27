const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skillsController');

// GET /api/skills - Get all skills
router.get('/', skillsController.getAllSkills);

// GET /api/skills/category/:category - Get skills by category
router.get('/category/:category', skillsController.getSkillsByCategory);

module.exports = router;