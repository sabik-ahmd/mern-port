import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaHeart, 
  FaReact, 
  FaNodeJs, 
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
  FaEnvelope,
  FaCode,
  FaRocket
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const techStack = [
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
    { name: "MongoDB", icon: <span className="text-lg font-bold">M</span>, color: "text-green-500" },
    { name: "Express", icon: <span className="text-lg font-bold">E</span>, color: "text-gray-400" },
    { name: "Tailwind", icon: <span className="text-lg font-bold">T</span>, color: "text-sky-400" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, label: "GitHub", url: "https://github.com/ahammadsabik", color: "hover:text-gray-300 hover:bg-gray-700" },
    { icon: <FaLinkedin />, label: "LinkedIn", url: "https://linkedin.com/in/ahammadsabik", color: "hover:text-white hover:bg-[#0A66C2]" },
    { icon: <FaTwitter />, label: "Twitter", url: "https://twitter.com/ahammadsabik", color: "hover:text-white hover:bg-[#1DA1F2]" },
    { icon: <FaInstagram />, label: "Instagram", url: "https://instagram.com/ahammadsabik", color: "hover:text-white hover:bg-gradient-to-r from-purple-500 to-pink-500" },
  ];

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Skills", path: "/skills" },
    { label: "Contact", path: "/contact" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black border-t border-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tech Stack */}
        <div className="py-12 border-b border-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full mb-4 border border-gray-700">
              <FaCode className="text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">Built With</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Modern Tech Stack
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex flex-col items-center"
                >
                  <div className={`p-3 rounded-xl bg-gray-800/50 border border-gray-700 ${tech.color} mb-2`}>
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🚀</div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Sb.dev
                </h3>
                <p className="text-sm text-gray-400">Frontend Developer</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting exceptional digital experiences with modern web technologies.
            </p>
            
            <div className="flex items-center gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className={`p-3 rounded-lg bg-gray-800/50 text-gray-400 ${social.color} transition-all duration-300 border border-gray-700`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block text-gray-400 hover:text-cyan-300 transition-colors duration-300 group"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Stay Updated</h4>
            <p className="text-gray-300 text-sm">
              Subscribe to get notified about new projects and updates.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={subscribed}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  subscribed
                    ? "bg-green-600 text-white"
                    : "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:opacity-90"
                }`}
              >
                {subscribed ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Subscribed!
                  </span>
                ) : "Subscribe"}
              </motion.button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <motion.a 
                href="mailto:sabik.mh@gmail.com" 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-300 transition-colors duration-300 group"
              >
                <div className="p-2 rounded-lg bg-cyan-900/30 border border-cyan-700/30 group-hover:border-cyan-500">
                  <FaEnvelope className="text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">sabik.mh@gmail.com</div>
                  <div className="text-xs text-gray-500">Response within 24 hours</div>
                </div>
              </motion.a>
            </div>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl text-gray-300 hover:text-white hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <FaRocket className="text-cyan-400" />
              <span>Start a Project</span>
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2"
              >
                © {new Date().getFullYear()} Ahammad Sabik
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaHeart className="text-red-500" />
                </motion.div>
                All rights reserved.
              </motion.span>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-300 hover:text-white hover:border-cyan-500 transition-all duration-300 group"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaArrowUp className="group-hover:text-cyan-400" />
              </motion.div>
              <span>Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;