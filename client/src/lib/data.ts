// Portfolio data based on Raj Shekhar's resume
export const projects = [
  {
    id: 1,
    title: "GLAMGRAIL",
    description: "Full-Stack Fashion E-Commerce Platform with React frontend, Node.js backend, and MongoDB database.",
    duration: "Sep - Dec 2024",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Context API", "CSS3"],
    features: [
      "JWT-less session management via Context API",
      "Dynamic product system with category routing",
      "Persistent cart functionality",
      "MongoDB aggregation for optimization"
    ],
    github: "",
    demo: ""
  },
  {
    id: 2,
    title: "REALTALK",
    description: "Real-Time Chat Application with WebSocket authentication and live user presence indicators.",
    duration: "May - June 2025",
    technologies: ["React", "WebSockets", "Node.js", "JWT", "Tailwind CSS", "MongoDB"],
    features: [
      "Secure authentication and session management",
      "Real-time messaging with auto-reconnect",
      "Live user presence indicators",
      "File uploads and chat history"
    ],
    github: "",
    demo: ""
  },
  {
    id: 3,
    title: "EduVerify",
    description: "Android Document Verification & Academic Tracker App built with Kotlin and Firebase.",
    duration: "Jan - May 2025",
    technologies: ["Kotlin", "Firebase", "Android Studio", "Cloudinary"],
    features: [
      "Document scanning and gallery uploads",
      "Firebase Authentication integration",
      "Interactive academic tracking modules",
      "Responsive Android design principles"
    ],
    github: "",
    demo: ""
  }
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "C++", level: 4 },
      { name: "JavaScript", level: 5 },
      { name: "Kotlin", level: 4 }
    ]
  },
  {
    category: "Web Technologies",
    items: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Tailwind CSS" },
      { name: "Socket.IO" }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Firebase" },
      { name: "Cloudinary" },
      { name: "Android Studio" }
    ]
  }
];

export const coreCompetencies = [
  {
    title: "DSA & Problem Solving",
    description: "300+ problems on GeeksforGeeks, 200+ on LeetCode"
  },
  {
    title: "Responsive Design",
    description: "Mobile-first approach with modern CSS frameworks"
  },
  {
    title: "RESTful APIs",
    description: "Building scalable backend services and APIs"
  },
  {
    title: "OOP",
    description: "Object-oriented programming principles and patterns"
  }
];

export const education = {
  university: "Lovely Professional University",
  degree: "Bachelor of Technology - Computer Science and Engineering",
  location: "Phagwara, Punjab",
  years: "2022 - 2026",
  cgpa: "7.1"
};

export const achievements = [
  {
    title: "Secured Rank 4728",
    date: "August, 2024",
    description: "Competitive programming achievement demonstrating strong problem-solving skills"
  },
  {
    title: "300+ GeeksforGeeks Problems",
    date: "Ongoing",
    description: "Solved more than 300 coding problems, showcasing consistent practice and algorithmic thinking"
  },
  {
    title: "200+ LeetCode Problems",
    date: "Ongoing",
    description: "Extensive practice on LeetCode platform, strengthening data structures and algorithms knowledge"
  }
];

export const certifications = [
  {
    title: "Programming fundamentals with Kotlin - Meta",
    date: "November, 2024",
    link: "#",
    type: "kotlin"
  },
  {
    title: "Social Networks - NPTEL Swayam",
    date: "April, 2025",
    link: "#",
    type: "network"
  }
];
