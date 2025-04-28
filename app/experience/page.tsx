"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaGamepad, FaChevronDown, FaChevronUp } from "react-icons/fa";

const experiences = [
  {
    title: "Game Developer Intern — LawSchool AI",
    dates: "Aug 2024 – Jan 2025",
    icon: <FaGamepad className="text-cyan-400" />,
    color: "border-cyan-400",
    bgColor: "from-cyan-900/20 to-cyan-900/5",
    bullets: [
      "Directed a team of 7 to develop a 2D/3D educational game.",
      "Refined features based on 500+ user feedback.",
      "Improved feedback satisfaction by 30%.",
    ],
    skills: ["Unity", "C#", "3D Modeling", "Game Design", "Team Leadership"],
    description: "Led the development of an interactive educational game that simulates legal scenarios and challenges for law students. Collaborated with legal experts to ensure accuracy and educational value."
  },
  {
    title: "Full Stack Developer Intern — Glitter Fund",
    dates: "Jun 2023 – Nov 2023",
    icon: <FaCode className="text-purple-400" />,
    color: "border-purple-400",
    bgColor: "from-purple-900/20 to-purple-900/5",
    bullets: [
      "Built Django app with Tradier API integration.",
      "Boosted user retention by 20% through faster load times.",
    ],
    skills: ["Django", "Python", "RESTful APIs", "JavaScript", "React"],
    description: "Developed a financial application that streamlined investment tracking and analysis. Implemented real-time data visualization and optimized database queries for performance."
  },
  {
    title: "Full Stack Developer Intern — American Dog Society",
    dates: "Aug 2024 – Present",
    icon: <FaBriefcase className="text-pink-400" />,
    color: "border-pink-400",
    bgColor: "from-pink-900/20 to-pink-900/5",
    bullets: [
      "Developed 10+ websites using MERN stack.",
      "Enhanced site performance by 50%.",
    ],
    skills: ["MongoDB", "Express", "React", "Node.js", "Responsive Design"],
    description: "Creating custom web solutions for pet adoption services nationwide. Implemented a centralized management system that streamlined the adoption process and improved matching between pets and potential owners."
  },
];

// Individual experience card component
const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative mb-16 last:mb-0`}
    >
      {/* Timeline connector */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-800 to-transparent"></div>
      
      {/* Timeline dot with pulse effect */}
      <div className="absolute left-6 top-8 transform -translate-x-1/2 z-10">
        <motion.div 
          className={`w-6 h-6 rounded-full bg-black flex items-center justify-center border-2 ${experience.color}`}
          whileInView={{ 
            boxShadow: [
              `0 0 0 0 rgba(255,255,255,0)`,
              `0 0 0 10px rgba(255,255,255,0.1)`,
              `0 0 0 20px rgba(255,255,255,0)` 
            ]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3,
            repeatDelay: 1
          }}
          viewport={{ once: false, margin: "-100px" }}
        >
          {experience.icon}
        </motion.div>
      </div>

      {/* Content card */}
      <div className="ml-16 relative">
        <motion.div 
          className={`rounded-lg p-6 border border-gray-800 bg-gradient-to-br ${experience.bgColor} backdrop-blur-sm shadow-lg`}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-2xl font-bold text-white">
              {experience.title}
            </h3>
            <motion.button
              onClick={toggleExpand}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-400"
            >
              {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </motion.button>
          </div>
          
          <p className="text-gray-400 mb-4">{experience.dates}</p>

          {/* Bullet points always visible */}
          <ul className="space-y-2 mb-4">
            {experience.bullets.map((bullet, i) => (
              <motion.li 
                key={i} 
                className="flex items-start text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                viewport={{ once: true }}
              >
                <span className={`inline-block w-2 h-2 rounded-full ${experience.color.replace('border-', 'bg-')} mt-2 mr-2`}></span>
                {bullet}
              </motion.li>
            ))}
          </ul>

          {/* Expandable content */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-2 border-t border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-2">About the Role</h4>
              <p className="text-gray-400 mb-4">{experience.description}</p>
              
              <h4 className="text-lg font-semibold text-white mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`px-3 py-1 rounded-full text-sm bg-gray-800 ${experience.color.replace('border', 'text')}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-4 overflow-hidden relative">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px]"></div>
        <div className="absolute top-3/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-[150px]"></div>
      </div>
      
      {/* Main content */}
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Animated heading */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          >
            Experience Timeline
          </motion.h1>
          
          <motion.div
            className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          
          <motion.p 
            className="text-gray-400 mt-4 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            A journey through my professional career, highlighting key roles and accomplishments.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((experience, idx) => (
            <ExperienceCard key={idx} experience={experience} index={idx} />
          ))}
        </div>
        
        {/* Footer */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            <span className="inline-block mr-2">🚀</span>
            Always seeking new challenges and opportunities to grow
          </p>
        </motion.div>
      </div>
    </div>
  );
}