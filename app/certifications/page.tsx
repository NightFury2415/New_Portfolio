"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMedal, FaBrain, FaDatabase, FaCode, FaRobot } from "react-icons/fa";

const certifications = [
  {
    title: "Google Data Structures and Algorithms Certificate",
    date: "August 2022",
    issuer: "Google",
    icon: <FaCode className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-400",
    shadowColor: "blue-500/30",
    description:
      "Advanced algorithms and data structures for optimized solutions",
  },
  {
    title: "Google IT and Python Programming Certificate",
    date: "May 2023",
    issuer: "Google",
    icon: <FaDatabase className="w-8 h-8" />,
    color: "from-green-500 to-emerald-400",
    shadowColor: "green-500/30",
    description: "Comprehensive Python programming and IT fundamentals",
  },
  {
    title: "Google Project Management Certificate",
    date: "November 2024",
    issuer: "Google",
    icon: <FaMedal className="w-8 h-8" />,
    color: "from-yellow-500 to-amber-400",
    shadowColor: "yellow-500/30",
    description:
      "Professional-level project management methodologies and tools",
  },
  {
    title: "Web Development and MERN Stack Certificate",
    date: "May 2024",
    issuer: "MongoDB University",
    icon: <FaCode className="w-8 h-8" />,
    color: "from-purple-500 to-violet-400",
    shadowColor: "purple-500/30",
    description:
      "Full-stack development with MongoDB, Express, React and Node.js",
  },
  {
    title: "Microsoft AI and ML Certificate",
    date: "January 2025",
    issuer: "Microsoft",
    icon: <FaRobot className="w-8 h-8" />,
    color: "from-pink-500 to-rose-400",
    shadowColor: "pink-500/30",
    description:
      "Applied artificial intelligence and machine learning techniques",
  },
];

// Certificate card component with 3D hover effect
const CertificateCard = ({ cert, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      }}
      className="perspective-1000 w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full h-full transform-style-3d relative"
        animate={{
          rotateX: isHovered ? "10deg" : "0deg",
          rotateY: isHovered ? "-15deg" : "0deg",
          z: isHovered ? "30px" : "0px",
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Main Card */}
        <div
          className={`rounded-2xl overflow-hidden bg-gradient-to-br ${cert.color} p-0.5 h-full transform-style-3d relative`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              cert.color
            } opacity-0 transition-opacity duration-500 blur-2xl ${
              isHovered ? "opacity-70" : ""
            }`}
            style={{ zIndex: -1 }}
          />

          <div className="bg-gray-900 rounded-2xl p-6 h-full flex flex-col justify-between relative z-10 backface-hidden">
            {/* Certificate Content */}
            <div>
              <div
                className={`p-3 rounded-full bg-gradient-to-br ${cert.color} w-14 h-14 flex items-center justify-center mb-4 shadow-lg text-white`}
              >
                {cert.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{cert.description}</p>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="font-medium text-gray-300">{cert.issuer}</span>
              <span className="font-medium text-gray-300">{cert.date}</span>
            </div>

            {/* Shimmering Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-300 ${
                isHovered ? "shimmer" : ""
              }`}
              style={{ backgroundSize: "200% 100%", zIndex: 2 }}
            />
          </div>
        </div>

        {/* Card Shadow */}
        <div
          className={`absolute -bottom-4 left-2 right-2 h-8 rounded-full bg-${
            cert.shadowColor
          } blur-xl opacity-0 transition-opacity duration-500 -z-10 ${
            isHovered ? "opacity-40" : ""
          }`}
        />
      </motion.div>
    </motion.div>
  );
};

export default function Certifications() {
  // Floating dots background effect
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // Create floating dots
    const newDots = Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      velocity: {
        x: (Math.random() - 0.5) * 0.1,
        y: (Math.random() - 0.5) * 0.1,
      },
    }));

    setDots(newDots);

    const animateDots = () => {
      setDots((prevDots) =>
        prevDots.map((dot) => ({
          ...dot,
          x: (dot.x + dot.velocity.x + 100) % 100,
          y: (dot.y + dot.velocity.y + 100) % 100,
        }))
      );
    };

    const interval = setInterval(animateDots, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4 relative overflow-hidden">
      {/* Floating dots background */}
      <div className="fixed inset-0 z-0">
        {dots.map((dot, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              opacity: dot.opacity,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with floating effect */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 pt-8 pb-4">
              Professional Certifications
            </h1>
          </motion.div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Industry-recognized achievements that validate my expertise and
            commitment to continuous learning
          </p>

          {/* Decorative underline */}
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mt-6"
            animate={{
              width: ["8rem", "16rem", "8rem"],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* 3D Grid of Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {certifications.map((cert, idx) => (
            <div key={idx} className="h-80">
              <CertificateCard cert={cert} index={idx} />
            </div>
          ))}
        </div>

        {/* Certification stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl flex items-center space-x-6">
            <div className="text-3xl text-cyan-400">
              <FaMedal />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">5+</h3>
              <p className="text-gray-400">Professional Certifications</p>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl flex items-center space-x-6">
            <div className="text-3xl text-purple-400">
              <FaBrain />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">3+</h3>
              <p className="text-gray-400">Industry Leaders</p>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl flex items-center space-x-6">
            <div className="text-3xl text-pink-400">
              <FaCode />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">500+</h3>
              <p className="text-gray-400">Hours of Training</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS for custom effects */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        @keyframes shimmer {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          20% {
            opacity: 0.3;
          }
          80% {
            opacity: 0.3;
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }

        .shimmer {
          animation: shimmer 2s forwards;
        }
      `}</style>
    </div>
  );
}
