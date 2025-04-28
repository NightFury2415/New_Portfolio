"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaGraduationCap,
  FaMedal,
  FaChevronDown,
  FaChevronUp,
  FaLaptopCode,
  FaBrain,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";

// Education data
const education = {
  university: "San Francisco State University",
  degree: "Bachelor's in Computer Science",
  duration: "Aug 2021 – May 2025",
  gpa: "3.9 / 4.0",
  deansList: "8 times",
  relevantCourses: [
    { name: "Data Structures & Algorithms", icon: <FaLaptopCode /> },
    { name: "Artificial Intelligence", icon: <FaBrain /> },
    { name: "Machine Learning", icon: <FaBrain /> },
    { name: "Database Systems", icon: <FaDatabase /> },
    { name: "Computer Networks", icon: <FaNetworkWired /> },
    { name: "Software Engineering", icon: <FaLaptopCode /> },
  ],
  achievements: [
    "President of Computer Science Club (2023-2024)",
    "Undergraduate Research Assistant - AI Ethics Lab",
    "Hackathon Winner - SF Hacks 2023",
    "Scholarship Recipient - Tech Leaders of Tomorrow",
  ],
  skills: [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "React",
    "Node.js",
    "SQL",
    "MongoDB",
    "Machine Learning",
    "Data Analysis",
  ],
};

export default function Education() {
  const [isCoursesExpanded, setCoursesExpanded] = useState(false);
  const [isAchievementsExpanded, setAchievementsExpanded] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    // Delay the animation to make it visible after component loads
    const timer = setTimeout(() => {
      setAnimateProgress(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Floating particles effect
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-4 relative overflow-hidden">
      {/* Animated background particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-cyan-500/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [
              particle.opacity,
              particle.opacity * 1.5,
              particle.opacity,
            ],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glowing background circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[100px]"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Animated Title with Decorative Elements */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
              duration: 0.8,
            }}
            className="inline-block relative"
          >
            <motion.div
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-75 blur-sm"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <h1 className="relative text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 py-4 px-8">
              Education
            </h1>
          </motion.div>

          <motion.div
            className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full mt-4"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </div>

        {/* Main Education Card with 3D effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-16"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-75 blur-sm"></div>
          <div className="relative bg-gray-900/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 overflow-hidden">
            {/* University header with icon */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg">
                <FaUniversity className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                {education.university}
              </h2>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                className="p-4 rounded-xl bg-gray-800/50 border border-gray-700"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaGraduationCap className="text-cyan-400" />
                  <h3 className="font-semibold text-gray-300">Degree</h3>
                </div>
                <p className="text-lg text-white">{education.degree}</p>
              </motion.div>

              <motion.div
                className="p-4 rounded-xl bg-gray-800/50 border border-gray-700"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaMedal className="text-cyan-400" />
                  <h3 className="font-semibold text-gray-300">GPA</h3>
                </div>
                <p className="text-lg text-white">{education.gpa}</p>
                {/* Animated progress bar */}
                <div className="w-full h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: animateProgress ? "97.5%" : "0%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="p-4 rounded-xl bg-gray-800/50 border border-gray-700"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaGraduationCap className="text-purple-400" />
                  <h3 className="font-semibold text-gray-300">Duration</h3>
                </div>
                <p className="text-lg text-white">{education.duration}</p>
              </motion.div>

              <motion.div
                className="p-4 rounded-xl bg-gray-800/50 border border-gray-700"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaMedal className="text-purple-400" />
                  <h3 className="font-semibold text-gray-300">Dean's List</h3>
                </div>
                <p className="text-lg text-white">{education.deansList}</p>
              </motion.div>
            </div>

            {/* Expandable courses section */}
            <motion.div
              className="mb-6 p-4 rounded-xl bg-gray-800/50 border border-gray-700"
              whileHover={{ boxShadow: "0 0 15px rgba(56, 189, 248, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => setCoursesExpanded(!isCoursesExpanded)}
              >
                <div className="flex items-center gap-3">
                  <FaLaptopCode className="text-pink-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Relevant Courses
                  </h3>
                </div>
                {isCoursesExpanded ? (
                  <FaChevronUp className="text-gray-400" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: isCoursesExpanded ? "auto" : 0,
                  opacity: isCoursesExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {education.relevantCourses.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="text-pink-400">{course.icon}</span>
                      {course.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Expandable achievements section */}
            <motion.div
              className="p-4 rounded-xl bg-gray-800/50 border border-gray-700"
              whileHover={{ boxShadow: "0 0 15px rgba(56, 189, 248, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => setAchievementsExpanded(!isAchievementsExpanded)}
              >
                <div className="flex items-center gap-3">
                  <FaMedal className="text-pink-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Achievements & Activities
                  </h3>
                </div>
                {isAchievementsExpanded ? (
                  <FaChevronUp className="text-gray-400" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: isAchievementsExpanded ? "auto" : 0,
                  opacity: isAchievementsExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="pt-4 space-y-3">
                  {education.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-pink-400 mt-2"></span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-white">
            Technical Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {education.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.8 + index * 0.05,
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-sm"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">
            Always expanding my knowledge through coursework and self-guided
            learning
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium cursor-pointer"
          >
            View Full Transcript
          </motion.div>
        </motion.div>
      </div>

      {/* Custom animation styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
