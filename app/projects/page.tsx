"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Powered Stock Predictor",
    description: "ML model with 65% accuracy, web app in Django + React.",
    skills: ["Python", "TensorFlow", "React", "Django"],
  },
  {
    title: "The Butcher Game",
    description: "First-person horror game in Unity and C#.",
    skills: ["Unity", "C#", "Game Design"],
  },
  {
    title: "Job Application Scraper & AI Chatbot",
    description: "Scraped 10,000+ jobs, built AI Chatbot.",
    skills: ["Python", "Django", "Selenium", "NLP"],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      {/* Fixed Heading Style */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 pt-8 pb-4"
      >
        My Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-gradient-to-br from-[#0f172a] via-[#0a192f] to-[#0f172a] border border-purple-500/30 shadow-lg hover:scale-105 hover:shadow-purple-500/40 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-purple-400 mb-2">
              {project.title}
            </h2>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-purple-700/20 px-3 py-1 rounded-full text-purple-300 text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
