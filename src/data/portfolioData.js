// Portfolio Data - Easy to update and maintain
// Add new projects, skills, achievements, etc. here

export const personalInfo = {
  name: "Srinath Badaveni",
  title: "Full-Stack Developer",
  subtitle: "Building Scalable Web Applications with React, Node.js, and the MERN Stack",
  bio: "Computer Science student passionate about crafting elegant solutions to complex problems",
  location: "Hyderabad, Telangana, India",
  email: "badavenisrinath@gmail.com",
  phone: "+91 9059875072",
  availability: "Currently available for internships and freelance projects",
  profileImage: "/images/profile/profile.jpg",
  
  social: {
    github: "https://github.com/srinathbadaveni",
    linkedin: "https://linkedin.com/in/srinath-badaveni-9220782a2",
  }
};

export const education = [
  {
    id: 1,
    institution: "TKR College of Engineering and Technology",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Aug 2023 – Apr 2027",
    grade: "CGPA: 8.3/10",
    location: "Hyderabad, Telangana",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    institution: "TS Model School and Junior College",
    degree: "Intermediate (MPC)",
    period: "Jun 2021 – Mar 2023",
    grade: "Score: 90.8%",
    location: "Telangana",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    institution: "TS Model School Namapur",
    degree: "SSC",
    period: "2021",
    grade: "CGPA: 10.0/10",
    location: "Telangana",
    gradient: "from-emerald-500 to-teal-500"
  }
];

export const projects = [
  {
    id: 1,
    title: "CareConnect",
    subtitle: "Healthcare Management Platform",
    date: "Jan 2025",
    description: "Built a full-stack healthcare platform with role-based dashboards for patients, doctors, pharmacies, and admins, featuring real-time communication, AI-powered diagnosis, and appointment management",
    impact: "Multi-role healthcare ecosystem with real-time features",
    features: [
      "Role-based access control with JWT authentication and OTP verification",
      "Real-time communication using Socket.IO and WebSockets",
      "AI-powered symptom diagnosis using Python ML (Random Forest)",
      "Appointment scheduling and prescription management system",
      "Pharmacy onboarding with inventory tracking",
      "Secure RESTful APIs with Helmet, rate limiting, and input validation"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Python", "JWT", "Tailwind CSS"],
    skills: ["Full-Stack Development", "REST APIs", "Authentication", "Real-Time Communication", "Machine Learning Integration", "Role-Based Access Control"],
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    liveUrl: "https://medi-connect-1-4zf5.onrender.com/",
    githubUrl: "",
    image: "/images/projects/Care-connect.jpg"
  },
  {
    id: 2,
    title: "FinTrack",
    subtitle: "Personal Finance Application",
    date: "Mar 2025",
    description: "Developed a full-stack personal finance platform with budget tracking, expense categorization, and interactive visual dashboards, improving user spending insights by 35%",
    impact: "35% improvement in user spending insights",
    features: [
      "Secure and scalable RESTful APIs using Node.js and Express.js",
      "JWT-based authentication and authorization mechanisms",
      "Interactive visual dashboards with dynamic charts",
      "Reusable React component architecture",
      "MongoDB database with efficient data storage and retrieval"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    skills: ["Express.js", "Back-End Web Development", "Full-Stack Development", "REST APIs", "Authentication"],
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    liveUrl: "https://sri-fintrack.onrender.com/",
    githubUrl: "",
    image: "/images/projects/fintrack.jpg"
  },
  {
    id: 3,
    title: "RideShare",
    subtitle: "Innovative Ride Solutions",
    date: "Sep 2024 - Oct 2024",
    description: "Engineered a real-time seat selection system using WebSockets for instant synchronization across multiple user devices, eliminating booking conflicts. Features real-time ride matching, automatic deletion of expired rides, and carbon footprint tracking.",
    impact: "25% faster database lookups with strategic indexing",
    features: [
      "Real-Time Ride Matching with minimal wait times",
      "Real-Time Seat Updates using WebSockets",
      "Automatic Deletion of Expired Rides",
      "GPS tracking and emergency assistance",
      "Carbon Footprint Tracking for eco-friendly choices",
      "Mobile-first responsive design with optimized accessibility"
    ],
    tech: ["Express.js", "Node.js", "WebSockets", "MongoDB", "Bootstrap", "Real-Time Tracking"],
    skills: ["Express.js", "Real Time Tracking", "Back-End Web Development", "Nodejs", "Bootstrap (Framework)", "Web Applications"],
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    liveUrl: "https://ride-share-mqg3.onrender.com",
    githubUrl: "",
    image: "/images/projects/rideshare.jpg"
  },
  {
    id: 4,
    title: "Tourist Places",
    subtitle: "Integrated with Database",
    date: "Aug 2024 - Sep 2024",
    description: "Developed a dynamic website showcasing tourist destinations using Node.js, integrated with a database for efficient data management. Features search functionality, user reviews section, and real-time data updates.",
    impact: "Seamless server-database integration",
    features: [
      "Search functionality for tourist locations",
      "User reviews section with real-time updates",
      "Database integration for efficient data management",
      "Responsive layouts with Bootstrap",
      "Real-time data updates on various tourist locations"
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "SQL", "Bootstrap", "REST APIs"],
    skills: ["Express.js", "SQL", "Full-Stack Development", "Back-End Web Development", "Nodejs", "REST APIs", "MongoDB"],
    gradient: "from-purple-400 via-pink-500 to-rose-600",
    liveUrl: "",
    githubUrl: "",
    image: "/images/projects/tourist-places.jpg"
  },
  {
    id: 5,
    title: "Movies Hub",
    subtitle: "Trending Movies Application",
    date: "Aug 2024",
    description: "Built using React.js and Tailwind CSS, delivering a seamless and visually appealing experience. Features auto-changing banner, watchlist with rating filters, dynamic search, and popularity metrics.",
    impact: "40% faster page load times with optimized rendering",
    features: [
      "Auto-changing banner showcasing trending movies",
      "Watchlist page with filter by rating",
      "Dynamic search field for quick discovery",
      "Real-time updates on popular films",
      "Responsive design across all devices",
      "Third-party API integration for live movie data"
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    skills: ["Cascading Style Sheets (CSS)", "JavaScript", "React JS", "HTML5", "Tailwind CSS"],
    gradient: "from-fuchsia-400 via-pink-500 to-rose-600",
    liveUrl: "https://trendingmovies-xcur.onrender.com/",
    githubUrl: "",
    image: "/images/projects/movies-hub.jpg"
  },
  {
    id:6,
    title: "Rock Paper Scissors",
    subtitle: "Interactive Game",
    date: "Jan 2024",
    description: "Classic rock-paper-scissors game built with vanilla JavaScript, HTML, and CSS. Features smooth animations and score tracking.",
    impact: "Enhanced JavaScript fundamentals",
    features: [
      "Interactive gameplay with smooth animations",
      "Score tracking system",
      "Responsive design",
      "Clean UI with modern styling"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    skills: ["HTML", "Cascading Style Sheets (CSS)", "JavaScript"],
    gradient: "from-orange-400 via-red-500 to-pink-600",
    liveUrl: "",
    githubUrl: "",
    image: "/images/projects/rock-paper-scissors.jpg"
  },
  {
    id: 7,
    title: "Amazon Home Page Clone",
    subtitle: "Frontend Clone",
    date: "Nov 2023 - Dec 2023",
    description: "Pixel-perfect clone of Amazon's homepage using HTML and CSS, demonstrating attention to detail and CSS mastery.",
    impact: "Mastered advanced CSS layouts",
    features: [
      "Pixel-perfect design replication",
      "Responsive layout",
      "Advanced CSS techniques",
      "Clean, semantic HTML"
    ],
    tech: ["HTML", "CSS", "HTML5"],
    skills: ["HTML", "Cascading Style Sheets (CSS)", "HTML5"],
    gradient: "from-yellow-400 via-orange-500 to-red-600",
    liveUrl: "",
    githubUrl: "",
    image: "/images/projects/amazon-clone.jpg"
  }
];

export const skills = {
  languages: [
    { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600" },
    { name: "Python", level: 80, color: "from-blue-400 to-blue-600" },
    { name: "Java", level: 75, color: "from-red-400 to-red-600" },
    { name: "C++", level: 70, color: "from-purple-400 to-purple-600" }
  ],
  frontend: [
    "React.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Responsive Design",
    "AJAX"
  ],
  backend: [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "WebSockets",
    "JWT Authentication"
  ],
  databases: [
    "MongoDB",
    "SQL",
    "Database Design",
    "Query Optimization"
  ],
  tools: [
    "Git/GitHub",
    "VS Code",
    "Postman",
    "Oracle Cloud",
    "npm"
  ],
  competencies: [
    "Data Structures & Algorithms",
    "System Design & Architecture",
    "Debugging & Optimization",
    "SEO Best Practices",
    "Team Collaboration",
    "Agile Workflows"
  ]
};

export const achievements = [
  {
    id: 1,
    title: "2x Coding Champion",
    description: "Secured 1st place twice in competitive programming competitions",
    year: "2024",
    icon: "award"
  },
  {
    id: 2,
    title: "Rank 92 - DSA CodeVerse",
    description: "Achieved Rank 92 in DSA CodeVerse Contest #7 among hundreds of participants",
    year: "2024",
    icon: "trophy"
  },
  {
    id: 3,
    title: "200+ DSA Problems",
    description: "Solved 200+ Data Structures and Algorithms problems on NXT Wave platform",
    year: "2024",
    icon: "code"
  },
  {
    id: 4,
    title: "Open Source Contributor",
    description: "Active contributor to open-source projects, collaborating with global developers",
    year: "2024",
    icon: "globe"
  }
];

export const certifications = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    year: "2025"
  },
  {
    id: 2,
    title: "Front End Development Certification",
    issuer: "Advanced React.js & JavaScript",
    year: "2024"
  },
  {
    id: 3,
    title: "Cloud Foundations Certification",
    issuer: "Core cloud computing principles and practices",
    year: "2024"
  },
  {
    id: 4,
    title: "React JS Certification",
    issuer: "Professional Certification",
    year: "2024"
  }
];

export const timeline = [
  {
    year: "2025",
    events: [
      "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      "FinTrack Application Launch",
      "Front End Development Certification"
    ],
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    year: "2024",
    events: [
      "Ride Share Platform Launch",
      "1st Place - Coding Competition (2x)",
      "Rank 92 - DSA CodeVerse Contest #7",
      "Movies Hub & Tourist Places Applications",
      "Cloud Foundations Certification",
      "Open Source Contributions"
    ],
    gradient: "from-blue-500 to-purple-600"
  },
  {
    year: "2023",
    events: [
      "Started B.Tech in Computer Science",
      "Completed Intermediate - 90.8%",
      "200+ DSA Problems Milestone",
      "Amazon Clone Project"
    ],
    gradient: "from-purple-500 to-pink-600"
  },
  {
    year: "2021",
    events: [
      "SSC - Perfect 10.0 CGPA"
    ],
    gradient: "from-pink-500 to-rose-600"
  }
];

export const stats = [
  { number: "200+", label: "DSA Problems Solved", gradient: "from-cyan-500 to-blue-600" },
  { number: "6", label: "Production Apps", gradient: "from-blue-500 to-purple-600" },
  { number: "2x", label: "Competition Winner", gradient: "from-purple-500 to-pink-600" },
  { number: "8.3", label: "CGPA", gradient: "from-pink-500 to-rose-600" }
];

export const availableFor = [
  "Web Development Internships",
  "Freelance Projects",
  "Open Source Collaborations",
  "Technical Consulting"
];

export const currentFocus = [
  "🎓 Pursuing B.Tech in Computer Science (CGPA: 8.3)",
  "💻 Building full-stack applications with MERN stack",
  "🤝 Contributing to open-source projects",
  "☁️ Exploring cloud technologies and generative AI",
  "🏆 Competing in coding challenges",
  "📚 Mastering DSA (200+ problems solved)"
];
