import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaPaperPlane,
  FaCheckCircle,
  FaClock,
  FaUser,
  FaLightbulb,
  FaArrowRight,
  FaWhatsapp,
  FaExternalLinkAlt,
  FaCopy,
  FaCheck
} from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // EmailJS Configuration - Replace with your actual IDs
  const EMAILJS_SERVICE_ID = "service_rxub9kl";
  const EMAILJS_TEMPLATE_ID = "template_0lhi388";
  const EMAILJS_USER_ID = "pwHspfsaItxnBOYh7";

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-cyan-400" />,
      title: "Location",
      value: "Banglore, Mangalore",
      subtitle: "Karnataka, India",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30"
    },
    {
      icon: <FaPhone className="text-green-400" />,
      title: "Phone",
      value: "+91 96868 93983",
      subtitle: "Available Mon-Fri, 10AM-6PM",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      action: () => window.open('tel:+919686893983')
    },
    {
      icon: <FaEnvelope className="text-purple-400" />,
      title: "Email",
      value: "sabik.mh@gmail.com",
      subtitle: "Response within 24 hours",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      action: () => {
        navigator.clipboard.writeText("sabik.mh@gmail.com");
        setCopiedEmail(true);
        toast.success('Email copied to clipboard!');
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    }
  ];

  const socialLinks = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      url: "mailto:sabik.mh@gmail.com?subject=Contact from Portfolio&body=Hi Ahammad,%0A%0AI saw your portfolio and wanted to connect...",
      color: "hover:bg-red-500 hover:border-red-500",
      description: "Send me an email directly"
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      url: "https://wa.me/919686893983?text=Hi%20Ahammad,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect...",
      color: "hover:bg-green-500 hover:border-green-500",
      description: "Chat with me on WhatsApp"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/ahammadsabik",
      color: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
      description: "Connect professionally"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/ahammadsabik",
      color: "hover:bg-gray-800 hover:border-gray-800",
      description: "Check my projects"
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      url: "https://twitter.com/ahammadsabik",
      color: "hover:bg-[#1DA1F2] hover:border-[#1DA1F2]",
      description: "Follow for updates"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS Integration
    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_USER_ID
      );

      if (result.text === 'OK') {
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast.success('Message sent successfully!');
        
        // Reset form after successful submission
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("sabik.mh@gmail.com");
    toast.success('Email copied to clipboard!');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhoneToClipboard = () => {
    navigator.clipboard.writeText("+919686893983");
    toast.success('Phone number copied to clipboard!');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-[#0a192f] to-gray-900 overflow-hidden">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid #333'
          },
          success: {
            iconTheme: {
              primary: '#22c55e',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />

      {/* Simple Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0a192f] to-gray-900" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-gray-700 mb-6">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-cyan-300">Get In Touch</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Let's </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Connect
                </span>
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                I'm actively seeking opportunities as a Frontend Developer (React.js) where I can 
                contribute to building clean, user-focused web experiences. I'm also open to freelance 
                projects and collaborations — if you have an idea or opportunity, I'd love to connect 
                and discuss how we can bring it to life.
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-3 gap-6 mb-16"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border ${info.borderColor} hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gray-800/50">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <FaClock />
                          <span>{info.subtitle}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pl-16">
                      <div className="flex items-center gap-2">
                        <p className="text-xl font-bold text-white">{info.value}</p>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={info.action}
                          className="p-1.5 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                        >
                          {copiedEmail && info.title === "Email" ? (
                            <FaCheck className="text-green-400 text-sm" />
                          ) : (
                            <FaCopy className="text-gray-400 hover:text-white text-sm transition-colors" />
                          )}
                        </motion.button>
                      </div>
                      
                      {info.title === "Phone" && (
                        <div className="flex items-center gap-2 mt-2">
                          <motion.a
                            href="tel:+919686893983"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-sm px-3 py-1 bg-green-500/20 text-green-300 rounded-full hover:bg-green-500/30 transition-colors"
                          >
                            Call
                          </motion.a>
                          <motion.button
                            onClick={copyPhoneToClipboard}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-sm px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full hover:bg-blue-500/30 transition-colors"
                          >
                            Copy
                          </motion.button>
                        </div>
                      )}
                      
                      {info.title === "Email" && (
                        <div className="flex items-center gap-2 mt-2">
                          <motion.a
                            href="mailto:sabik.mh@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-sm px-3 py-1 bg-red-500/20 text-red-300 rounded-full hover:bg-red-500/30 transition-colors"
                          >
                            Email
                          </motion.a>
                          <motion.button
                            onClick={copyEmailToClipboard}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-sm px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full hover:bg-purple-500/30 transition-colors"
                          >
                            Copy
                          </motion.button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
                  {/* Form Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                      <FaPaperPlane className="text-2xl text-cyan-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                      <p className="text-gray-400">I'll respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Success Message */}
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <FaCheckCircle className="text-2xl text-green-400" />
                        <div>
                          <h3 className="font-semibold text-white">Message Sent Successfully!</h3>
                          <p className="text-gray-300 text-sm">
                            Thank you for reaching out. I'll get back to you within 24 hours.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Contact Form */}
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                          <FaUser className="text-gray-400" />
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                          <FaEnvelope className="text-gray-400" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                        placeholder="Project discussion / Job opportunity"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 ${
                        isSubmitting
                          ? "bg-gradient-to-r from-gray-700 to-gray-800 cursor-not-allowed"
                          : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FaArrowRight />
                        </>
                      )}
                    </motion.button>
                  </form>

                  {/* Response Time */}
                  <div className="mt-8 pt-6 border-t border-gray-800">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                      <FaClock />
                      <span>Typical response time: 4-6 hours</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Social & Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-8"
              >
                {/* Connect Online Section */}
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                      <FaLightbulb className="text-2xl text-purple-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Connect Online</h2>
                      <p className="text-gray-400">Multiple ways to reach me</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ x: 10 }}
                        className={`flex items-center justify-between p-4 bg-gray-800/30 border border-gray-700 rounded-xl group hover:border-gray-600 transition-all duration-300 ${social.color}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-transparent transition-colors duration-300">
                            <span className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300">
                              {social.icon}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">{social.label}</h3>
                            <p className="text-sm text-gray-400">{social.description}</p>
                          </div>
                        </div>
                        <FaExternalLinkAlt className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                      </motion.a>
                    ))}
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <motion.a
                      href="https://wa.me/919686893983?text=Hi%20Ahammad,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect..."
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl flex flex-col items-center gap-2 hover:border-green-400 transition-all duration-300 group"
                    >
                      <FaWhatsapp className="text-green-400 text-2xl group-hover:scale-110 transition-transform" />
                      <div className="text-center">
                        <span className="font-semibold text-white block">WhatsApp</span>
                        <span className="text-xs text-gray-400">Quick chat</span>
                      </div>
                    </motion.a>
                    
                    <motion.a
                      href="mailto:sabik.mh@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Ahammad,%0A%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20connect..."
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-xl flex flex-col items-center gap-2 hover:border-red-400 transition-all duration-300 group"
                    >
                      <FaEnvelope className="text-red-400 text-2xl group-hover:scale-110 transition-transform" />
                      <div className="text-center">
                        <span className="font-semibold text-white block">Email</span>
                        <span className="text-xs text-gray-400">Direct email</span>
                      </div>
                    </motion.a>
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Availability</h3>
                  <div className="space-y-4">
                    {[
                      { day: "Monday - Friday", time: "06:00 AM - 11:59 PM", status: "Available" },
                      { day: "Saturday", time: "08:00 AM - 10:00 PM", status: "Limited" },
                      { day: "Sunday", time: "Not Available", status: "Unavailable" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0"
                      >
                        <div>
                          <p className="text-white font-medium">{item.day}</p>
                          <p className="text-sm text-gray-400">{item.time}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.status === "Available" 
                            ? "bg-green-500/20 text-green-400" 
                            : item.status === "Limited"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                        }`}>
                          {item.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-center p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl border border-cyan-500/20"
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    Ready to Start a Project?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Let's schedule a quick call to discuss your requirements
                  </p>
                  <motion.a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    <FaClock />
                    Schedule a Call
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16 text-center"
            >
              <p className="text-gray-400 max-w-2xl mx-auto">
                Whether you have a project in mind, want to discuss potential opportunities, 
                or just want to connect about web development — I'd love to hear from you!
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;