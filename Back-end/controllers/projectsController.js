const projectsData = require('../models/projectsData');

// Get all projects
exports.getAllProjects = (req, res) => {
  try {
    res.json({
      success: true,
      count: projectsData.length,
      data: projectsData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching projects',
      error: error.message
    });
  }
};

// Get project by ID
exports.getProjectById = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const project = projectsData.find(p => p.id === id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }
    
    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching project',
      error: error.message
    });
  }
};

// Get featured projects
exports.getFeaturedProjects = (req, res) => {
  try {
    const featured = projectsData.filter(p => p.featured);
    
    res.json({
      success: true,
      count: featured.length,
      data: featured
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching featured projects',
      error: error.message
    });
  }
};