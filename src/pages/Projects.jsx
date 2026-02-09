import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaServer, 
  FaDatabase,
  FaPaintBrush,
  FaMobileAlt,
  FaRocket
} from "react-icons/fa";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      category: "react",
      description: "Admin dashboard with real-time analytics, product management, and order tracking system. Built during my React.js internship with comprehensive features.",
      image: "/projects/ecommerce-dashboard.jpg", // Replace with your image
      technologies: ["React", "Chart.js", "Tailwind CSS", "REST API", "Context API"],
      github: "https://github.com/sabik-ahmd/ecommerce-dashboard",
      live: "https://ecommerce-dashboard-demo.vercel.app",
      features: [
        "Real-time sales analytics with charts",
        "Product CRUD operations",
        "Order management system",
        "Responsive design for all devices",
        "User authentication & authorization"
      ],
      highlights: ["Internship Project", "6 Months Development", "Live Deployment"]
    },
    {
      id: 2,
      title: "Task Management App",
      category: "react",
      description: "Full-featured task manager with drag & drop functionality, filtering, themes, and local storage integration.",
      image: "/projects/task-manager.jpg", // Replace with your image
      technologies: ["React", "DnD Kit", "Context API", "Local Storage", "Tailwind"],
      github: "https://github.com/sabik-ahmd/task-manager",
      live: "https://task-manager-demo.vercel.app",
      features: [
        "Drag & drop task organization",
        "Dark/light theme toggle",
        "Real-time search and filtering",
        "Task categories and tags",
        "Progress tracking"
      ],
      highlights: ["Personal Project", "Advanced Features", "Modern UI/UX"]
    },
    {
      id: 3,
      title: "TextUtils - Text Manipulation Tool",
      category: "react",
      description: "Advanced text manipulation tool with multiple utilities for developers and writers. Convert cases, analyze text, and more.",
      image: "/projects/textutils.jpg", // Replace with your image
      technologies: ["React", "JavaScript", "CSS3", "Bootstrap"],
      github: "https://github.com/sabik-ahmd/textutils",
      live: "https://textutils-demo.vercel.app",
      features: [
        "Text case conversion (UPPER/lower/Title)",
        "Word and character count",
        "Text analysis and statistics",
        "Copy to clipboard",
        "Dark mode support"
      ],
      highlights: ["Learning Project", "Open Source", "Utility Tool"]
    },
    {
      id: 4,
      title: "Weather Application",
      category: "react",
      description: "Real-time weather application with location detection, 5-day forecast, and beautiful visualizations.",
      image: "/projects/weather-app.jpg", // Replace with your image
      technologies: ["React", "OpenWeather API", "Geolocation", "Axios", "Chart.js"],
      github: "https://github.com/sabik-ahmd/weather-app",
      live: "https://weather-app-demo.vercel.app",
      features: [
        "Real-time weather data",
        "5-day forecast",
        "Location-based weather",
        "Unit conversion (C/F)",
        "Responsive design"
      ],
      highlights: ["API Integration", "Real-time Data", "Learning Project"]
    },
    {
      id: 5,
      title: "Part Time Job Portal",
      category: "fullstack",
      description: "Full-stack job portal connecting students with employers. Built with React frontend and Node.js backend.",
      image: "/projects/job-portal.jpg", // Replace with your image
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/sabik-ahmd/job-portal",
      live: "#",
      features: [
        "User authentication & authorization",
        "Job posting & application system",
        "Resume upload & parsing",
        "Real-time notifications",
        "Admin dashboard"
      ],
      highlights: ["Full-stack", "MERN Stack", "Real-world Application"]
    },
    {
      id: 6,
      title: "Online Exam Proctoring System",
      category: "fullstack",
      description: "AI-powered exam proctoring system with computer vision for cheating detection and analytics.",
      image: "/projects/exam-system.jpg", // Replace with your image
      technologies: ["Django", "Python", "OpenCV", "Machine Learning", "PostgreSQL"],
      github: "https://github.com/sabik-ahmd/exam-proctoring",
      live: "#",
      features: [
        "Face detection & recognition",
        "Cheating behavior detection",
        "Real-time monitoring",
        "Analytics dashboard",
        "Secure exam environment"
      ],
      highlights: ["AI/ML Integration", "Computer Vision", "Academic Project"]
    },
    {
      id: 7,
      title: "Portfolio Website",
      category: "frontend",
      description: "Modern, responsive portfolio website showcasing my projects and skills with smooth animations.",
      image: "/projects/portfolio.jpg", // Replace with your image
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Type Animation"],
      github: "https://github.com/sabik-ahmd/portfolio",
      live: "https://sabik.dev",
      features: [
        "Responsive design",
        "Smooth animations",
        "Interactive UI elements",
        "Performance optimized",
        "Modern design system"
      ],
      highlights: ["Personal Branding", "Latest Tech Stack", "Performance Focused"]
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: "🚀", count: projects.length },
    { id: "react", label: "React Projects", icon: "⚛️", count: projects.filter(p => p.category === "react").length },
    { id: "fullstack", label: "Full Stack", icon: "💻", count: projects.filter(p => p.category === "fullstack").length },
    { id: "frontend", label: "Frontend", icon: "🎨", count: projects.filter(p => p.category === "frontend").length },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0a192f] to-gray-900 text-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        
        {/* Floating code icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xl opacity-10"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {"</>"}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-400 text-sm font-medium">My Work</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Projects
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of my recent work including internship projects, personal experiments, 
            and learning experiences. Each project represents a step in my development journey.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: "Total Projects", value: projects.length, color: "from-cyan-500 to-blue-500" },
            { label: "React Projects", value: projects.filter(p => p.category === "react").length, color: "from-purple-500 to-pink-500" },
            { label: "Live Demos", value: projects.filter(p => p.live !== "#").length, color: "from-green-500 to-emerald-500" },
            { label: "Open Source", value: projects.filter(p => p.github).length, color: "from-yellow-500 to-orange-500" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-3 rounded-lg transition-all flex items-center gap-2 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeFilter === category.id 
                  ? "bg-white/20" 
                  : "bg-white/5"
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="h-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Highlights */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.highlights.map((highlight, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-xs font-medium"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-cyan-500/20 backdrop-blur-sm rounded-full text-xs text-cyan-300 border border-cyan-500/30">
                      {project.category === "react" ? "React.js" : 
                       project.category === "fullstack" ? "Full Stack" : "Frontend"}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-cyan-300 group-hover:bg-cyan-500/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-cyan-400 text-xs mt-1">▸</span>
                        <span className="text-gray-400 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all group/btn"
                    >
                      <FaGithub className="group-hover/btn:text-white transition-colors" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        project.live !== "#"
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/30"
                          : "bg-white/5 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-white/10 max-w-2xl mx-auto hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-4xl">🚀</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Want to See More?
            </h3>
            <p className="text-gray-300">
              Check out my GitHub for more projects, experiments, and open-source contributions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://github.com/sabik-ahmd"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-gray-500/30 transition-all flex items-center gap-3"
              >
                <FaGithub className="text-xl" />
                View All Projects on GitHub
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/30 transition-all"
              >
                Request Custom Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;