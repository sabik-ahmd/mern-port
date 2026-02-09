import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbLayoutDashboard } from "react-icons/tb";

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [activeSkill, setActiveSkill] = useState(null);

  // Skills data (same as Home component)
  const skills = {
    frontend: [
      { 
        name: "React.js", 
        level: 85, 
        color: "#61DAFB", 
        icon: "⚛️", 
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

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#0a192f] to-gray-900">
      {/* Simple Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0a192f] to-gray-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Skills Section */}
        <section className="py-20 px-4 md:px-8 min-h-screen">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-gray-700 mb-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-cyan-300">Skills & Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Technical </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Proficiency
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Skills honed through internship, personal projects, and continuous learning
              </p>
            </motion.div>

            {/* Interactive Skill Categories */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {Object.keys(skills).map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "text-white shadow-2xl"
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
                  <span className="relative z-10">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            {/* Animated Skills Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {skills[activeCategory].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      boxShadow: `0 20px 40px ${skill.glow}`
                    }}
                    onMouseEnter={() => setActiveSkill(skill.name)}
                    onMouseLeave={() => setActiveSkill(null)}
                    className="relative group"
                  >
                    {/* Skill Card */}
                    <div 
                      className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 overflow-hidden transition-all duration-300"
                      style={{
                        borderColor: activeSkill === skill.name ? skill.color : undefined
                      }}
                    >
                      {/* Animated Background */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        style={{ backgroundColor: skill.color }}
                      />
                      
                      {/* Skill Header */}
                      <div className="relative flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold"
                            style={{ 
                              backgroundColor: `${skill.color}20`,
                              color: skill.color
                            }}
                          >
                            {skill.icon}
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                            <p className="text-sm text-gray-400">{skill.experience}</p>
                          </div>
                        </div>
                        <div 
                          className="text-2xl font-bold"
                          style={{ color: skill.color }}
                        >
                          {skill.level}%
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative mb-4">
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
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
                      <p className="text-gray-300 text-sm mb-4">{skill.description}</p>

                      {/* Projects Count */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <TbLayoutDashboard className="text-gray-400" />
                          <span className="text-sm text-gray-400">
                            {typeof skill.projects === 'number' 
                              ? `${skill.projects} projects` 
                              : skill.projects}
                          </span>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center"
                        >
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: skill.color }} />
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div 
                      className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"
                      style={{ backgroundColor: skill.color }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Skill Level Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-gradient-to-r from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {[
                  { label: "Beginner", color: "from-gray-500 to-gray-600", level: "< 40%", desc: "Learning fundamentals" },
                  { label: "Intermediate", color: "from-cyan-500 to-blue-500", level: "40-70%", desc: "Building projects" },
                  { label: "Advanced", color: "from-purple-500 to-pink-500", level: "70-90%", desc: "Production ready" },
                  { label: "Expert", color: "from-yellow-500 to-orange-500", level: "90-100%", desc: "Mastery level" }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="space-y-3"
                  >
                    <div className={`h-2 rounded-full bg-gradient-to-r ${item.color}`} />
                    <div>
                      <div className="font-semibold text-white text-lg">{item.label}</div>
                      <div className="text-sm text-gray-300 mb-1">{item.level}</div>
                      <div className="text-xs text-gray-400">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="inline-block p-6 bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-3">Continuous Learning</h3>
                <p className="text-gray-300 mb-4">
                  Currently expanding my skills in backend development and diving deeper into 
                  system design principles to become a well-rounded full-stack developer.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-sm">
                    Next.js Learning
                  </span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm">
                    Database Design
                  </span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm">
                    API Development
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-300 rounded-full text-sm">
                    Performance Optimization
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skill;