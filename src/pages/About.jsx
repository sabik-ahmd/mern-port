import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaHeart, 
  FaLightbulb, 
  FaRocket, 
  FaGraduationCap,
  FaUsers,
  FaCode,
  FaLaptopCode,
  FaBrain
} from "react-icons/fa";
import { SiLeetcode, SiCodewars } from "react-icons/si";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  const personalInfo = {
    story: {
      title: "My Journey",
      content: "Hello! I'm Ahammad Sabik, a passionate and driven frontend developer who recently discovered my love for web development. My journey began with curiosity about how websites work, and it quickly turned into a passion for creating beautiful, functional web applications.",
      details: [
        "Started coding during my final year of college",
        "Completed a 6-month React.js internship that solidified my skills",
        "Built over 15 projects to practice and learn",
        "Constantly learning new technologies and best practices"
      ]
    },
    personality: {
      title: "My Mindset",
      content: "As a fresh developer, I bring enthusiasm, adaptability, and a strong willingness to learn. I believe in clean code, user-centered design, and continuous improvement.",
      traits: [
        { name: "Problem Solver", icon: "🧩", color: "#3B82F6" },
        { name: "Detail Oriented", icon: "🔍", color: "#10B981" },
        { name: "Team Player", icon: "🤝", color: "#8B5CF6" },
        { name: "Fast Learner", icon: "⚡", color: "#F59E0B" },
        { name: "Creative Thinker", icon: "💡", color: "#EC4899" },
        { name: "Persistent", icon: "💪", color: "#EF4444" }
      ]
    },
    goals: {
      title: "My Goals",
      content: "I'm looking for opportunities where I can contribute, learn, and grow alongside experienced developers. My goal is to become a well-rounded full-stack developer.",
      milestones: [
        "Join a team where I can make meaningful contributions",
        "Master React.js ecosystem and modern frontend tools",
        "Learn backend development (Node.js, Express, MongoDB)",
        "Contribute to open-source projects",
        "Build scalable, production-ready applications"
      ]
    }
  };

  const dailyRoutine = [
    { time: "Morning", activity: "Code practice & learning new concepts", icon: "☕" },
    { time: "Afternoon", activity: "Project development & implementation", icon: "💻" },
    { time: "Evening", activity: "Review code & plan next day tasks", icon: "📝" },
    { time: "Night", activity: "Read tech blogs & documentation", icon: "📚" }
  ];

  const codingPlatforms = [
    { name: "LeetCode", icon: <SiLeetcode />, problems: 150, color: "#FFA116" },
    { name: "CodeWars", icon: <SiCodewars />, rank: "5 kyu", color: "#B1361E" },
    { name: "GitHub", icon: "💾", contributions: "Daily", color: "#4078c0" },
    { name: "Stack Overflow", icon: "🔗", reputation: "Growing", color: "#F48024" }
  ];

  const learningFocus = [
    { topic: "Advanced React Patterns", status: "In Progress", icon: <FaCode /> },
    { topic: "TypeScript Mastery", status: "Learning", icon: <FaLaptopCode /> },
    { topic: "System Design", status: "Next", icon: <FaBrain /> },
    { topic: "Testing (Jest, React Testing)", status: "Learning", icon: "🧪" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0a192f] to-gray-900 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-4xl opacity-10"
          animate={{ y: [0, -30, 0], rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
        >
          <FaCode />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 text-3xl opacity-10"
          animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        >
          <FaHeart />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3 text-5xl opacity-10"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity }}
        >
          <FaLightbulb />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-400 text-sm font-medium">More Than Just Code</span>
          </div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500">
              About Me
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg max-w-3xl mx-auto mb-8"
          >
            Passionate developer, continuous learner, and problem solver who believes in 
            creating technology that makes a difference.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {[
              { label: "Hours of Code", value: "1000+", color: "from-purple-500 to-pink-500" },
              { label: "Projects Built", value: "15+", color: "from-cyan-500 to-blue-500" },
              { label: "Learning Days", value: "365+", color: "from-green-500 to-emerald-500" },
              { label: "Cups of Coffee", value: "∞", color: "from-yellow-500 to-orange-500" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all"
              >
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.keys(personalInfo).map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-lg transition-all ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {personalInfo[tab].title}
                </motion.button>
              ))}
            </div>

            {/* Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 mb-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {personalInfo[activeTab].title}
              </h3>
              <p className="text-gray-300 mb-6">
                {personalInfo[activeTab].content}
              </p>
              
              {activeTab === "story" && (
                <ul className="space-y-3">
                  {personalInfo.story.details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <span className="text-purple-400">▸</span>
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              )}

              {activeTab === "personality" && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {personalInfo.personality.traits.map((trait, index) => (
                    <motion.div
                      key={trait.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="p-4 bg-white/5 rounded-lg border border-white/10 text-center group hover:border-white/20 transition-all"
                    >
                      <div className="text-3xl mb-2" style={{ color: trait.color }}>
                        {trait.icon}
                      </div>
                      <div className="font-medium text-white group-hover:text-purple-300 transition-colors">
                        {trait.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "goals" && (
                <div className="space-y-4">
                  {personalInfo.goals.milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all group"
                    >
                      <div className="text-2xl text-purple-400 group-hover:scale-110 transition-transform">
                        <FaRocket />
                      </div>
                      <div>
                        <div className="text-white font-medium mb-1 group-hover:text-purple-300 transition-colors">
                          {milestone}
                        </div>
                        <div className="text-sm text-gray-400">
                          Actively working towards this goal
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Daily Routine */}
            <div className="p-6 md:p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-400">📅</span> My Daily Routine
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dailyRoutine.map((item, index) => (
                  <motion.div
                    key={item.time}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">{item.icon}</div>
                      <div className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.time}
                      </div>
                    </div>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                      {item.activity}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-8">
            {/* Coding Platforms */}
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FaGraduationCap className="text-purple-400" />
                Coding Practice
              </h3>
              <div className="space-y-4">
                {codingPlatforms.map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-xl" style={{ color: platform.color }}>
                        {platform.icon}
                      </div>
                      <span className="text-white group-hover:text-purple-300 transition-colors">
                        {platform.name}
                      </span>
                    </div>
                    <div className="text-sm text-gray-300 bg-white/10 px-3 py-1 rounded-full">
                      {platform.problems || platform.rank || platform.contributions || platform.reputation}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Learning Focus */}
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FaLightbulb className="text-yellow-400" />
                Current Learning Focus
              </h3>
              <div className="space-y-4">
                {learningFocus.map((item, index) => (
                  <motion.div
                    key={item.topic}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-purple-400">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-white group-hover:text-purple-300 transition-colors">
                          {item.topic}
                        </div>
                        <div className="text-sm text-gray-400">
                          {item.status}
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaHeart className="text-red-400" />
                My Philosophy
              </h3>
              <p className="text-gray-300 mb-4">
                "Write code that not only works but is also clean, maintainable, 
                and a joy for other developers to read and extend."
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Always learning, always improving
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-white/10 max-w-2xl mx-auto hover:border-purple-500/30 transition-all duration-300">
            <div className="text-4xl">✨</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-300">
              I'm excited about opportunities to contribute, learn, and grow. 
              If you're looking for a passionate developer who's eager to make an impact, let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
              >
                See My Work
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;