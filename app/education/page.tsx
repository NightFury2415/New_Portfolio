"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <div className="min-h-screen bg-black text-white py-16 relative">
      {/* Animated Title with Glowing Text */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 pt-8 pb-4"
      >
        Education
      </motion.h1>

      {/* Education Card without Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-6 p-8 rounded-xl bg-[#1e293b] border-2 border-cyan-500/60 shadow-lg hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300"
      >
        <h2 className="text-2xl font-bold text-cyan-400 mb-2">
          San Francisco State University
        </h2>
        <div className="text-md text-gray-400">
          <p>
            <span className="font-semibold text-pink-400">Degree:</span>{" "}
            <span className="text-cyan-400">
              Bachelor's in Computer Science
            </span>
          </p>
          <p>
            <span className="font-semibold text-pink-400">Duration:</span>{" "}
            <span className="text-cyan-400">Aug 2021 – May 2025</span>
          </p>
          <p>
            <span className="font-semibold text-pink-400">GPA:</span>{" "}
            <span className="text-cyan-400">3.9 / 4.0</span>
          </p>
          <p>
            <span className="font-semibold text-pink-400">Dean’s List:</span>{" "}
            <span className="text-cyan-400">8 times</span>
          </p>
          <p>
            <span className="font-semibold text-pink-400">
              Relevant Courses:
            </span>
            <span className="text-cyan-400">
              {" "}
              Data Structures, Algorithms, AI, ML
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
