import React, { useState } from "react";
import { motion } from "framer-motion";

import retroBellaImg from "../assets/projects/retrobella.png";
import microtechImg from "../assets/projects/microtech.png";
import textUtilsImg from "../assets/projects/text.png";
import jobPortalImg from "../assets/projects/job.png";
import examImg from "../assets/projects/exam.jpeg";
import pixelFramesImg from "../assets/projects/pixelframes.png";
import portfolioImg from "../assets/projects/portfolio.png";
import h1Img from "../assets/projects/h1.png"

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
  title: "HealthOne+ - Healthcare E-commerce (UI/UX Concept)(ongoing-project)",
  category: "frontend",
  description: "Modern healthcare e-commerce platform UI concept for medicines, baby care, and medical devices. Features clean product listings, offers, and a trusted medical brand experience. Currently a front-end demo with ongoing development.",
  image: h1Img,
  technologies: ["React", "Tailwind CSS", "Responsive Design", "UI/UX Design", "Netlify"],
  github: "https://github.com/sabik-ahmd/healthoneplus",
  live: "https://healthoneplus.netlify.app",
  features: [
    "Product catalog with categories and deals",
    "Responsive healthcare e-commerce layout",
    "Product cards with pricing and stock status",
    "Modern gradient design system",
    "Static UI prototype - Backend in development"
  ],
  highlights: ["UI/UX Concept", "Front-end Demo", "Healthcare", "In Progress"]
},
    {
      id: 2,
      title: "RetroBella (ongoing-project)",
      category: "react",
      description: "Modern e-commerce fashion website built with React and Vite. Features product listings, responsive UI, clean component architecture, and smooth user experience.",
      image: retroBellaImg,
      technologies: ["React", "Vite", "CSS3", "Netlify", "Responsive Design"],
      github: "https://github.com/sabik-ahmd/retro-bella-frontend",
      live: "https://retrobella.netlify.app",
      features: [
        "Product listings and filtering",
        "Responsive mobile-first design",
        "Clean component architecture",
        "Smooth animations",
        "Modern fashion e-commerce UI"
      ],
      highlights: ["Featured Project", "E-commerce", "Production Ready"]
    },
    {
      id: 3,
      title: "MicroTech Web",
      category: "react",
      description: "Mobile repair service website showcasing services, gallery, project explanations, and contact form with modern UI/UX design.",
      image: microtechImg,
      technologies: ["React", "CSS3", "Netlify", "Responsive Design"],
      github: "https://github.com/sabik-ahmd/microtech",
      live: "https://microtech1.netlify.app",
      features: [
        "Service showcase gallery",
        "Project portfolio section",
        "Interactive contact form",
        "Mobile repair service listings",
        "Smooth navigation"
      ],
      highlights: ["Service Business", "Modern UI", "Responsive"]
    },
    {
      id: 4,
      title: "Pixel Frames",
      category: "fullstack",
      description: "Full-stack wedding and event photography portfolio website with client galleries and media management system.",
      image: pixelFramesImg,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Cloud Storage"],
      github: "https://github.com/sabik-ahmd/pixel-frames",
      live: "https://pixelframes.netlify.app",
      features: [
        "Client photo galleries",
        "Event portfolio showcase",
        "Media management system",
        "Responsive gallery layout",
        "Wedding photography portfolio"
      ],
      highlights: ["Full-stack", "Photography", "MERN Stack"]
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "frontend",
      description: "Interactive personal portfolio showcasing projects, skills, and certifications with modern animations and optimized responsiveness.",
      image: portfolioImg,
      technologies: ["React", "Framer Motion", "CSS3", "Netlify"],
      github: "https://github.com/sabik-ahmd/mern-port.git",
      live: "https://sabikdev.netlify.app",
      features: [
        "Project showcase gallery",
        "Skills and certifications display",
        "Smooth scroll animations",
        "Mobile responsive design",
        "Modern gradient aesthetics"
      ],
      highlights: ["Personal Branding", "Interactive UI", "Animation"]
    },
    {
      id: 6,
      title: "TextUtils",
      category: "react",
      description: "Advanced text manipulation tool offering powerful case conversion, text analysis, and various utilities beyond basic text editors.",
      image: textUtilsImg,
      technologies: ["React", "JavaScript", "Bootstrap", "CSS3"],
      github: "https://github.com/sabik-ahmd/textutils",
      live: "https://text-check.netlify.app",
      features: [
        "Multiple case conversion options",
        "Word and character counter",
        "Text analysis statistics",
        "Copy to clipboard function",
        "Dark/Light theme toggle"
      ],
      highlights: ["Utility Tool", "Productivity", "Open Source"]
    },
    {
      id: 7,
      title: "Part Time Job Portal",
      category: "fullstack",
      description: "Full-stack React platform connecting college students with recruiters. Streamlines job searches and applications through an intuitive interface.",
      image: jobPortalImg,
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/sabik-ahmd/job-portal",
      live: "#",
      features: [
        "Student and recruiter profiles",
        "Job posting and applications",
        "Search and filter jobs",
        "Application tracking",
        "User authentication"
      ],
      highlights: ["Full-stack", "MERN Stack", "Career Platform"]
    },
    {
      id: 8,
      title: "Online Exam Proctoring System",
      category: "fullstack",
      description: "AI-powered exam proctoring system using Django with computer vision and ML to detect cheating, providing monitoring and detailed student behavior reports.",
      image: examImg,
      technologies: ["Django", "Python", "OpenCV", "Machine Learning", "PostgreSQL"],
      github: "#",
      live: "#",
      features: [
        "Face detection and tracking",
        "Cheating behavior detection",
        "Real-time exam monitoring",
        "Student behavior analytics",
        "Detailed proctoring reports"
      ],
      highlights: ["AI/ML", "Computer Vision", "Academic"]
    },
    {
      id: 9,
      title: "Task Manager Pro",
      category: "react",
      description: "Feature-rich task management application with drag-and-drop organization, priority levels, and progress tracking.",
      image: "/projects/task-manager.png",
      technologies: ["React", "DnD Kit", "Local Storage", "Context API", "Tailwind CSS"],
      github: "https://github.com/sabik-ahmd/task-manager",
      live: "https://task-manager-pro-sabik.netlify.app",
      features: [
        "Drag-and-drop task organization",
        "Priority levels and tags",
        "Due date reminders",
        "Progress tracking dashboard",
        "Local storage persistence"
      ],
      highlights: ["Productivity", "Drag & Drop", "Local Storage"]
    }
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
            A collection of my recent work including e-commerce platforms, full-stack applications, 
            and AI-powered systems. Each project represents a step in my development journey.
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
            { label: "Open Source", value: projects.filter(p => p.github !== "#").length, color: "from-yellow-500 to-orange-500" },
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
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x200/0a192f/00ffff?text=" + project.title.replace(/ /g, '+');
                    }}
                  />
                  
                  {/* Highlights */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.highlights.map((highlight, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-xs font-medium text-white"
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
                  
                  <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
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
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
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
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        project.github !== "#"
                          ? "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10"
                          : "bg-white/5 text-gray-500 cursor-not-allowed opacity-50"
                      }`}
                    >
                      <FaGithub />
                      <span>Code</span>
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
                          : "bg-white/5 text-gray-400 cursor-not-allowed opacity-50"
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