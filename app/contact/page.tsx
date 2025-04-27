"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react"; // Icons for Email, GitHub, LinkedIn

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      {/* Animated Heading */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500"
      >
        Get In Touch
      </motion.h1>

      {/* Contact Buttons */}
      <div className="flex justify-center gap-6">
        {/* Email Button */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:dmodi@sfsu.edu"
          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
        >
          <Mail className="h-5 w-5" /> Email Me
        </motion.a>

        {/* GitHub Button */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/nightfury2415"
          target="_blank"
          className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
        >
          <Github className="h-5 w-5" /> GitHub
        </motion.a>

        {/* LinkedIn Button */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.linkedin.com/in/dev-modi2415/"
          target="_blank"
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
        >
          <Linkedin className="h-5 w-5" /> LinkedIn
        </motion.a>
      </div>
    </div>
  );
}
