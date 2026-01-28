const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Email configuration
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Mock data - veritabanı yerine
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Angular ve Node.js ile oluşturulmuş tam özellikli e-ticaret platformu',
    image: 'assets/projects/ecommerce.jpg',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Bootstrap'],
    link: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'React ve Firebase ile yapılmış görev yönetimi uygulaması',
    image: 'assets/projects/task-app.jpg',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    link: '#'
  }
];

const skills = [
  { name: 'Angular', level: 90, category: 'Frontend' },
  { name: 'React', level: 85, category: 'Frontend' },
  { name: 'TypeScript', level: 88, category: 'Frontend' },
  { name: 'Node.js', level: 82, category: 'Backend' },
  { name: 'MongoDB', level: 78, category: 'Backend' },
  { name: 'PostgreSQL', level: 75, category: 'Backend' }
];

const aboutInfo = {
  name: 'Aras Dizici',
  title: 'Full Stack Web Developer',
  bio: 'Ben, 3+ yıllık deneyime sahip bir Full Stack Web Developer\'ım.',
  email: 'aras@example.com',
  phone: '+90 XXX XXX XXXX'
};

// GET /api/projects
router.get('/projects', (req, res) => {
  try {
    res.json({
      success: true,
      data: projects
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Projeler yüklenemedi',
      error: error.message
    });
  }
});

// GET /api/skills
router.get('/skills', (req, res) => {
  try {
    res.json({
      success: true,
      data: skills
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Yetenekler yüklenemedi',
      error: error.message
    });
  }
});

// GET /api/about
router.get('/about', (req, res) => {
  try {
    res.json({
      success: true,
      data: aboutInfo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Hakkımda bilgisi yüklenemedi',
      error: error.message
    });
  }
});

// POST /api/contact - İletişim formu
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Tüm alanlar gereklidir'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Geçerli bir email adresi giriniz'
      });
    }

    // Email gönderme
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
        subject: `Yeni İletişim: ${subject}`,
        html: `
          <h3>Yeni İletişim Mesajı</h3>
          <p><strong>Ad:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Konu:</strong> ${subject}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${message}</p>
        `
      });
    }

    res.json({
      success: true,
      message: 'Mesajınız başarıyla gönderildi'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Mesaj gönderilemedi',
      error: error.message
    });
  }
});

// GET /api - test endpoint
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API is working',
    endpoints: [
      'GET /api/projects',
      'GET /api/skills',
      'GET /api/about',
      'POST /api/contact'
    ]
  });
});

module.exports = router;