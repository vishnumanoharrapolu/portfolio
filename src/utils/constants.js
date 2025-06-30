export const PORTFOLIO_DATA = {
  personal: {
    name: "VISHNU MANOHAR RAPOLU",
    role: "Electronics & Communication Engineer",
    tagline: "Bridging hardware and software to create innovative IoT solutions and embedded systems",
    bio: "Passionate Electronics & Communication Engineer with strong knowledge in IoT and full-stack web development. Skilled in building intelligent IoT-based solutions and developing dynamic web applications using modern front-end and back-end technologies. Eager to apply engineering principles and coding skills to solve real-world problems",
    location: "Amalapuram, India",
    email: "vishnumanoharrapolu@gmail.com",
    phone: "+91 9000164943",
    avatar: "/VAS_5026.JPG"
  },
  skills: {
    embedded: [
      { name: "Arduino", level: 95, icon: "🔧" },
      { name: "ESP32/ESP8266", level: 90, icon: "📡" },
      { name: "C/C++", level: 85, icon: "⚡" }
    ],
    software: [
      { name: "MATLAB", level: 80, icon: "📊" },
      { name: "Virtso", level: 85, icon: "🔬" },
      { name: "Python", level: 88, icon: "🐍" },
   
    ],
    web: [
      { name: "React", level: 82, icon: "⚛️" },
      { name: "JavaScript", level: 85, icon: "🟨" },
      { name: "Node.js", level: 78, icon: "🟢" },
      { name: "Bootstrap", level: 88, icon: "🅱️" }
    ],
    tools: [
      { name: "Git", level: 90, icon: "📦" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Proteus", level: 70, icon: "⚙️" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Automated Roof Control System",
      description: "IoT-based home automation system using Arduino and ESP32 with web app control and energy monitoring.",
      image: "/automated roof.png?auto=compress&cs=tinysrgb&w=600",
      tech: ["Arduino", "ESP32", "React Native", "Firebase"],
      liveUrl: "https://automated-roof-control-system.vercel.app/",
      githubUrl: "https://github.com/vishnumanoharrapolu/automated-roof-control-system",
      featured: true
    },
    {
      id: 2,
      title: "Ai Image Detection",
      description: "Developed a web-based AI Image Detection application using HTML and Python, integrated with the Sightengine API for real-time content analysis. The application performs automated image moderation to detect and flag AI-generated, offensive, or inappropriate content.",
      image: "public/ai imagedetec.png?auto=compress&cs=tinysrgb&w=600",
      tech: ["Flask", "HTML", "PYTHON", "Sightengine API"],
      liveUrl: "https://github.com/vishnumanoharrapolu/ai_imagedetection",
      githubUrl: "https://github.com/vishnumanoharrapolu/ai_imagedetection",
      featured: true
    },
    {
      id: 3,
      title: "TECHATHON EVENT WEBSITE",
      description: "Designed and developed a responsive and interactive website for Techathon, a departmental-level technical event. The website serves as the central platform for event information, registration, and contact details, offering a seamless user experience across devices.",
      image: "public/techathon.png",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      liveUrl: "https://techathon2k25.netlify.app/",
      githubUrl: "https://github.com/vishnumanoharrapolu/techathon",
      featured: true
    },
    {
      id: 4,
      title: "Automatic Solar Tracking System",
      description: "An innovative solar tracking system that automatically adjusts the position of solar panels to maximize energy capture throughout the day.",
      image: "public/auto.jpg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Arduino", "React", "ESP32", "GUI" ],
      liveUrl: "https://github.com/vishnumanoharrapolu/automatic-solar-tracking-system",
      githubUrl: "https://github.com/vishnumanoharrapolu/automatic-solar-tracking-system",
      featured: false
    },/*
    {
      id: 5,
      title: "Embedded Weather Station",
      description: "Autonomous weather monitoring station with multiple sensors, data logging, and wireless data transmission capabilities.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Arduino", "Sensors", "SD Card", "WiFi"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    /*
  {
      id: 6,
      title: "Motor Control System",
      description: "Precision motor control system with PID controller implementation, speed regulation, and position feedback.",
      image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Arduino", "PID Control", "Encoders", "PWM"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }*/
  ],
  certificates: [
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM",
      date: "2024",
      description: "Comprehensive introduction to cloud computing concepts, deployment models, service models, and IBM Cloud platform fundamentals. Covered essential topics including IaaS, PaaS, SaaS, and practical applications in modern IT infrastructure.",
      icon: "☁️",
      credentialUrl: "https://drive.google.com/file/d/19HgoQFcfRwAHHnbZrK62Ab1JvbMiBvpD/view?usp=sharing",
      embedUrl: "https://drive.google.com/file/d/19HgoQFcfRwAHHnbZrK62Ab1JvbMiBvpD/preview"
    },
    {
      title: "CRUX 2025 Project Participation",
      issuer: "CRUX 2025",
      date: "2025",
      description: "Participated in CRUX 2025 technical event with innovative project demonstration. Showcased technical skills and project development capabilities in a competitive environment.",
      icon: "🚀",
      credentialUrl: "https://drive.google.com/file/d/1UJI3zOskwYPvu3rlsNcR_pbq7AlYEtwG/view?usp=sharing",
      embedUrl: "https://drive.google.com/file/d/1UJI3zOskwYPvu3rlsNcR_pbq7AlYEtwG/preview"
    },
    {
      title: "Hardware Operating System",
      issuer: "edX",
      date: "2024",
      description: "Comprehensive course on hardware operating systems, covering system architecture, hardware-software interaction, and embedded system programming. Gained practical knowledge in system-level programming and hardware abstraction.",
      icon: "🖥️",
      credentialUrl: "https://drive.google.com/file/d/1DRve7p0ymraPMgtU3ad4H7z5D6MYuzMf/view?usp=sharing",
      embedUrl: "https://drive.google.com/file/d/1DRve7p0ymraPMgtU3ad4H7z5D6MYuzMf/preview"
    },
    {
      title: "Techathon Event Organizer",
      issuer: "Department of Electronics & Communication",
      date: "2025",
      description: "Successfully organized and managed Techathon, a departmental-level technical event. Demonstrated leadership skills, event management capabilities, and technical coordination expertise.",
      icon: "🏆",
      credentialUrl: "https://drive.google.com/file/d/14qJn1kSu0NNM1ZFDZ3g5bMv9N1XrBITP/view?usp=sharing",
      embedUrl: "https://drive.google.com/file/d/14qJn1kSu0NNM1ZFDZ3g5bMv9N1XrBITP/preview"
    },
    {
      title: "IoT Workshop Participation",
      issuer: "Department of Electronics & Communication", // Update with actual issuer if available
      date: "2025",
      description: "Participated in an IoT workshop, gaining hands-on experience in Internet of Things technologies and applications.",
      icon: "📡",
      credentialUrl: "https://drive.google.com/file/d/17tnLIow7xiq-xGCt02OjMQeadgW47GCl/view?usp=sharing",
      embedUrl: "https://drive.google.com/file/d/17tnLIow7xiq-xGCt02OjMQeadgW47GCl/preview"
    }
  ],
  education: [
    {
      title: "Bachelor of Technology (B.Tech)",
      institution: "Electronics & Communication Engineering",
      period: "2022 - 2026(Present)",
      description: "Currently pursuing Bachelor's degree in Electronics & Communication Engineering with focus on embedded systems, signal processing, and communication technologies. Gaining comprehensive knowledge in circuit design, microprocessors, and digital signal processing.",
      grade: "Current Student"
    },
    {
      title: "Higher Secondary Education",
      institution: "Science Stream (MPC)",
      period: "2020 - 2022",
      description: "Completed 12th grade with Physics, Chemistry, and Mathematics as core subjects. Built strong foundation in mathematical concepts and scientific principles that supported engineering studies.",
      grade: "Excellent Performance"
    },
    {
      title: "Secondary Education",
      institution: "State Board",
      period: "2019 - 2020",
      description: "Completed 10th grade with excellent academic performance. Developed interest in science and technology subjects, which led to pursuing engineering education.",
      grade: "Distinction"
    }
  ],
  experience: [
    {
      position: "Intern",
      company: "NIELIT (2-months)",
      period: "2024",
      description: "Developed a comprehensive blogging platform with robust cloud infrastructure. Implemented AWS EC2 for scalable computing, S3 for reliable file storage, and VPC for secure network architecture. Gained hands-on experience in cloud deployment, server management, and full-stack development practices.",
      technologies: ["AWS EC2", "AWS S3", "AWS VPC", "Cloud Computing", "Full-Stack Development"],
      certificateUrl: "https://drive.google.com/file/d/1XwUWcciS95tmN5OATsZdSB5dauRz1A9W/view?usp=sharing"
    },
    {
      position: "Intern",
      company: "BlackBucks (2-months)",
      period: "2025",
      description: "Developed an automation project focused on web testing and process automation using Selenium and Python. Created automated test scripts for web applications, implemented data-driven testing frameworks, and optimized testing workflows to improve efficiency and reliability.",
      technologies: ["Selenium", "Python", "Web Automation", "Test Automation", "Data-Driven Testing"]
    }
  ]
};