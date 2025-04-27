"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaJava,
  FaCuttlefish,
  FaDatabase,
  FaAws,
  FaNodeJs,
  FaReact,
  FaUnity,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiDjango,
  SiKubernetes,
  SiUnrealengine,
  SiTensorflow,
} from "react-icons/si";

const skillsLeft = [
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
    skill: "C#",
    percent: 83,
    icon: <FaCuttlefish className="text-cyan-400 w-6 h-6" />,
  },
  {
    skill: "SQL",
    percent: 80,
    icon: <FaDatabase className="text-green-400 w-6 h-6" />,
  },
  {
    skill: "MongoDB",
    percent: 80,
    icon: <SiMongodb className="text-green-500 w-6 h-6" />,
  },
  {
    skill: "AWS",
    percent: 70,
    icon: <FaAws className="text-yellow-400 w-6 h-6" />,
  },
];

const skillsRight = [
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
    icon: <FaLaptopCode className="text-purple-400 w-6 h-6" />,
  },
  {
    skill: "Kubernetes",
    percent: 65,
    icon: <SiKubernetes className="text-blue-500 w-6 h-6" />,
  },
  {
    skill: "Unity Engine",
    percent: 88,
    icon: <FaUnity className="text-white w-6 h-6" />,
  },
  {
    skill: "Unreal Engine",
    percent: 82,
    icon: <SiUnrealengine className="text-gray-300 w-6 h-6" />,
  },
  {
    skill: "Web Development",
    percent: 90,
    icon: <FaLaptopCode className="text-green-400 w-6 h-6" />,
  },
  {
    skill: "Data Structures",
    percent: 85,
    icon: <FaLaptopCode className="text-orange-300 w-6 h-6" />,
  },
  {
    skill: "AI / Machine Learning",
    percent: 80,
    icon: <SiTensorflow className="text-orange-400 w-6 h-6" />,
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500"
      >
        My Skills
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
        {[skillsLeft, skillsRight].map((column, colIdx) => (
          <div key={colIdx} className="space-y-8">
            {column.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: colIdx === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex items-center gap-3 mb-1">
                  {item.icon}
                  <div className="flex justify-between w-full">
                    <span className="text-muted-foreground">{item.skill}</span>
                    <span className="text-muted-foreground">
                      {item.percent}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percent}%` }}
                    transition={{ duration: 1 }}
                    className="bg-cyan-400 h-2.5 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
