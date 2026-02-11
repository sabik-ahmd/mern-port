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
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFilePdf,
  FaEye,
  FaChevronDown,
  FaEnvelope,
  FaFileAlt,
  FaSpinner
} from "react-icons/fa";
import { HiHome, HiUser, HiFolder, HiCode, HiMail, HiSparkles } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [cvError, setCvError] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setShowDropdown(false);
        setShowResumeModal(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when menu or modal is open
  useEffect(() => {
    if (isOpen || showResumeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, showResumeModal]);

  const navItems = [
    { id: "home", label: "Home", icon: <HiHome />, path: "/" },
    { id: "about", label: "About", icon: <HiUser />, path: "/about" },
    { id: "projects", label: "Projects", icon: <HiFolder />, path: "/projects" },
    { id: "skills", label: "Skills", icon: <HiCode />, path: "/skills" },
    { id: "contact", label: "Contact", icon: <HiMail />, path: "/contact" },
  ];

  // ============== CV FUNCTIONS ==============
  
  const cvUrl = window.location.origin + '/Ahammad_Sabik_CV.pdf';

  // Download CV
  const handleDownloadCV = () => {
    try {
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Ahammad_Sabik_CV.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success message on mobile
      if (window.innerWidth < 768) {
        alert('CV download started! Check your downloads.');
      }
      
      // Trigger confetti
      triggerConfetti();
      
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
    
    setShowDropdown(false);
  };

  // View CV in new tab
  const handleViewCV = () => {
    try {
      window.open(cvUrl, '_blank');
    } catch (error) {
      console.error('View failed:', error);
      alert('Could not open CV. Please try downloading.');
    }
    setShowDropdown(false);
  };

  // Show Resume Modal
  const handleShowResume = () => {
    setIsLoading(true);
    setShowResumeModal(true);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    setShowDropdown(false);
    setIsOpen(false);
  };

  // Test if CV exists
  useEffect(() => {
    const testCV = async () => {
      try {
        const response = await fetch('/Ahammad_Sabik_CV.pdf', { method: 'HEAD' });
        setCvError(!response.ok);
        console.log('CV file exists:', response.ok);
      } catch (error) {
        setCvError(true);
        console.error('CV file not found:', error);
      }
    };
    testCV();
  }, []);

  // Confetti function
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

  const triggerConfetti = () => {
    const colors = ['#06B6D4', '#3B82F6', '#8B5CF6', '#EC4899'];
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        createConfetti(colors[Math.floor(Math.random() * colors.length)]);
      }, i * 20);
    }
  };

  // Resume Modal Component
  const ResumeModal = () => (
    <AnimatePresence>
      {showResumeModal && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50"
            onClick={() => setShowResumeModal(false)}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 z-50 overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-900 via-[#0a192f] to-gray-900 border border-white/20 shadow-2xl"
          >
            {/* Modal Header */}
            <div className="relative h-28 md:h-32 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border-b border-white/10">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl" />
              </div>
              
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowResumeModal(false)}
                className="absolute top-3 right-3 md:top-4 md:right-4 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-lg md:rounded-xl text-white transition-all z-10 backdrop-blur-sm border border-white/20"
              >
                <FaTimes className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
              
              {/* Header Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                      <FaFilePdf className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-1 -right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-gray-900"
                    />
                  </div>
                  <div>
                    <motion.h2 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
                    >
                      Ahammad Sabik
                    </motion.h2>
                    <motion.p 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-xs md:text-sm text-gray-400"
                    >
                      Graduate Developer
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Modal Body - PDF Viewer */}
            <div className="relative h-[calc(100%-7rem)] md:h-[calc(100%-8rem)] bg-gray-900/50">
              {isLoading ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <FaSpinner className="w-8 h-8 md:w-12 md:h-12 text-cyan-400" />
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-sm md:text-base text-gray-400"
                  >
                    Loading your resume...
                  </motion.p>
                </div>
              ) : (
                <iframe
                  src={cvUrl}
                  className="w-full h-full border-0"
                  title="Resume PDF Viewer"
                  onError={() => {
                    setIsLoading(false);
                    setCvError(true);
                  }}
                  onLoad={() => setIsLoading(false)}
                />
              )}
            </div>
            
            {/* Modal Footer - Mobile Optimized */}
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent border-t border-white/10">
              <div className="flex flex-col md:flex-row gap-2 md:gap-3 md:justify-end">
                <div className="flex gap-2 md:hidden">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleViewCV}
                    className="flex-1 px-4 py-3 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl flex items-center justify-center gap-2 border border-white/10 text-sm"
                  >
                    <FaEye className="w-4 h-4" />
                    Open
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDownloadCV}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl flex items-center justify-center gap-2 text-sm"
                  >
                    <FaDownload className="w-4 h-4" />
                    Save
                  </motion.button>
                </div>
                
                <div className="hidden md:flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleViewCV}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl flex items-center gap-2 border border-white/10"
                  >
                    <FaEye className="w-4 h-4" />
                    Open in Browser
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDownloadCV}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl flex items-center gap-2"
                  >
                    <FaDownload className="w-4 h-4" />
                    Download PDF
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Animated Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Resume Modal */}
      <ResumeModal />

      {/* Debug Warning */}
      {cvError && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-xl z-50 text-xs md:text-sm max-w-[90%] text-center">
          ⚠️ CV file not found! Put file in: public/Ahammad_Sabik_CV.pdf
        </div>
      )}

      {/* Navbar Container */}
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
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 md:space-x-3 group"
            >
              <Link to="/" onClick={() => setActiveSection("home")} className="relative">
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
              
              {/* Status Badge - Desktop only */}
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

            {/* Desktop Navigation */}
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
                    
                    {hoveredItem === item.id && activeSection !== item.id && (
                      <motion.div
                        className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50"
                        layoutId="hoverUnderline"
                      />
                    )}
                  </Link>
                  
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

              {/* Theme Toggle - Desktop */}
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

              {/* CV Button with Dropdown - Desktop */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  
                  {/* Main CV Button */}
                  <div className="flex">
                    <button
                      onClick={handleDownloadCV}
                      className="px-5 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 font-semibold rounded-l-xl border border-gray-700 hover:border-cyan-500/50 hover:text-white transition-all flex items-center gap-2 backdrop-blur-sm"
                    >
                      <FaFilePdf className="w-4 h-4" />
                      <span>CV</span>
                      <span className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-gradient-to-r from-green-500 to-cyan-500 text-white text-[10px] font-bold rounded-full">
                        NEW
                      </span>
                    </button>
                    
                    {/* Dropdown Toggle */}
                    <button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="px-2 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 rounded-r-xl border-l-0 border border-gray-700 hover:border-cyan-500/50 hover:text-white transition-all backdrop-blur-sm"
                    >
                      <FaChevronDown className={`w-3 h-3 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </motion.div>

                {/* Dropdown Menu - Desktop */}
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-56 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border border-white/10 shadow-xl backdrop-blur-xl overflow-hidden z-50"
                    >
                      <button
                        onClick={handleShowResume}
                        className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-3"
                      >
                        <FaFileAlt className="w-4 h-4 text-cyan-400" />
                        <span>Show Resume</span>
                      </button>
                      <button
                        onClick={handleViewCV}
                        className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-3 border-t border-white/10"
                      >
                        <FaEye className="w-4 h-4 text-blue-400" />
                        <span>View CV</span>
                      </button>
                      <button
                        onClick={handleDownloadCV}
                        className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-3 border-t border-white/10"
                      >
                        <FaDownload className="w-4 h-4 text-green-400" />
                        <span>Download CV</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact CTA */}
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
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                {isDarkMode ? (
                  <FaSun className="w-4 h-4 text-yellow-400 relative z-10" />
                ) : (
                  <FaMoon className="w-4 h-4 text-blue-400 relative z-10" />
                )}
              </motion.button>

              {/* CV Button - Mobile */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleShowResume}
                className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white transition-all relative group"
                title="View Resume"
              >
                <FaFilePdf className="w-4 h-4 relative z-10" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full" />
              </motion.button>
              
              {/* Mobile Menu Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all relative group"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                {isOpen ? (
                  <FaTimes className="w-4 h-4 relative z-10" />
                ) : (
                  <FaBars className="w-4 h-4 relative z-10" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Fully Optimized */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-30 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
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
              {/* Menu Header */}
              <div className="sticky top-0 p-4 border-b border-white/10 bg-gradient-to-b from-gray-900 to-gray-900/80 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">AS</span>
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
                
                {/* Status Badge - Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-white/10 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full blur animate-ping" />
                    </div>
                    <span className="text-sm font-medium text-white">Open for opportunities</span>
                  </div>
                  <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full">
                    React.js
                  </span>
                </motion.div>
              </div>

              {/* Navigation Items */}
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
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* CV Section - Mobile Optimized */}
              <div className="p-4 border-t border-white/10">
                <div className="text-xs uppercase text-gray-500 font-semibold tracking-wider px-4 py-2 mb-3">
                  Resume / CV
                </div>
                <div className="space-y-3">
                  {/* Show Resume Button */}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      handleShowResume();
                      setIsOpen(false);
                    }}
                    className="w-full p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/30"
                  >
                    <FaFileAlt className="w-5 h-5" />
                    Show Resume
                  </motion.button>
                  
                  {/* View CV Button */}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      handleViewCV();
                      setIsOpen(false);
                    }}
                    className="w-full p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl border border-cyan-500/30 text-white font-semibold flex items-center justify-center gap-3"
                  >
                    <FaEye className="w-5 h-5 text-cyan-400" />
                    View CV
                  </motion.button>
                  
                  {/* Download CV Button */}
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      handleDownloadCV();
                      setIsOpen(false);
                    }}
                    className="w-full p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-white/10 text-white font-semibold flex items-center justify-center gap-3"
                  >
                    <FaDownload className="w-5 h-5 text-green-400" />
                    Download CV
                  </motion.button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="p-4 border-t border-white/10">
                <div className="text-xs uppercase text-gray-500 font-semibold tracking-wider px-4 py-2 mb-2">
                  Quick Actions
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <motion.a
                    href="mailto:sabik.mh@gmail.com"
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-red-400 transition-all active:bg-red-500/20"
                  >
                    <FaEnvelope className="text-red-400 text-xl" />
                    <span className="text-xs font-medium text-white">Email</span>
                  </motion.a>
                  <motion.a
                    href="https://wa.me/919686893983"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-green-400 transition-all active:bg-green-500/20"
                  >
                    <FaRocket className="text-green-400 text-xl" />
                    <span className="text-xs font-medium text-white">WhatsApp</span>
                  </motion.a>
                </div>
              </div>

              {/* Menu Footer */}
              <div className="sticky bottom-0 p-4 border-t border-white/10 bg-gradient-to-t from-gray-900 to-gray-900/80 backdrop-blur-sm">
                <Link to="/contact" onClick={() => {
                  setActiveSection("contact");
                  setIsOpen(false);
                }}>
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl text-center shadow-lg shadow-cyan-500/30"
                  >
                    <FaLightbulb className="w-5 h-5 inline mr-2" />
                    Start a Project
                  </motion.div>
                </Link>
                
                {/* Social Links */}
                <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-white/10">
                  <motion.a
                    href="https://linkedin.com/in/ahammad-sabik"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/ahammadsabik"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/ahammadsabik"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Action Button for Resume - Mobile Only */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-4 right-4 z-40 md:hidden"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleShowResume}
          className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-cyan-500/50 cursor-pointer relative"
        >
          <FaFilePdf className="w-6 h-6" />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;