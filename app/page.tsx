"use client";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion for animations

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Hello, I'm{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Dev Modi
          </span>
        </h1>
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          I'm a{" "}
          <Typewriter
            words={[
              "Web Developer",
              "Full Stack Developer",
              "Game Developer",
              "Frontend Developer",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          I craft dynamic applications, immersive games, and full-stack
          solutions that create real-world impact.
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <motion.a
            whileHover={{ scale: 1.1 }} // Slight scale-up effect
            whileTap={{ scale: 0.95 }} // Slight shrink on click
            href="/Dev_Modi_Resume.pdf"
            download // Corrected file path
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-purple-500/50 transition-all duration-300"
          >
            <FileText className="h-5 w-5" /> Download Resume
          </motion.a>

          {/* Animated Contact Me Button */}
          <motion.a
            whileHover={{ scale: 1.1 }} // Slight scale-up effect
            whileTap={{ scale: 0.95 }} // Slight shrink on click
            href="mailto:dmodi@sfsu.edu"
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <Mail className="h-5 w-5" /> Contact Me
          </motion.a>
        </div>

        {/* About Me Section */}
        <section className="max-w-4xl mx-auto text-lg leading-relaxed text-muted-foreground animate-pulse">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </h2>
          <p>
            I'm a dedicated and ambitious Computer Science student at San
            Francisco State University. Throughout my academic journey, I've
            demonstrated a commitment to excellence — achieving a 3.9 GPA,
            consistently being on the Dean’s List, and actively engaging in
            impactful projects.
          </p>
          <br />
          <p>
            As a Full Stack Developer and Game Developer, I specialize in
            creating dynamic applications, immersive experiences, and AI-driven
            solutions. I combine technical prowess with creativity to deliver
            user-centric designs and functional applications that make a real
            difference.
          </p>
          <br />
          <p>
            Outside of development, I have a passion for exploring emerging
            technologies, staying updated on industry trends, and continuously
            improving my skills. My goal is to blend innovation, storytelling,
            and technology to build products that have a lasting positive
            impact.
          </p>
        </section>
      </main>
    </div>
  );
}
