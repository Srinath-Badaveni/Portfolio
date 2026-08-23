// Portfolio Data - Easy to update and maintain
// Add new projects, skills, achievements, etc. here

export const personalInfo = {
  name: "Srinath Badaveni",
  title: "Full-Stack Developer",
  subtitle:
    "Building Scalable Web Applications with React, Node.js, and the MERN Stack",
  bio: "Computer Science student passionate about crafting elegant solutions to complex problems",
  location: "Hyderabad, Telangana, India",
  email: "badavenisrinath@gmail.com",
  phone: "+91 9059875072",
  availability: "Currently available for internships and freelance projects",
  profileImage: "/images/profile/profile1.jpg",

  social: {
    github: "https://github.com/Srinath-Badaveni",
    linkedin: "https://linkedin.com/in/srinath-badaveni-9220782a2",
  },
};

export const education = [
  {
    id: 1,
    institution: "TKR College of Engineering and Technology",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Aug 2023 – Apr 2027",
    grade: "CGPA: 8.3/10",
    location: "Hyderabad, Telangana",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    institution: "TS Model School and Junior College",
    degree: "Intermediate (MPC)",
    period: "Jun 2021 – Mar 2023",
    grade: "Score: 90.8%",
    location: "Telangana",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    institution: "TS Model School Namapur",
    degree: "SSC",
    period: "2021",
    grade: "CGPA: 10.0/10",
    location: "Telangana",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export const projects = [
  {
    id: 1,
    title: "ATHENA",
    subtitle: "AI Healthcare Platform",
    date: "Dec 2025",
    description:
      "ATHENA is an AI-powered healthcare ecosystem designed to connect patients, doctors, and pharmacies through unified digital healthcare workflows.",
    impact: "Unified patient, doctor, and pharmacy workflows",
    features: [
      "Medical records, appointments, prescriptions, consent management, and RBAC",
      "FHIR-based interoperability for structured healthcare data exchange",
      "Node.js/Express microservices for core healthcare operations",
      "Flask-based AI services for OCR, RAG, and machine-learning workloads",
      "ResNet-50 + Grad-CAM pipeline for X-ray analysis",
      "BiLSTM + attention model for vital-trend analysis and disease-risk prediction",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Flask", "PyTorch", "FHIR", "RAG", "RBAC"],
    skills: ["AI Healthcare", "FHIR", "RAG", "Full-Stack Development", "Machine Learning"],
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    liveUrl: "https://medi-connect-1-4zf5.onrender.com/",
    githubUrl: "",
    image: "/images/projects/Care-connect.jpg",
  },
  {
    id: 2,
    title: "NoProxy / SnapMark AI",
    subtitle: "Biometric Attendance System",
    date: "Apr 2026",
    description:
      "An intelligent attendance platform that combines facial and voice recognition to reduce proxy attendance and automate classroom verification.",
    impact: "Dual-factor verification using face + voice",
    features: [
      "Real-time facial recognition using Dlib",
      "SVM-based identity verification",
      "Voice authentication using Librosa audio features and Resemblyzer embeddings",
      "Supabase/PostgreSQL for secure vector-data storage",
      "JWT authentication",
      "FastAPI asynchronous processing for concurrent verification requests",
      "LRU caching to reduce verification latency",
    ],
    tech: ["FastAPI", "React", "Python", "Dlib", "Scikit-Learn", "Librosa", "Resemblyzer", "Supabase"],
    skills: ["Biometrics", "Face Recognition", "Voice Recognition", "Machine Learning"],
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
    liveUrl: "",
    githubUrl: "",
    image: "/images/projects/noproxy.jpg",
  },
  {
    id: 3,
    title: "AI Gym Coach",
    subtitle: "Computer Vision Fitness Assistant",
    date: "Feb 2026",
    description:
      "An AI fitness assistant that analyzes exercise movements through a webcam and provides real-time feedback on workout form.",
    impact: "Real-time webcam-based exercise analysis at 30 FPS",
    features: [
      "MediaPipe tracking of 33 body landmarks",
      "Joint-angle calculations for exercise analysis",
      "Supports detection of 14 different exercises",
      "Groq Mixtral LLM generates natural-language corrections",
      "Google Text-to-Speech converts feedback into spoken instructions",
      "Model caching and threading optimized processing",
      "WebRTC-based real-time video processing",
    ],
    tech: ["Python", "Streamlit", "MediaPipe", "Groq/Mixtral", "Google TTS", "WebRTC"],
    skills: ["Computer Vision", "Generative AI", "Real-Time Processing", "Machine Learning"],
    gradient: "from-orange-400 via-red-500 to-pink-600",
    liveUrl: "",
    githubUrl: "",
    image: "/images/projects/gym-coach.jpg",
  },
  {
    id: 4,
    title: "Resume ATS & Screener",
    subtitle: "AI-powered Recruitment Tool",
    date: "May 2026",
    description:
      "An AI-powered recruitment tool that analyzes resumes against job descriptions and generates candidate-match scores.",
    impact: "Automatic technical-skill extraction and candidate-match prediction",
    features: [
      "PDF/DOCX resume processing",
      "Automatic technical-skill extraction using spaCy",
      "TF-IDF-based resume-to-job-description comparison",
      "Custom technical-skills database",
      "Random Forest model for candidate-match prediction",
      "React frontend with FastAPI backend",
    ],
    tech: ["FastAPI", "React", "spaCy", "Scikit-Learn", "TF-IDF", "Random Forest"],
    skills: ["NLP", "Machine Learning", "Full-Stack Development"],
    gradient: "from-purple-400 via-pink-500 to-rose-600",
    liveUrl: "",
    githubUrl: "",
    image: "/images/projects/resume-ats.jpg",
  },
  {
    id: 5,
    title: "FinTrack",
    subtitle: "Personal Finance Application",
    date: "Mar 2025",
    description:
      "A full-stack personal finance application for managing transactions, budgets, authentication, and financial analytics.",
    impact: "Visual breakdown of spending patterns, budgets, and transaction history",
    features: [
      "Transaction management",
      "Budget tracking",
      "Authentication",
      "Financial analytics and spending summaries",
      "SQL aggregation for financial reports",
      "Interactive Chart.js dashboards",
    ],
    tech: ["React.js", "Node.js", "Spring Boot", "SQL", "Chart.js"],
    skills: ["Full-Stack Engineering", "SQL", "Data Visualization", "REST APIs"],
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    liveUrl: "https://sri-fintrack.onrender.com/",
    githubUrl: "",
    image: "/images/projects/fintrack.jpg",
  },
  {
    id: 6,
    title: "Neural Style Transfer Engine",
    subtitle: "Computer-Vision Application",
    date: "Jul 2026",
    description:
      "A computer-vision application that transfers the artistic style of one image onto another while preserving the original content.",
    impact: "Produces styled images in approximately 2 seconds",
    features: [
      "VGG-19 for extracting image features",
      "AdaIN for style-content feature alignment",
      "Custom decoder network for image reconstruction",
      "GPU-accelerated processing",
      "Flask backend with a web-based interface",
    ],
    tech: ["PyTorch", "Flask", "VGG-19", "AdaIN", "Computer Vision", "Bootstrap"],
    skills: ["Deep Learning", "Computer Vision", "PyTorch"],
    gradient: "from-fuchsia-400 via-pink-500 to-purple-600",
    liveUrl: "",
    githubUrl: "",
    image: "/images/projects/neural-style.jpg",
  },
  {
    id: 7,
    title: "RideShare",
    subtitle: "Innovative Ride Solutions",
    date: "Sep 2024 - Oct 2024",
    description:
      "Engineered a real-time seat selection system using WebSockets for instant synchronization across multiple user devices, eliminating booking conflicts. Features real-time ride matching, automatic deletion of expired rides, and carbon footprint tracking.",
    impact: "25% faster database lookups with strategic indexing",
    features: [
      "Real-Time Ride Matching with minimal wait times",
      "Real-Time Seat Updates using WebSockets",
      "Automatic Deletion of Expired Rides",
      "GPS tracking and emergency assistance",
      "Carbon Footprint Tracking for eco-friendly choices",
      "Mobile-first responsive design with optimized accessibility",
    ],
    tech: [
      "Express.js",
      "Node.js",
      "WebSockets",
      "MongoDB",
      "Bootstrap",
      "Real-Time Tracking",
    ],
    skills: [
      "Express.js",
      "Real Time Tracking",
      "Back-End Web Development",
      "Nodejs",
      "Bootstrap (Framework)",
      "Web Applications",
    ],
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    liveUrl: "https://ride-share-mqg3.onrender.com",
    githubUrl: "",
    image: "/images/projects/rideshare.jpg",
  },
  {
    id: 8,
    title: "Tourist Places",
    subtitle: "Integrated with Database",
    date: "Aug 2024 - Sep 2024",
    description:
      "Developed a dynamic website showcasing tourist destinations using Node.js, integrated with a database for efficient data management. Features search functionality, user reviews section, and real-time data updates.",
    impact: "Seamless server-database integration",
    features: [
      "Search functionality for tourist locations",
      "User reviews section with real-time updates",
      "Database integration for efficient data management",
      "Responsive layouts with Bootstrap",
      "Real-time data updates on various tourist locations",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "SQL", "Bootstrap", "REST APIs"],
    skills: [
      "Express.js",
      "SQL",
      "Full-Stack Development",
      "Back-End Web Development",
      "Nodejs",
      "REST APIs",
      "MongoDB",
    ],
    gradient: "from-purple-400 via-pink-500 to-rose-600",
    liveUrl: "",
    githubUrl: "",
    image: "/images/projects/tourist-places.jpg",
  },
  {
    id: 9,
    title: "Movies Hub",
    subtitle: "Trending Movies Application",
    date: "Aug 2024",
    description:
      "Built using React.js and Tailwind CSS, delivering a seamless and visually appealing experience. Features auto-changing banner, watchlist with rating filters, dynamic search, and popularity metrics.",
    impact: "40% faster page load times with optimized rendering",
    features: [
      "Auto-changing banner showcasing trending movies",
      "Watchlist page with filter by rating",
      "Dynamic search field for quick discovery",
      "Real-time updates on popular films",
      "Responsive design across all devices",
      "Third-party API integration for live movie data",
    ],
    tech: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
    ],
    skills: [
      "Cascading Style Sheets (CSS)",
      "JavaScript",
      "React JS",
      "HTML5",
      "Tailwind CSS",
    ],
    gradient: "from-fuchsia-400 via-pink-500 to-rose-600",
    liveUrl: "https://trendingmovies-xcur.onrender.com/",
    githubUrl: "",
    image: "/images/projects/movies-hub.jpg",
  },

];

export const workExperience = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Ament Capital",
    period: "Feb 2026 – Jun 2026",
    description:
      "Developed a property discovery platform with 10,000+ property listings. Implemented Google Maps integration, frontend layouts with React 19 and Tailwind CSS v4, and fixed SSR issues for optimal performance.",
    tech: ["React 19", "Tailwind CSS", "@vis.gl", "Express", "Google Maps API"],
    logo: "💼", // Placeholder icon, can be replaced with an image path if available
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Hacking Flex",
    period: "Mar 2025 – Jul 2025",
    description:
      "Built and optimized the backend learning workflows and video-delivery pipeline. Worked with SQL databases and CDN integration to ensure smooth content delivery.",
    tech: ["Node.js", "Express", "SQL", "Cloudinary", "CDN"],
    logo: "🚀",
  },
];

export const skills = {
  languages: [
    { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600" },
    { name: "Python", level: 80, color: "from-blue-400 to-blue-600" },
    { name: "Java", level: 75, color: "from-red-400 to-red-600" },
    { name: "C++", level: 70, color: "from-purple-400 to-purple-600" },
  ],
  frontend: [
    "React.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Responsive Design",
    "AJAX",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "WebSockets",
    "JWT Authentication",
  ],
  databases: ["MongoDB", "SQL", "Database Design"],
  tools: ["Git/GitHub", "VS Code", "Postman", "Oracle Cloud"],
  competencies: [
    "Data Structures & Algorithms",
    "Debugging & Optimization",
    "Team Collaboration",
  ],
};

export const achievements = [
  {
    id: 1,
    title: "2x Coding Champion",
    description:
      "Secured 1st place twice in competitive programming competitions",
    year: "2024",
    icon: "award",
  },
  {
    id: 2,
    title: "Rank 92 - DSA CodeVerse",
    description:
      "Achieved Rank 92 in DSA CodeVerse Contest #7 among hundreds of participants",
    year: "2024",
    icon: "trophy",
  },
  {
    id: 3,
    title: "200+ DSA Problems",
    description:
      "Solved 200+ Data Structures and Algorithms problems on NXT Wave platform",
    year: "2024",
    icon: "code",
  },
];

export const certifications = [
  {
    id: 1,
    title:
      "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
  },
  {
    id: 2,
    title: "Front End Development Certification",
    issuer: "Advanced React.js & JavaScript",
    year: "2024",
  },
  {
    id: 3,
    title: "Cloud Foundations Certification",
    issuer: "Core cloud computing principles and practices",
    year: "2024",
  },
  {
    id: 4,
    title: "React JS Certification",
    issuer: "Professional Certification",
    year: "2024",
  },
];

export const timeline = [
  {
    year: "2026",
    events: [
      "Full Stack Developer Intern at Ament Capital (Feb - Jun): React 19, Tailwind CSS v4, @vis.gl, Google Maps integration, SSR fixes, and 10,000+ property listings.",
      "Neural Style Transfer Engine Launch (Jul)",
      "Resume ATS & Screener Launch (May)",
      "SnapMark AI & NoProxy - Biometric Attendance (Apr)",
      "AI Gym Coach - Computer Vision + GenAI (Feb)",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    year: "2025",
    events: [
      "ATHENA - AI Healthcare Platform (Dec)",
      "Software Engineer at Hacking Flex (Mar - Jul): Focused on video-delivery pipeline, backend learning workflows, Node.js, Express, SQL, and CDN.",
      "FinTrack Application Launch (Mar)",
      "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      "200+ DSA Problems Milestone",
    ],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    year: "2024",
    events: [
      "Ride Share Platform Launch",
      "1st Place - Coding Competition (2x)",
      "Rank 92 - DSA CodeVerse Contest #7",
      "Movies Hub & Tourist Places Applications",
      "Front End Development Certification",
      "Cloud Foundations Certification",
    ],
    gradient: "from-blue-500 to-purple-600",
  },
  {
    year: "2023",
    events: [
      "Started B.Tech in Computer Science",
      "Completed Intermediate - 90.8%",
    ],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    year: "2021",
    events: ["SSC - Perfect 10.0 CGPA"],
    gradient: "from-pink-500 to-rose-600",
  },
];

export const stats = [
  {
    number: "200+",
    label: "DSA Problems Solved",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    number: "6",
    label: "Production Apps",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    number: "2x",
    label: "Competition Winner",
    gradient: "from-purple-500 to-pink-600",
  },
  { number: "8.3", label: "CGPA", gradient: "from-pink-500 to-rose-600" },
];

export const availableFor = [
  "Web Development Internships",
  "Freelance Projects",
];

export const currentFocus = [
  "🎓 Pursuing B.Tech in Computer Science (CGPA: 8.3)",
  "💻 Building full-stack applications with MERN stack",
  "☁️ Exploring cloud technologies and generative AI",
  "🏆 Competing in coding challenges",
  "📚 Mastering DSA",
];
