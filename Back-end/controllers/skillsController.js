const skillsData = require('../models/skillsData');

// Get all skills
exports.getAllSkills = (req, res) => {
  try {
    res.json({
      success: true,
      data: skillsData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching skills',
      error: error.message
    });
  }
};

// Get skills by category
exports.getSkillsByCategory = (req, res) => {
  try {
    const { category } = req.params;
    
    if (!skillsData[category]) {
      return res.status(404).json({
        success: false,
        message: 'Category not found'
      });
    }
    
    res.json({
      success: true,
      category: category,
      data: skillsData[category]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching skills category',
      error: error.message
    });
  }
};