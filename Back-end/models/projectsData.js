const projectsData = [
  {
    id: 1,
    title: "E-Commerce REST API",
    description: "Scalable e-commerce backend with authentication, payment integration, and order management",
    longDescription: "Full-featured e-commerce backend built with Node.js and Express. Includes JWT authentication, Stripe payment integration, inventory management, order tracking, and admin dashboard API.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    category: "backend",
    featured: true,
    github: "https://github.com/yourusername/ecommerce-api",
    demo: "https://ecommerce-api-demo.com",
    image: "/images/ecommerce.jpg",
    date: "2024-01"
  },
  {
    id: 2,
    title: "Real-time Chat Application",
    description: "WebSocket-based chat app with rooms, private messaging, and file sharing",
    longDescription: "Real-time messaging platform using Socket.io and Redis for message queuing. Features include multiple chat rooms, direct messaging, typing indicators, online status, and file uploads.",
    technologies: ["Node.js", "Socket.io", "Redis", "MongoDB", "Express"],
    category: "fullstack",
    featured: true,
    github: "https://github.com/yourusername/chat-app",
    demo: "https://chat-app-demo.com",
    image: "/images/chat.jpg",
    date: "2024-02"
  },
  {
    id: 3,
    title: "Task Management API",
    description: "RESTful API for project and task management with team collaboration features",
    longDescription: "Comprehensive task management system with project boards, task assignments, comments, file attachments, and notifications. Built with clean architecture and extensive test coverage.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Docker", "Jest"],
    category: "backend",
    featured: true,
    github: "https://github.com/yourusername/task-api",
    demo: "https://task-api-demo.com",
    image: "/images/tasks.jpg",
    date: "2023-11"
  },
  {
    id: 4,
    title: "Social Media Backend",
    description: "Social networking API with posts, comments, likes, and friend system",
    longDescription: "Complete social media backend featuring user profiles, posts with media uploads, comment threads, like/reaction system, friend requests, and news feed algorithm.",
    technologies: ["Node.js", "Express", "MongoDB", "AWS S3", "Redis"],
    category: "backend",
    featured: false,
    github: "https://github.com/yourusername/social-api",
    demo: null,
    image: "/images/social.jpg",
    date: "2023-10"
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Weather forecasting app with data visualization and location search",
    longDescription: "Interactive weather dashboard consuming multiple weather APIs. Features include current conditions, 7-day forecast, weather maps, and location-based alerts.",
    technologies: ["React", "Node.js", "Express", "Chart.js", "Weather API"],
    category: "fullstack",
    featured: false,
    github: "https://github.com/yourusername/weather-app",
    demo: "https://weather-dashboard-demo.com",
    image: "/images/weather.jpg",
    date: "2023-09"
  },
  {
    id: 6,
    title: "Blog CMS API",
    description: "Content management system for blogs with markdown support and SEO optimization",
    longDescription: "Headless CMS for blog management with markdown editor, image optimization, tagging system, SEO metadata, and draft/publish workflow.",
    technologies: ["Node.js", "Express", "MongoDB", "Markdown", "Sharp"],
    category: "backend",
    featured: false,
    github: "https://github.com/yourusername/blog-cms",
    demo: null,
    image: "/images/blog.jpg",
    date: "2023-08"
  }
];

module.exports = projectsData;