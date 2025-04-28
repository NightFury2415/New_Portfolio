"use client";
import { Typewriter } from "react-simple-typewriter";
import { FileText, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Particles component
const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create 100 particles with random positions and sizes
    const newParticles = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 0.3 + 0.1,
      velocity: Math.random() * 0.2 + 0.1,
    }));

    setParticles(newParticles);

    // Animation loop
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          y:
            particle.y + particle.velocity > 100
              ? 0
              : particle.y + particle.velocity,
        }))
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}rem`,
            height: `${particle.size}rem`,
            boxShadow: `0 0 ${particle.size * 3}px ${
              particle.size
            }px rgba(255, 255, 255, 0.8)`,
            opacity: Math.random() * 0.6 + 0.2,
          }}
        />
      ))}
    </div>
  );
};

// Project Preview Component
const ProjectPreview = ({ title, description, tags }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        boxShadow: "0 10px 30px -10px rgba(138, 75, 175, 0.5)",
      }}
      className="bg-gray-900 rounded-xl p-6 border border-purple-500/20"
    >
      <h3 className="text-xl font-bold mb-2 text-gradient">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-800 rounded-full text-xs text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden relative">
      {/* Particles Background */}
      <Particles />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header/Nav */}
        <header className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-gradient">DM</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#about"
              className="hover:text-purple-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-purple-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="hover:text-purple-400 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="hover:text-purple-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-6 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
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
            <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
              I craft dynamic applications, immersive games, and full-stack
              solutions that create real-world impact.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Dev_Modi_Resume.pdf"
                download
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              >
                <FileText className="h-5 w-5" /> Download Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:dmodi@sfsu.edu"
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                <Mail className="h-5 w-5" /> Contact Me
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-16">
              <motion.a
                whileHover={{ y: -5 }}
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Featured Projects Preview */}
          <section className="mt-24 mb-20">
            <h2 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectPreview
                title="E-Commerce Platform"
                description="Modern online shopping experience with React and Node.js"
                tags={["React", "Node.js", "MongoDB"]}
              />
              <ProjectPreview
                title="3D Game Engine"
                description="Custom-built game engine with immersive physics"
                tags={["C++", "OpenGL", "Physics"]}
              />
              <ProjectPreview
                title="AI Assistant"
                description="Machine learning powered virtual assistant"
                tags={["Python", "TensorFlow", "NLP"]}
              />
            </div>
            <motion.div whileHover={{ scale: 1.05 }} className="mt-10">
              <Link
                href="/projects"
                className="inline-block px-6 py-3 border border-purple-500 rounded-full text-purple-400 hover:bg-purple-500/10 transition-all"
              >
                View All Projects
              </Link>
            </motion.div>
          </section>

          {/* About Me Section */}
          <section
            id="about"
            className="max-w-4xl mx-auto text-lg leading-relaxed bg-black/40 p-8 rounded-2xl backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                About Me
              </h2>
              <p className="text-gray-300 mb-4">
                I'm a dedicated and ambitious Computer Science student at San
                Francisco State University. Throughout my academic journey, I've
                demonstrated a commitment to excellence — achieving a 3.9 GPA,
                consistently being on the Dean's List, and actively engaging in
                impactful projects.
              </p>
              <p className="text-gray-300 mb-4">
                As a Full Stack Developer and Game Developer, I specialize in
                creating dynamic applications, immersive experiences, and
                AI-driven solutions. I combine technical prowess with creativity
                to deliver user-centric designs and functional applications that
                make a real difference.
              </p>
              <p className="text-gray-300">
                Outside of development, I have a passion for exploring emerging
                technologies, staying updated on industry trends, and
                continuously improving my skills. My goal is to blend
                innovation, storytelling, and technology to build products that
                have a lasting positive impact.
              </p>
            </motion.div>
          </section>

          {/* Skills Section Preview */}
          <section id="skills" className="mt-24">
            <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "JavaScript",
                "React",
                "Node.js",
                "TypeScript",
                "Python",
                "MongoDB",
                "C++",
                "Unity",
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-900/60 p-4 rounded-lg border border-purple-500/20 text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8 mt-20 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Dev Modi. All rights reserved.</p>
          <p className="mt-2">Made with passion and code.</p>
        </footer>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .text-gradient {
          background: linear-gradient(to right, #a78bfa, #ec4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
