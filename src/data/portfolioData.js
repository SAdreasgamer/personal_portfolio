// ============================================================
// 📝 PORTFOLIO DATA — Shrey Anand (SAdreasgamer)
// ============================================================

// ------- YOUR INFO -------
export const personalInfo = {
  name: "Shrey Anand",
  title: "Backend & Systems Engineer",
  tagline: "Building distributed systems, AI-powered platforms, and developer tooling that ships to production.",
  email: "onlyshrey98@gmail.com",
  location: "India",
  resumeUrl: "#",                              // 👈 Replace with your resume PDF link
  avatarUrl: "https://avatars.githubusercontent.com/u/173816053?v=4",
};

// ------- SOCIAL LINKS -------
export const socialLinks = {
  github: "https://github.com/SAdreasgamer",
  leetcode: "",                                // 👈 Add your LeetCode if any
  linkedin: "https://www.linkedin.com/in/shrey-anand-5283142a6/",
  twitter: "",
  portfolio: "",
};

// ------- ABOUT -------
export const about = {
  bio: [
    "I'm a backend and systems engineer who builds distributed systems, microservice architectures, and AI-powered platforms that actually go to production. Not just another techie — I care about engineering systems that scale, architectures that hold under load, and software that solves real problems.",
    "My work spans event-driven microservices in Java and Go, AI/ML pipelines in Python, and full-stack platforms. Whether it's a video streaming backend inspired by Netflix, a healthcare AI agent, or a developer CLI tool — I love working at every layer of the stack.",
  ],
  highlights: [
    { label: "Public Repos", value: "9" },
    { label: "Technologies", value: "15+" },
    { label: "Stars Earned", value: "2+" },
    { label: "Live Projects", value: "1" },
  ],
};

// ------- SKILLS -------
export const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "Go", "JavaScript", "Node.js", "SQL"],
  },
  {
    category: "Backend & Systems",
    items: ["Spring Boot", "gRPC", "REST APIs", "Kafka", "Microservices", "FastAPI"],
  },
  {
    category: "AI / ML",
    items: ["PyTorch", "TensorFlow", "OpenCV", "Autoencoders", "Jupyter", "Scikit-learn"],
  },
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
  },
  {
    category: "DevOps & Cloud",
    items: ["AWS", "Docker", "CI/CD", "FFmpeg", "Git", "Linux"],
  },
  {
    category: "Security & Databases",
    items: ["JWT", "Homomorphic Encryption", "PostgreSQL", "MongoDB", "Redis"],
  },
];

// ------- PROJECTS -------
// All public repos — all marked as featured
export const projects = [
  {
    id: 1,
    title: "MedSync",
    description: "Distributed healthcare platform with 6 microservices and an AI agent for patient management, billing & scheduling.",
    longDescription: "MedSync is a production-grade distributed healthcare platform built with 6 microservices in Java and Python. An AI agent orchestrates patient management, billing, and scheduling workflows through natural language. Features event-driven analytics via Kafka, gRPC inter-service communication, a JWT-secured API Gateway, and a React dashboard. Fully deployed on AWS with CI/CD pipelines.",
    tags: ["Java", "Python", "Kafka", "gRPC", "JWT", "React", "AWS", "Microservices"],
    github: "https://github.com/SAdreasgamer/MedSync",
    live: "https://medsync.space",
    image: null,
    featured: true,
  },
  {
    id: 2,
    title: "StreamForge",
    description: "Production-grade microservices video backend replicating Netflix/YouTube infrastructure — FFmpeg transcoding + HLS streaming.",
    longDescription: "StreamForge is a distributed media processing and streaming platform that replicates the core video infrastructure behind platforms like Netflix, YouTube, and Hotstar — built from scratch. It features event-driven architecture, async FFmpeg transcoding pipelines, adaptive HLS streaming, and a full microservices backend designed for scalability and high throughput.",
    tags: ["Java", "FFmpeg", "HLS", "Microservices", "Event-Driven", "Streaming"],
    github: "https://github.com/SAdreasgamer/StreamForge-Distributed-Media-Processing-Streaming-Platform",
    live: "",
    image: null,
    featured: true,
  },
  {
    id: 3,
    title: "HotReload Go",
    description: "Developer CLI tool in Go that watches your project for code changes and automatically rebuilds and restarts the server.",
    longDescription: "A CLI tool called hotreload written in Go that watches a project folder for code changes. Whenever a file changes, it automatically rebuilds and restarts the server — like nodemon but for Go projects. Streamlines developer workflow by eliminating the manual rebuild-restart cycle during development.",
    tags: ["Go", "CLI", "Developer Tools", "File Watching"],
    github: "https://github.com/SAdreasgamer/HotReload_Go",
    live: "",
    image: null,
    featured: true,
  },
  {
    id: 5,
    title: "Noise-Resilient Image Classification",
    description: "CIFAR-10 denoising pipeline using autoencoders and noise-aware fine-tuning for robust image classification under corrupted inputs.",
    longDescription: "A deep learning project that builds a noise-resilient image classification pipeline for the CIFAR-10 dataset. Uses convolutional denoising autoencoders to reconstruct clean images from noisy inputs, followed by noise-aware fine-tuning to improve classifier robustness. Experiments across Gaussian, salt-and-pepper, and adversarial noise types.",
    tags: ["Python", "PyTorch", "Autoencoders", "Deep Learning", "Computer Vision", "Jupyter"],
    github: "https://github.com/SAdreasgamer/Noise-Resilient-Image-Classification-using-Denoising-Autoencoders-and-Noise-Aware-Fine-Tuning",
    live: "",
    image: null,
    featured: true,
  },
  {
    id: 6,
    title: "Homomorphic Medical Image Classification",
    description: "Privacy-preserving medical image classification combining Homomorphic Encryption with Henon Map chaotic image encryption.",
    longDescription: "A research-grade project that applies homomorphic encryption combined with Henon Map chaotic encryption for secure medical image classification. Enables inference on encrypted medical images without decryption, maintaining patient data privacy while running deep learning models on sensitive healthcare data.",
    tags: ["Python", "Homomorphic Encryption", "Henon Map", "Medical AI", "Deep Learning", "Privacy"],
    github: "https://github.com/SAdreasgamer/Homomorphic-with-Henon-Map-Encryption-Medical-Image-Classification",
    live: "",
    image: null,
    featured: true,
  },
];

// ------- EXPERIENCE -------
export const experience = [
  {
    role: "Software Engineering Intern",
    company: "HCLTech",
    period: "May 2026 – July 2026",
    description: "Reverse-engineered and ported Windows CE-based DLLs to Linux shared libraries (.so) in C++ using IDA Pro decompiled output for Keysight scientific instruments. Refactored decompiled code into modular, well-documented C++ components and replaced Windows-specific APIs (Registry, USB drivers, threading) with POSIX/Linux equivalents, maintaining drop-in compatibility with the existing C# layer. Validated all ported libraries on Linux VMs and production hardware using automated C# test harnesses via Mono P/Invoke.",
    technologies: ["C++", "Linux", "IDA Pro", "POSIX", "C#", "Mono", "P/Invoke", "USB Drivers"],
  },
  {
    role: "Research Intern",
    company: "Samsung PRISM",
    period: "Aug 2025 – June 2026",
    description: "Worked on Test-Time Adaptation (TTA) for Automatic Speech Recognition (ASR) in noisy acoustic environments under the Samsung PRISM research program. Responsibilities included dataset preparation, model fine-tuning, and WER (Word Error Rate) analysis to improve recognition accuracy under real-world noise conditions.",
    technologies: ["Python", "PyTorch", "ASR", "TTA", "NLP", "Speech Processing", "Deep Learning"],
  },
  {
    role: "Summer Intern",
    company: "MedxAi Innovations Pvt. Ltd",
    period: "May 2025 – August 2025",
    description: "Developed a full-stack patient screening platform for cervical cancer detection. Built CNN-based deep learning models trained on segregated medical image datasets, improving prediction accuracy. Contributed to CerviLens — the company's flagship AI product for cervical cancer screening.",
    technologies: ["Python", "CNN", "TensorFlow", "Medical Imaging", "React", "Full-Stack"],
  },
];

// ------- EDUCATION -------
export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering (AI & ML)",
    institution: "Vellore Institute of Technology, Chennai",
    period: "2023 – 2027",
  },
];

// ------- NAV LINKS -------
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
