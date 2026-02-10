import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { 
  FaBars, 
  FaTimes, 
  FaSun, 
  FaMoon, 
  FaDownload, 
  FaRocket, 
  FaLightbulb,
  FaLinkedin,  // Added this
  FaGithub,    // Added this
  FaTwitter    // Added this
} from "react-icons/fa";
import { HiHome, HiUser, HiFolder, HiCode, HiMail, HiSparkles } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Apply theme to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Set active section based on URL
  useEffect(() => {
    const path = location.pathname;
    const section = path === '/' ? 'home' : path.substring(1).toLowerCase();
    
    if (['home', 'about', 'projects', 'skills', 'contact'].includes(section)) {
      setActiveSection(section);
    } else {
      setActiveSection('home');
    }
    
    setIsOpen(false);
  }, [location]);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { id: "home", label: "Home", icon: <HiHome />, path: "/" },
    { id: "about", label: "About", icon: <HiUser />, path: "/about" },
    { id: "projects", label: "Projects", icon: <HiFolder />, path: "/projects" },
    { id: "skills", label: "Skills", icon: <HiCode />, path: "/skills" },
    { id: "contact", label: "Contact", icon: <HiMail />, path: "/contact" },
  ];

  const handleDownloadCV = () => {
    // Create a confetti effect on download
    const colors = ['#06B6D4', '#3B82F6', '#8B5CF6', '#EC4899'];
    for (let i = 0; i < 30; i++) {
      createConfetti(colors[Math.floor(Math.random() * colors.length)]);
    }
    
    const link = document.createElement('a');
    link.href = "/Ahammad_Sabik_CV.pdf";
    link.download = "Ahammad_Sabik_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const createConfetti = (color) => {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.background = color;
    confetti.style.borderRadius = '50%';
    confetti.style.zIndex = '9999';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = '0';
    confetti.style.pointerEvents = 'none';
    document.body.appendChild(confetti);

    const animation = confetti.animate([
      { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
      { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
      duration: 1000 + Math.random() * 1000,
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    });

    animation.onfinish = () => confetti.remove();
  };

  return (
    <>
      {/* Animated Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navbar Container - Updated for mobile */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.6,
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled 
            ? "bg-gradient-to-b from-gray-900/95 via-[#0a192f]/95 to-gray-900/95 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-white/10" 
            : "bg-gradient-to-b from-gray-900/60 via-[#0a192f]/60 to-transparent backdrop-blur-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Optimized for mobile */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 md:space-x-3 group"
            >
              <Link to="/" onClick={() => setActiveSection("home")} className="relative">
                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                {/* Logo Content */}
                <div className="relative flex items-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="mr-2 text-lg md:text-xl"
                  >
                    🚀
                  </motion.div>
                  <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Sb.dev
                  </span>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="ml-1 md:ml-2"
                  >
                    <HiSparkles className="text-yellow-400 w-3 h-3 md:w-4 md:h-4" />
                  </motion.div>
                </div>
              </Link>
              
              {/* Status Badge - Hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="hidden md:flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-cyan-500/20 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="relative">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full blur animate-ping" />
                </div>
                <span className="text-xs font-medium bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Available
                </span>
              </motion.div>
            </motion.div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    to={item.path}
                    onClick={() => setActiveSection(item.id)}
                    className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <motion.span
                      animate={activeSection === item.id ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                      className={`text-lg ${
                        activeSection === item.id ? 'text-cyan-400' : ''
                      }`}
                    >
                      {item.icon}
                    </motion.span>
                    {item.label}
                    
                    {/* Hover underline effect */}
                    {hoveredItem === item.id && activeSection !== item.id && (
                      <motion.div
                        className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50"
                        layoutId="hoverUnderline"
                      />
                    )}
                  </Link>
                  
                  {/* Active indicator with glow */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-lg shadow-cyan-500/50"
                      initial={false}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 30 
                      }}
                    />
                  )}
                </motion.div>
              ))}

              {/* Divider */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.6 }}
                className="w-px h-8 bg-gradient-to-b from-transparent via-gray-600 to-transparent mx-2"
              />

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="relative p-2.5 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 backdrop-blur-sm group"
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500" />
                {isDarkMode ? (
                  <FaSun className="w-5 h-5 text-yellow-400 relative z-10" />
                ) : (
                  <FaMoon className="w-5 h-5 text-blue-400 relative z-10" />
                )}
              </motion.button>

              {/* Download CV Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <button
                  onClick={handleDownloadCV}
                  className="relative px-5 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 font-semibold rounded-xl border border-gray-700 hover:border-cyan-500/50 hover:text-white transition-all flex items-center gap-2 backdrop-blur-sm"
                >
                  <FaDownload className="w-4 h-4" />
                  <span>Resume</span>
                  <motion.span
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-xs text-cyan-400"
                  >
                    ↓
                  </motion.span>
                </button>
              </motion.div>

              {/* Premium CTA Button */}
              <Link to="/contact" onClick={() => setActiveSection("contact")}>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 40px -10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl border border-cyan-500/30 overflow-hidden group cursor-pointer"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <span className="relative flex items-center gap-2">
                    <FaLightbulb className="w-4 h-4" />
                    Let's Connect
                  </span>
                </motion.div>
              </Link>
            </div>

            {/* Mobile Menu Button Group */}
            <div className="flex md:hidden items-center gap-2">
              {/* Theme Toggle - Mobile */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all relative group"
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                {isDarkMode ? (
                  <FaSun className="w-5 h-5 text-yellow-400 relative z-10" />
                ) : (
                  <FaMoon className="w-5 h-5 text-blue-400 relative z-10" />
                )}
              </motion.button>

              {/* Download CV Button - Mobile */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleDownloadCV}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all relative group"
                title="Download CV"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <FaDownload className="w-5 h-5 relative z-10" />
              </motion.button>
              
              {/* Mobile Menu Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all relative group"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                {isOpen ? (
                  <FaTimes className="w-5 h-5 relative z-10" />
                ) : (
                  <FaBars className="w-5 h-5 relative z-10" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Updated for better mobile UX */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-30 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel - Improved mobile layout */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ 
                duration: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm md:hidden bg-gradient-to-b from-gray-900 via-[#0a192f] to-gray-900 backdrop-blur-xl shadow-2xl shadow-black/50 border-l border-white/10 z-40 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Header with close button */}
              <div className="sticky top-0 p-4 border-b border-white/10 bg-gradient-to-b from-gray-900 to-gray-900/80 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-bold">AS</span>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">Ahammad Sabik</div>
                      <div className="text-xs text-cyan-400">Frontend Developer</div>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-all"
                  >
                    <FaTimes className="w-5 h-5" />
                  </motion.button>
                </div>
                
                {/* Status Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-white/10 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full animate-pulse" />
                    </div>
                    <span className="text-sm font-medium text-white">Open for opportunities</span>
                  </div>
                  <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full">
                    React.js
                  </span>
                </motion.div>
              </div>

              {/* Menu Items - Improved spacing */}
              <div className="p-4 space-y-1">
                <div className="text-xs uppercase text-gray-500 font-semibold tracking-wider px-4 py-2">
                  Navigation
                </div>
                {navItems.map((item, index) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsOpen(false);
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 + 0.1 }}
                      whileHover={{ x: 5 }}
                      className={`relative p-4 rounded-xl transition-all duration-300 flex items-center gap-4 ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white border border-cyan-500/30"
                          : "text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10"
                      }`}
                    >
                      <motion.div
                        animate={activeSection === item.id ? { rotate: [0, 10, -10, 0] } : {}}
                        transition={{ duration: 0.5 }}
                        className={`text-xl ${
                          activeSection === item.id ? 'text-cyan-400' : ''
                        }`}
                      >
                        {item.icon}
                      </motion.div>
                      <div className="flex-1">
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs text-gray-400">
                          {item.id === 'home' && 'Welcome page'}
                          {item.id === 'about' && 'About me'}
                          {item.id === 'projects' && 'My projects'}
                          {item.id === 'skills' && 'Technical skills'}
                          {item.id === 'contact' && 'Get in touch'}
                        </div>
                      </div>
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="mobileActive"
                          className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        />
                      )}
                      <motion.div
                        className="opacity-50"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="p-4 border-t border-white/10">
                <div className="text-xs uppercase text-gray-500 font-semibold tracking-wider px-4 py-2">
                  Quick Actions
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <motion.a
                    href="mailto:sabik.mh@gmail.com"
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-red-400 transition-all active:scale-95"
                  >
                    <FaDownload className="text-red-400 text-lg" />
                    <span className="text-xs font-medium text-white">Email</span>
                  </motion.a>
                  <motion.a
                    href="https://wa.me/919686893983"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-green-400 transition-all active:scale-95"
                  >
                    <FaRocket className="text-green-400 text-lg" />
                    <span className="text-xs font-medium text-white">WhatsApp</span>
                  </motion.a>
                </div>
              </div>

              {/* Menu Footer with CTA */}
              <div className="sticky bottom-0 p-4 border-t border-white/10 bg-gradient-to-t from-gray-900 to-gray-900/80 backdrop-blur-sm">
                <div className="space-y-3">
                  <Link to="/contact" onClick={() => {
                    setActiveSection("contact");
                    setIsOpen(false);
                  }}>
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all text-center flex items-center justify-center gap-2 active:scale-95"
                    >
                      <FaLightbulb className="w-5 h-5" />
                      Start a Project
                    </motion.div>
                  </Link>
                  <button
                    onClick={handleDownloadCV}
                    className="w-full px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 font-semibold rounded-xl border border-gray-700 hover:border-cyan-500/50 hover:text-white transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <FaDownload />
                    Download Resume
                  </button>
                </div>
                
                {/* Social Links - Now with imported icons */}
                <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-white/10">
                  <motion.a
                    href="#"
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                  >
                    <FaGithub className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Action Button for Quick Contact - Mobile Only */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-4 right-4 z-40 md:hidden"
      >
        <Link to="/contact" onClick={() => setActiveSection("contact")}>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl shadow-2xl shadow-cyan-500/50 cursor-pointer active:scale-95"
            aria-label="Contact me"
          >
            <HiMail />
          </motion.div>
        </Link>
      </motion.div>
    </>
  );
};

export default Navbar;