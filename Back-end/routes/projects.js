const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

// GET /api/projects - Get all projects
router.get('/', projectsController.getAllProjects);

// GET /api/projects/featured/list - Get featured projects
router.get('/featured/list', projectsController.getFeaturedProjects);

// GET /api/projects/:id - Get project by ID
router.get('/:id', projectsController.getProjectById);

module.exports = router;