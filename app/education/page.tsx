"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400"
      >
        Education
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-6 p-8 rounded-xl bg-gradient-to-br from-[#0f172a] via-[#0a192f] to-[#0f172a] border border-cyan-400/40 shadow-md hover:scale-105 transition-all duration-300"
      >
        <h2 className="text-2xl font-bold text-cyan-400 mb-2">
          San Francisco State University
        </h2>
        <p className="text-muted-foreground">Bachelor’s in Computer Science</p>
        <p className="text-muted-foreground">Aug 2021 – May 2025</p>
        <p className="text-muted-foreground">GPA: 3.9 / 4.0</p>
        <p className="text-muted-foreground">Dean’s List (8 times)</p>
        <p className="text-muted-foreground">
          Relevant Courses: Data Structures, Algorithms, AI, ML
        </p>
      </motion.div>
    </div>
  );
}
