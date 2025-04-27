"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaAws,
  FaCuttlefish,
  FaUnity,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiDjango,
  SiKubernetes,
  SiUnrealengine,
  SiTensorflow,
} from "react-icons/si";

const skills = [
  {
    skill: "HTML",
    percent: 90,
    icon: <FaHtml5 className="text-orange-500 w-6 h-6" />,
  },
  {
    skill: "CSS",
    percent: 95,
    icon: <FaCss3Alt className="text-blue-500 w-6 h-6" />,
  },
  {
    skill: "JavaScript",
    percent: 85,
    icon: <FaJsSquare className="text-yellow-400 w-6 h-6" />,
  },
  {
    skill: "Python",
    percent: 90,
    icon: <FaPython className="text-blue-400 w-6 h-6" />,
  },
  {
    skill: "Java",
    percent: 88,
    icon: <FaJava className="text-red-400 w-6 h-6" />,
  },
  {
    skill: "C++",
    percent: 85,
    icon: <FaCuttlefish className="text-blue-400 w-6 h-6" />,
  },
  {
    skill: "Node.js",
    percent: 85,
    icon: <FaNodeJs className="text-green-400 w-6 h-6" />,
  },
  {
    skill: "React",
    percent: 80,
    icon: <FaReact className="text-cyan-400 w-6 h-6" />,
  },
  {
    skill: "Express.js",
    percent: 75,
    icon: <SiExpress className="text-gray-400 w-6 h-6" />,
  },
  {
    skill: "Django",
    percent: 75,
    icon: <SiDjango className="text-green-400 w-6 h-6" />,
  },
  {
    skill: "MERN Stack",
    percent: 78,
    icon: <FaGitAlt className="text-purple-400 w-6 h-6" />,
  },
  {
    skill: "Kubernetes",
    percent: 65,
    icon: <SiKubernetes className="text-blue-500 w-6 h-6" />,
  },
  {
    skill: "Unity",
    percent: 88,
    icon: <FaUnity className="text-white w-6 h-6" />,
  },
  {
    skill: "Unreal Engine",
    percent: 82,
    icon: <SiUnrealengine className="text-gray-300 w-6 h-6" />,
  },
  {
    skill: "AWS",
    percent: 70,
    icon: <FaAws className="text-yellow-400 w-6 h-6" />,
  },
  {
    skill: "TensorFlow",
    percent: 80,
    icon: <SiTensorflow className="text-orange-400 w-6 h-6" />,
  },
  {
    skill: "MongoDB",
    percent: 80,
    icon: <SiMongodb className="text-green-500 w-6 h-6" />,
  },
  {
    skill: "Machine Learning (ML)",
    percent: 75,
    icon: <SiTensorflow className="text-orange-400 w-6 h-6" />,
  }, // ML added
  {
    skill: "Artificial Intelligence (AI)",
    percent: 80,
    icon: <SiTensorflow className="text-orange-400 w-6 h-6" />,
  }, // AI added
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      {/* Animated Title */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-500 pt-8 pb-4"
      >
        My Skills
      </motion.h1>

      {/* Skills List with Circular Progress Bars */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {skills.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4 justify-center">
              {item.icon}
              <span className="text-muted-foreground">{item.skill}</span>
            </div>

            {/* Circular Progress Bar with Glow & Animation */}
            <div className="relative flex justify-center items-center">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                className="transform rotate-90"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#4a5568"
                  strokeWidth="5"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#00bcd4"
                  strokeWidth="5"
                  fill="none"
                  strokeDasharray={`${item.percent * 2.83}, 283`}
                  strokeDashoffset="25"
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute text-xl font-bold text-cyan-400">
                {item.percent}%
              </div>
            </div>

            {/* Add Glow Animation on Hover */}
            <style jsx>{`
              svg:hover circle:nth-child(2) {
                stroke: #ff0080;
                filter: drop-shadow(0 0 8px #ff0080);
              }
            `}</style>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
