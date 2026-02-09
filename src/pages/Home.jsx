import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaCode, FaRocket, FaLightbulb, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { TbLayoutDashboard, TbBrandReact } from "react-icons/tb";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSkill, setActiveSkill] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax values - reduced on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "20%" : "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-10%" : "-30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, isMobile ? 1.02 : 1.1]);

  // Mouse following gradient - disable on mobile
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  // Skills data
  const skills = {
    frontend: [
      { 
        name: "React.js", 
        level: 85, 
        color: "#61DAFB", 
        icon: <TbBrandReact />, 
        experience: "6 months internship",
        projects: 8,
        description: "Built responsive UIs with hooks, context API, and modern React patterns",
        glow: "#61DAFB40"
      },
      { 
        name: "JavaScript", 
        level: 80, 
        color: "#F7DF1E", 
        icon: "JS", 
        experience: "1 year",
        projects: 12,
        description: "ES6+, DOM manipulation, async programming",
        glow: "#F7DF1E40"
      },
      { 
        name: "HTML5/CSS3", 
        level: 90, 
        color: "#E34F26", 
        icon: "</>", 
        experience: "1.5 years",
        projects: 15,
        description: "Semantic HTML, responsive design, CSS Grid/Flexbox",
        glow: "#E34F2640"
      },
      { 
        name: "Tailwind CSS", 
        level: 75, 
        color: "#06B6D4", 
        icon: "T", 
        experience: "6 months",
        projects: 6,
        description: "Utility-first CSS framework for rapid UI development",
        glow: "#06B6D440"
      },
      { 
        name: "TypeScript", 
        level: 65, 
        color: "#3178C6", 
        icon: "TS", 
        experience: "3 months",
        projects: 3,
        description: "Learning type safety and interfaces",
        glow: "#3178C640"
      },
    ],
    backend: [
      { 
        name: "Node.js", 
        level: 60, 
        color: "#339933", 
        icon: "N", 
        experience: "Learning",
        projects: 2,
        description: "Basics of server-side JavaScript",
        glow: "#33993340"
      },
      { 
        name: "Express.js", 
        level: 55, 
        color: "#000000", 
        icon: "E", 
        experience: "Learning",
        projects: 2,
        description: "Building REST APIs",
        glow: "#00000040"
      },
      { 
        name: "MongoDB", 
        level: 50, 
        color: "#47A248", 
        icon: "M", 
        experience: "Learning",
        projects: 1,
        description: "NoSQL database basics",
        glow: "#47A24840"
      },
    ],
    tools: [
      { 
        name: "Git & GitHub", 
        level: 75, 
        color: "#F05032", 
        icon: "G", 
        experience: "8 months",
        projects: "All projects",
        description: "Version control, collaboration, branching strategies",
        glow: "#F0503240"
      },
      { 
        name: "VS Code", 
        level: 85, 
        color: "#007ACC", 
        icon: "VS", 
        experience: "1 year",
        projects: "All projects",
        description: "Extensive experience with extensions and debugging",
        glow: "#007ACC40"
      },
      { 
        name: "Figma", 
        level: 70, 
        color: "#F24E1E", 
        icon: "F", 
        experience: "4 months",
        projects: 5,
        description: "UI/UX design and prototyping",
        glow: "#F24E1E40"
      },
      { 
        name: "Postman", 
        level: 65, 
        color: "#FF6C37", 
        icon: "P", 
        experience: "4 months",
        projects: 4,
        description: "API testing and documentation",
        glow: "#FF6C3740"
      },
    ],
  };

  // Animated background particles - fewer on mobile
  const Particle = ({ delay }) => (
    <motion.div
      className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
      initial={{ 
        opacity: 0,
        scale: 0,
        x: Math.random() * 100 + 'vw',
        y: Math.random() * 100 + 'vh'
      }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: `calc(${Math.random() * 100}vw + ${Math.sin(Date.now() / 1000) * (isMobile ? 20 : 50)}px)`,
        y: `calc(${Math.random() * 100}vh + ${Math.cos(Date.now() / 1000) * (isMobile ? 20 : 50)}px)`
      }}
      transition={{ 
        duration: 3,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2
      }}
    />
  );

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#0a192f] to-gray-900">
      {/* Animated Background - Simplified on mobile */}
      <div className="fixed inset-0 z-0">
        {!isMobile && (
          <>
            <motion.div 
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%, rgba(56, 189, 248, 0.15) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
                  'radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.15) 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              style={{
                x: mousePosition.x,
                y: mousePosition.y
              }}
            />
            
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/20 rounded-full hidden md:block"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-purple-500/20 rounded-full hidden lg:block"
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />
          </>
        )}
        
        {/* Simplified grid for mobile */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(56, 189, 248, ${isMobile ? '0.05' : '0.1'})' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}
        />
        
        {/* Reduced particles on mobile */}
        {Array.from({ length: isMobile ? 15 : 30 }).map((_, i) => (
          <Particle key={i} delay={i * 0.1} />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section - Improved mobile layout */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 md:space-y-8 order-2 lg:order-1"
              >
                {/* Fresh Graduate Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                    <div className="relative px-4 py-2 md:px-6 md:py-3 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700">
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full"
                        />
                        <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                          Frontend Developer
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Animated Name */}
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: isMobile ? 50 : 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold"
                  >
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                      Ahammad
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">
                      Sabik
                    </span>
                  </motion.h1>
                </div>

                {/* Type Animation */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl"></div>
                  <div className="relative">
                    <TypeAnimation
                      sequence={[
                        "React.js Developer",
                        1500,
                        "Frontend Developer",
                        1500,
                        "MERN Stack Learner",
                        1500,
                        "JavaScript Enthusiast",
                        1500,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent"
                    />
                  </div>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-300 text-base md:text-lg lg:text-xl max-w-xl"
                >
                  Passionate frontend developer with hands-on internship experience. 
                  Building modern web applications with React.js and constantly learning 
                  new technologies to grow as a full-stack developer.
                </motion.p>

                {/* CTA Buttons - Stack on mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-3 md:gap-4"
                >
                  <Link to="/projects">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl overflow-hidden text-center cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative flex items-center justify-center gap-3 font-semibold">
                        <FaRocket className="text-lg md:text-xl" />
                        <span>View Projects</span>
                      </span>
                    </motion.div>
                  </Link>
                  
                  <Link to="/contact">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-6 py-3 md:px-8 md:py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden text-center cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative flex items-center justify-center gap-3 font-semibold">
                        <FaLightbulb className="text-lg md:text-xl" />
                        <span>Let's Connect</span>
                      </span>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Quick Stats - Mobile only */}
                {isMobile && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="grid grid-cols-3 gap-3 pt-4"
                  >
                    <div className="text-center p-3 bg-gray-800/50 rounded-xl">
                      <div className="text-xl font-bold text-cyan-400">8+</div>
                      <div className="text-xs text-gray-400">Projects</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-xl">
                      <div className="text-xl font-bold text-purple-400">6M</div>
                      <div className="text-xs text-gray-400">Internship</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-xl">
                      <div className="text-xl font-bold text-green-400">10+</div>
                      <div className="text-xs text-gray-400">Skills</div>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Right Column - Profile Card */}
              <motion.div
                initial={{ opacity: 0, scale: isMobile ? 0.9 : 0.8, rotateY: isMobile ? 0 : 180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative order-1 lg:order-2"
              >
                {/* Floating Card Container */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative"
                >
                  {/* Glass Morphism Card */}
                  <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-6 md:p-8 shadow-2xl overflow-hidden">
                    {/* Animated Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-purple-500/0 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Profile Image */}
                    <div className="relative mx-auto w-40 h-40 md:w-64 md:h-64 mb-6 md:mb-8">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-gray-700"
                      >
                        {/* Replace with your image */}
                        <img 
                          src="/sabik2.png" 
                          alt="Ahammad Sabik"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-cyan-900/30 to-purple-900/30 flex items-center justify-center">
                                <div class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                  AS
                                </div>
                              </div>
                            `;
                          }}
                        />
                      </motion.div>
                      
                      {/* Floating Elements */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <FaCode className="text-white text-sm md:text-base" />
                      </motion.div>

                      {/* Rating Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                      >
                        <div className="px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs md:text-sm font-semibold text-white whitespace-nowrap shadow-lg flex items-center gap-1">
                          <FaStar className="text-xs" />
                          <span>sabik</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3 md:space-y-4">
                      {[
                        { icon: <FaMapMarkerAlt />, text: "Banglore, Mangalore", subtext: "Karnataka, India" },
                        { icon: <FaEnvelope />, text: "sabik.mh@gmail.com", subtext: "Primary contact" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="flex items-start gap-3 text-gray-300 hover:text-cyan-300 transition-colors group"
                        >
                          <div className="text-cyan-400 mt-0.5">{item.icon}</div>
                          <div>
                            <div className="font-medium">{item.text}</div>
                            <div className="text-xs text-gray-500 group-hover:text-gray-400">{item.subtext}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Social Links */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="flex justify-center gap-4 md:gap-6 mt-6 md:mt-8"
                    >
                      {[
                        { icon: <FaLinkedin />, color: "hover:text-[#0A66C2]", label: "LinkedIn", url: "https://linkedin.com/in/ahammadsabik" },
                        { icon: <FaGithub />, color: "hover:text-gray-300", label: "GitHub", url: "https://github.com/ahammadsabik" },
                        { icon: <FaTwitter />, color: "hover:text-[#1DA1F2]", label: "Twitter", url: "https://twitter.com/ahammadsabik" },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, y: -3 }}
                          whileTap={{ scale: 0.9 }}
                          className={`text-xl md:text-2xl text-gray-400 ${social.color} transition-all duration-300 group relative`}
                          aria-label={social.label}
                        >
                          {social.icon}
                          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {social.label}
                          </span>
                        </motion.a>
                      ))}
                    </motion.div>

                    {/* Quick Contact Button */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 }}
                      className="mt-6 md:mt-8"
                    >
                      <Link to="/contact">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 border border-cyan-500/30 rounded-xl text-center font-semibold flex items-center justify-center gap-3 hover:border-cyan-400 transition-colors group"
                        >
                          <FaLightbulb className="text-white" />
                          <span className="text-white">Quick Contact</span>
                          <FaExternalLinkAlt className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Tech Stack Preview - Mobile only */}
                {isMobile && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mt-6 grid grid-cols-4 gap-2"
                  >
                    {["React", "JS", "CSS", "API"].map((tech, index) => (
                      <div key={index} className="text-center p-2 bg-gray-800/30 rounded-lg">
                        <div className="text-xs font-semibold text-cyan-300">{tech}</div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section - Responsive grid */}
        <section className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center mb-8 md:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-gray-700 mb-3 md:mb-4">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-xs md:text-sm font-semibold text-cyan-300">Skills & Expertise</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                <span className="text-white">Technical </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Proficiency
                </span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                Skills honed through internship, personal projects, and continuous learning
              </p>
            </motion.div>

            {/* Interactive Skill Categories - Scrollable on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex overflow-x-auto md:overflow-visible pb-4 md:pb-0 mb-8 md:mb-12 gap-2 md:gap-3"
            >
              {Object.keys(skills).map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeCategory === category
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                  style={{
                    background: activeCategory === category 
                      ? `linear-gradient(135deg, ${skills[category][0].color}40, ${skills[category][1].color}40)`
                      : 'rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-gray-700"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 text-sm md:text-base">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            {/* Animated Skills Grid - Responsive */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
              >
                {skills[activeCategory].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: isMobile ? 1.02 : 1.05, 
                      y: isMobile ? -5 : -10,
                      boxShadow: isMobile ? `0 10px 20px ${skill.glow}` : `0 20px 40px ${skill.glow}`
                    }}
                    onMouseEnter={() => !isMobile && setActiveSkill(skill.name)}
                    onMouseLeave={() => !isMobile && setActiveSkill(null)}
                    className="relative group"
                  >
                    <div 
                      className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-4 md:p-6 overflow-hidden transition-all duration-300"
                      style={{
                        borderColor: activeSkill === skill.name ? skill.color : undefined
                      }}
                    >
                      <div className="relative flex items-center justify-between mb-4 md:mb-6">
                        <div className="flex items-center gap-3 md:gap-4">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-lg md:text-xl font-bold"
                            style={{ 
                              backgroundColor: `${skill.color}20`,
                              color: skill.color
                            }}
                          >
                            {skill.icon}
                          </motion.div>
                          <div>
                            <h3 className="text-base md:text-xl font-bold text-white">{skill.name}</h3>
                            <p className="text-xs md:text-sm text-gray-400">{skill.experience}</p>
                          </div>
                        </div>
                        <div 
                          className="text-lg md:text-2xl font-bold"
                          style={{ color: skill.color }}
                        >
                          {skill.level}%
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative mb-3 md:mb-4">
                        <div className="h-1.5 md:h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                        {skill.description}
                      </p>

                      {/* Projects Count */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <TbLayoutDashboard className="text-gray-400 text-sm md:text-base" />
                          <span className="text-xs md:text-sm text-gray-400">
                            {typeof skill.projects === 'number' 
                              ? `${skill.projects} projects` 
                              : skill.projects}
                          </span>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-800 flex items-center justify-center"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full" style={{ backgroundColor: skill.color }} />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Skill Level Indicator - Stack on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 md:mt-12 p-4 md:p-6 bg-gradient-to-r from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center">
                {[
                  { label: "Beginner", color: "from-gray-500 to-gray-600", level: "< 40%" },
                  { label: "Intermediate", color: "from-cyan-500 to-blue-500", level: "40-70%" },
                  { label: "Advanced", color: "from-purple-500 to-pink-500", level: "70-90%" },
                  { label: "Expert", color: "from-yellow-500 to-orange-500", level: "90-100%" }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="space-y-2"
                  >
                    <div className={`h-1.5 md:h-2 rounded-full bg-gradient-to-r ${item.color}`} />
                    <div>
                      <div className="text-sm md:font-semibold text-white">{item.label}</div>
                      <div className="text-xs text-gray-400">{item.level}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section - Simplified on mobile */}
        <section className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-16"
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Journey
                </span>
                <span className="text-white"> So Far</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                My path from learning basics to becoming a React developer
              </p>
            </motion.div>

            {/* Timeline - Vertical on mobile */}
            <div className="relative">
              {/* Center Line - Hidden on mobile, show on tablet+ */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"
                />
              </div>

              {/* Timeline Items */}
              {[
  {
    "year": "2017-2019",
    "title": "SSLC",
    "desc": "Sri RamaKrishna High School "
  },
  {
    "year": "2019-2021",
    "title": "PUC (PCMB)",
    "desc": "GPUC Puttur "
  },
  {
    "year": "2021-2024",
    "title": "BSc (Computer Science & Maths)",
    "desc": "St. Philomena College "
  },
  {
    "year": "2024 - present",
    "title": "Mastering Frontend",
    "desc": "Built responsive websites with modern CSS & JavaScript"
  },
  {
    "year": "2025 - present",
    "title": "React.js Exploration",
    "desc": "Started learning React.js and modern frontend development"
  },
  {
    "year": "2023 Aug",
    "title": "React.js Internship",
    "desc": "6-month intensive internship building production projects"
  },
  {
    "year": "2024 Jan",
    "title": "Portfolio Development",
    "desc": "Building personal projects and expanding skill set"
  },
  {
    "year": "2024 Jul-Jan 2025",
    "title": "React JS Developer Internship",
    "desc": "Completed internship at THE SKYBRISK | Certificate ID: 20250320-0368"
  },
  {
    "year": "Present",
    "title": "Full-Stack Learning",
    "desc": "Learning Node.js and backend technologies"
  }
].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isMobile ? 0 : (index % 2 === 0 ? -50 : 50) }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative ${isMobile ? 'mb-6' : 'flex items-center mb-12'} ${
                    !isMobile && (index % 2 === 0 ? 'flex-row' : 'flex-row-reverse')
                  }`}
                >
                  {/* Timeline Node */}
                  <div className={`${isMobile ? 'absolute left-0 top-0 transform -translate-x-1/2' : 'absolute left-1/2 transform -translate-x-1/2'} z-10`}>
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-gray-900"
                    />
                  </div>

                  {/* Content Card */}
                  <div className={`${isMobile ? 'pl-8' : 'w-5/12'} ${!isMobile && (index % 2 === 0 ? 'pr-12' : 'pl-12')}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="p-4 md:p-6 bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700"
                    >
                      <div className="inline-block px-2 py-1 md:px-3 md:py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-2 md:mb-3">
                        <span className="text-xs md:text-sm font-semibold text-cyan-300">{item.year}</span>
                      </div>
                      <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm md:text-base">{item.desc}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Animated Background - Simplified on mobile */}
              {!isMobile && (
                <motion.div
                  animate={{ 
                    background: [
                      'conic-gradient(from 0deg, #0ea5e9, #8b5cf6, #0ea5e9)',
                      'conic-gradient(from 90deg, #0ea5e9, #8b5cf6, #0ea5e9)',
                      'conic-gradient(from 180deg, #0ea5e9, #8b5cf6, #0ea5e9)',
                      'conic-gradient(from 270deg, #0ea5e9, #8b5cf6, #0ea5e9)'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 rounded-3xl p-[1px]"
                >
                  <div className="absolute inset-0 bg-gray-900 rounded-3xl" />
                </motion.div>
              )}

              {/* Content */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl p-6 md:p-8 lg:p-12">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="inline-block mb-4 md:mb-6"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-gray-700 flex items-center justify-center">
                      <FaRocket className="text-2xl md:text-3xl text-cyan-400" />
                    </div>
                  </motion.div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                    <span className="text-white">Ready to </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      Build Amazing Things
                    </span>
                  </h2>

                  <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
                    Eager to contribute to impactful projects, collaborate with talented teams, 
                    and continue growing as a developer.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                    <Link to="/contact">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 md:px-8 md:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <FaEnvelope className="text-sm md:text-base" />
                        <span>Get In Touch</span>
                      </motion.div>
                    </Link>
                    <Link to="/projects">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 md:px-8 md:py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl font-semibold flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <FaLightbulb className="text-sm md:text-base" />
                        <span>View My Work</span>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Floating Action Button - Smaller on mobile */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl md:text-2xl shadow-2xl z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ↑
      </motion.button>
    </div>
  );
};

export default Home;