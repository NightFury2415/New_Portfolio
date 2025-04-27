"use client";

import { motion } from "framer-motion";

const certifications = [
  "Google Data Structures and Algorithms Certificate – Aug 2022",
  "Google IT and Python Programming Certificate – May 2023",
  "Google Project Management Certificate – Nov 2024",
  "Web Development and MERN Stack Certificate – May 2024",
  "Microsoft AI and ML Certificate – Jan 2025",
];

export default function Certifications() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      {/* Animated Title */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 pt-8 pb-4"
      >
        Certifications
      </motion.h1>

      {/* Certifications Grid with Glow Effects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="p-8 rounded-xl bg-gradient-to-br from-[#0f172a] via-[#0a192f] to-[#0f172a] text-center border border-purple-500/30 shadow-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              <p className="text-lg font-semibold text-cyan-400">{cert}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
