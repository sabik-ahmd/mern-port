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
    { name: "MongoDB", color: "text-green-500" },
    { name: "Express", color: "text-gray-400" },
    { name: "Tailwind", color: "text-sky-400" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, label: "GitHub", url: "https://github.com/ahammadsabik", color: "hover:text-gray-300" },
    { icon: <FaLinkedin />, label: "LinkedIn", url: "https://linkedin.com/in/ahammadsabik", color: "hover:text-[#0A66C2]" },
    { icon: <FaTwitter />, label: "Twitter", url: "https://twitter.com/ahammadsabik", color: "hover:text-[#1DA1F2]" },
    { icon: <FaInstagram />, label: "Instagram", url: "https://instagram.com/ahammadsabik", color: "hover:text-[#E4405F]" },
  ];

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Skills", path: "/skills" },
    { label: "About", path: "/about" },
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tech Stack */}
        <div className="py-12 border-b border-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full mb-4">
              <FaCode className="text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">Built With</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Modern Tech Stack
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex flex-col items-center"
                >
                  <div className={`p-3 rounded-xl bg-gray-800 ${tech.color}`}>
                    {tech.icon || <span className="text-xl font-bold">{tech.name.charAt(0)}</span>}
                  </div>
                  <span className="text-xs mt-2 text-gray-300">{tech.name}</span>
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
                <h3 className="text-xl font-bold text-white">Sabik.dev</h3>
                <p className="text-sm text-gray-400">Frontend Developer</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm">
              Crafting exceptional digital experiences with modern web technologies.
            </p>
            
            <div className="flex items-center gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-gray-800 text-gray-400 ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.path}
                  className="block text-gray-400 hover:text-cyan-300 transition-colors"
                >
                  {link.label}
                </a>
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={subscribed}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  subscribed
                    ? "bg-green-600"
                    : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90"
                }`}
              >
                {subscribed ? "Subscribed! 🎉" : "Subscribe"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:sabik.mh@gmail.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-300 transition-colors"
              >
                <div className="p-2 rounded-lg bg-cyan-900/30">
                  <FaEnvelope className="text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">sabik.mh@gmail.com</div>
                </div>
              </a>
            </div>
            
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-300 hover:text-white hover:border-cyan-500 transition-all duration-300"
            >
              <FaRocket className="text-cyan-400" />
              <span>Start a Project</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                © {new Date().getFullYear()} Ahammad Sabik
                <FaHeart className="text-red-500 animate-pulse" />
                All rights reserved.
              </span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-gray-300 hover:text-white hover:border-cyan-500 transition-all duration-300"
            >
              <FaArrowUp />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;