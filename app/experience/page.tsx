"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Game Developer Intern — LawSchool AI",
    dates: "Aug 2024 – Jan 2025",
    bullets: [
      "Directed a team of 7 to develop a 2D/3D educational game.",
      "Refined features based on 500+ user feedback.",
      "Improved feedback satisfaction by 30%.",
    ],
  },
  {
    title: "Full Stack Developer Intern — Glitter Fund",
    dates: "Jun 2023 – Nov 2023",
    bullets: [
      "Built Django app with Tradier API integration.",
      "Boosted user retention by 20% through faster load times.",
    ],
  },
  {
    title: "Full Stack Developer Intern — American Dog Society",
    dates: "Aug 2024 – Present",
    bullets: [
      "Developed 10+ websites using MERN stack.",
      "Enhanced site performance by 50%.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
      >
        Experience Timeline
      </motion.h1>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="timeline-container relative"
          >
            <div className={`timeline-item ${idx % 2 === 0 ? "animate" : ""}`}>
              <div className="timeline-dot animate"></div>
              <div className="timeline-item-content">
                <h3 className="text-2xl font-bold text-cyan-400">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground mb-4">{exp.dates}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-muted-foreground">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
