const aboutData = require('../models/aboutData');

// Get about information
exports.getAboutInfo = (req, res) => {
  try {
    res.json({
      success: true,
      data: aboutData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching about information',
      error: error.message
    });
  }
};