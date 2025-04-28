"use client";

import { useEffect, useState } from "react";
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
  FaBrain,
  FaRobot,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiDjango,
  SiKubernetes,
  SiUnrealengine,
  SiTensorflow,
} from "react-icons/si";

// Organize skills by categories
const skillCategories = [
  {
    name: "Frontend",
    color: "from-orange-400 to-red-500",
    skills: [
      {
        skill: "HTML",
        icon: <FaHtml5 className="text-orange-500" />,
      },
      {
        skill: "CSS",
        icon: <FaCss3Alt className="text-blue-500" />,
      },
      {
        skill: "JavaScript",
        icon: <FaJsSquare className="text-yellow-400" />,
      },
      {
        skill: "React",
        icon: <FaReact className="text-cyan-400" />,
      },
    ],
  },
  {
    name: "Backend",
    color: "from-green-400 to-teal-500",
    skills: [
      {
        skill: "Node.js",
        icon: <FaNodeJs className="text-green-400" />,
      },
      {
        skill: "Express.js",
        icon: <SiExpress className="text-gray-400" />,
      },
      {
        skill: "Django",
        icon: <SiDjango className="text-green-400" />,
      },
      {
        skill: "MongoDB",
        icon: <SiMongodb className="text-green-500" />,
      },
    ],
  },
  {
    name: "Programming Languages",
    color: "from-blue-400 to-indigo-500",
    skills: [
      {
        skill: "Python",
        icon: <FaPython className="text-blue-400" />,
      },
      {
        skill: "Java",
        icon: <FaJava className="text-red-400" />,
      },
      {
        skill: "C++",
        icon: <FaCuttlefish className="text-blue-400" />,
      },
    ],
  },
  {
    name: "Game Development",
    color: "from-purple-400 to-pink-500",
    skills: [
      {
        skill: "Unity",
        icon: <FaUnity className="text-white" />,
      },
      {
        skill: "Unreal Engine",
        icon: <SiUnrealengine className="text-gray-300" />,
      },
    ],
  },
  {
    name: "AI & Machine Learning",
    color: "from-yellow-400 to-orange-500",
    skills: [
      {
        skill: "TensorFlow",
        icon: <SiTensorflow className="text-orange-400" />,
      },
      {
        skill: "Machine Learning",
        icon: <FaBrain className="text-purple-400" />,
      },
      {
        skill: "Artificial Intelligence",
        icon: <FaRobot className="text-blue-400" />,
      },
    ],
  },
  {
    name: "DevOps & Infrastructure",
    color: "from-cyan-400 to-sky-500",
    skills: [
      {
        skill: "Kubernetes",
        icon: <SiKubernetes className="text-blue-500" />,
      },
      {
        skill: "AWS",
        icon: <FaAws className="text-yellow-400" />,
      },
      {
        skill: "Git",
        icon: <FaGitAlt className="text-purple-400" />,
      },
    ],
  },
];

// Interactive skill card component
const SkillCard = ({ skill, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-xl p-6 h-full border border-transparent transition-all duration-300 ${
          isHovered
            ? "border-indigo-500 shadow-lg shadow-indigo-500/20 -translate-y-2"
            : ""
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div
            className={`text-4xl mb-4 transition-all duration-300 ${
              isHovered ? "scale-125" : ""
            }`}
          >
            {skill.icon}
          </div>
          <h3 className="text-center font-medium text-gray-200">
            {skill.skill}
          </h3>

          <div
            className={`w-16 h-0.5 mt-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded transition-all duration-500 ${
              isHovered ? "w-full" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

// Category section component
const SkillCategory = ({ category, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section
      className={`mb-12 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h2
        className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent inline-block`}
      >
        {category.name}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category.skills.map((skill, idx) => (
          <SkillCard key={idx} skill={skill} delay={idx * 100} />
        ))}
      </div>
    </section>
  );
};

export default function Skills() {
  // Interactive background elements
  const [orbs, setOrbs] = useState([]);
  const [titleVisible, setTitleVisible] = useState(false);

  // Generate random orbs for the background
  useEffect(() => {
    const newOrbs = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 150 + 50,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
      color: `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(
        Math.random() * 100
      )}, ${Math.floor(Math.random() * 255)}, 0.05)`,
    }));

    setOrbs(newOrbs);

    const animateOrbs = () => {
      setOrbs((prevOrbs) =>
        prevOrbs.map((orb) => ({
          ...orb,
          x: (orb.x + orb.vx + 100) % 100,
          y: (orb.y + orb.vy + 100) % 100,
        }))
      );
    };

    const interval = setInterval(animateOrbs, 50);

    // Show title with delay
    const titleTimer = setTimeout(() => setTitleVisible(true), 300);

    return () => {
      clearInterval(interval);
      clearTimeout(titleTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6 relative overflow-hidden">
      {/* Animated orbs background */}
      <div className="fixed inset-0 z-0">
        {orbs.map((orb, index) => (
          <div
            key={index}
            className="absolute rounded-full blur-3xl"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              backgroundColor: orb.color,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Animated Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-12"
          }`}
        >
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-500 pt-8 pb-4">
            Technical Skills
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hover over each skill to learn more about my expertise
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, idx) => (
            <SkillCategory key={idx} category={category} index={idx} />
          ))}
        </div>
      </div>

      {/* Background mesh gradient */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 z-0"></div>

      {/* CSS for additional effects */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}
