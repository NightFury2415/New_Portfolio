"use client";

import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { Moon, Sun, Github, Mail, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJava,
  FaCuttlefish,
  FaAws,
  FaUnity,
  FaWordpress,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiDjango,
  SiKubernetes,
  SiUnrealengine,
  SiMysql,
  SiTensorflow,
} from "react-icons/si";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground transition-colors duration-300">
        {/* Header */}
        <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                Dev Modi
              </span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="#passion" className="hover:text-primary">
                Passion
              </Link>
              <Link href="#projects" className="hover:text-primary">
                Projects
              </Link>
              <Link href="#experience" className="hover:text-primary">
                Experience
              </Link>
              <Link href="#skills" className="hover:text-primary">
                Skills
              </Link>
              <Link href="#certifications" className="hover:text-primary">
                Certifications
              </Link>
              <Link href="#about" className="hover:text-primary">
                About
              </Link>
              <Link href="#contact" className="hover:text-primary">
                Contact
              </Link>
            </nav>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="py-20 text-center flex flex-col items-center">
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
            <p className="text-muted-foreground max-w-2xl mb-8">
              I craft dynamic applications, immersive games, and full-stack
              solutions that create real-world impact.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <a href="/Dev_Modi_Resume_4.5.pdf" download>
                  <FileText className="h-4 w-4 mr-2" /> Download Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:dmodi@sfsu.edu">
                  <Mail className="h-4 w-4 mr-2" /> Contact Me
                </a>
              </Button>
            </div>
          </section>

          {/* Passion Section */}
          <section id="passion" className="py-16">
            <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              My Passions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "UI/UX Designing",
                  description:
                    "UI/UX designing is not just a profession for me; it's a passionate exploration of the intersection between creativity and user experience. I am drawn to the challenge of crafting designs that not only look visually appealing but also resonate with users on a deeper level. The joy of solving the puzzle of user interaction and creating intuitive, delightful experiences is what fuels my enthusiasm for UI/UX designing. It's a journey of continuous learning and innovation, where each project becomes an opportunity to elevate digital interactions and leave a lasting impact.",
                },
                {
                  title: "Game Development",
                  description:
                    "Game development is my passion, a journey where I blend technical prowess with a love for storytelling and interactive experiences. Crafting virtual worlds, developing gameplay mechanics, and breathing life into narratives are aspects that fuel my dedication to game development. I am drawn to the challenge of balancing creativity with technical intricacies, creating immersive experiences that resonate with players. Seeing a game evolve from concept to reality, with every line of code contributing to the player's journey, is not just a profession but a deeply satisfying artistic endeavor. Game development allows me to push boundaries, experiment with new technologies, and contribute to the ever-evolving world of interactive entertainment.",
                },
                {
                  title: "Web Development",
                  description:
                    "Web development is my forte and a canvas where I paint with code to bring digital experiences to life. I am passionate about crafting responsive and user-friendly websites that seamlessly blend functionality with aesthetics. The dynamic nature of web development, the constant evolution of technologies, and the challenge of creating intuitive interfaces drive my enthusiasm. From front-end design to back-end logic, each line of code contributes to building a cohesive online presence. It's not just about creating websites; it's about shaping the digital landscape and delivering meaningful online interactions. Web development is not just a skill; it's a continuous journey of innovation and problem-solving that I eagerly embrace.",
                },
                {
                  title: "Full Stack Development",
                  description:
                    "Full-stack development is where my expertise seamlessly integrates both front-end and back-end technologies to create robust and dynamic web applications. I thrive on the challenge of working across the entire software stack, utilizing a diverse set of skills to bring projects from concept to completion. From crafting responsive user interfaces with HTML, CSS, and JavaScript to designing and implementing scalable server-side logic, I enjoy the versatility that full-stack development offers. It's the holistic approach to building applications that motivates me, ensuring a comprehensive understanding of both client and server components. With proficiency in databases, server management, and client-side frameworks, I am committed to delivering end-to-end solutions that not only meet but exceed user expectations. Full-stack development is not just about writing code; it's about creating cohesive, efficient, and user-centric applications that make a meaningful impact.",
                },
                {
                  title: "Frontend Development",
                  description:
                    "Front-end development is my creative playground, where I shape the visual and interactive aspects of digital experiences. With a keen eye for design and a love for user-centric interfaces, I specialize in translating ideas into visually stunning and intuitive websites. I enjoy the challenge of working at the forefront of technology, using HTML, CSS, and JavaScript to build responsive and engaging user interfaces. Front-end development allows me to bring designs to life, creating seamless and delightful user interactions that leave a lasting impression. It's the art of blending aesthetics with functionality, and I am passionate about creating immersive and accessible online experiences that captivate users from the moment they land on a webpage.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-gradient-to-br from-[#0f172a] via-[#0a192f] to-[#0f172a] p-6 shadow-lg border border-cyan-500/30 hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16">
            <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Powered Stock Predictor",
                  description:
                    "Built a machine learning model using Python and TensorFlow to predict stock prices based on 5 years of historical data. Created a web interface using Django and React to visualize 1,000+ trends monthly with 65% LSTM model accuracy.",
                  skills: ["Python", "TensorFlow", "React", "Django"],
                },
                {
                  title: "The Butcher Game",
                  description:
                    "Led a team to create a first-person horror game in Unity. Developed 10+ complex levels and 15+ core mechanics, published on itch.io with 120+ plays in the first two weeks.",
                  skills: ["Unity", "C#", "Game Design"],
                },
                {
                  title: "Job Application Scraper and AI Chatbot",
                  description:
                    "Developed an AI chatbot and web scraper using Python, Django, Selenium, BeautifulSoup, and NLP libraries like spaCy and NLTK. Automated LinkedIn job searches with 90% user satisfaction.",
                  skills: ["Python", "Django", "Selenium", "NLP (spaCy, NLTK)"],
                },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-gradient-to-br from-[#0f172a] via-[#0a192f] to-[#0f172a] p-6 shadow-lg border border-purple-500/30 hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-purple-700/20 px-3 py-1 rounded-full text-purple-300 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience Section */}
          <section id="experience" className="py-16">
            <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Work Experience
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Game Developer Intern — LawSchool AI",
                  dates: "Aug 2024 – Jan 2025",
                  bullets: [
                    "Directed a collaborative team of 7 to develop a 2-D/3-D law-based educational game.",
                    "Tested with 200+ students, refined gameplay features based on feedback from 500+ testers.",
                    "Increased positive feedback by 30% via new event mechanisms and UX improvements.",
                  ],
                },
                {
                  title: "Full Stack Developer Intern — Glitter Fund",
                  dates: "Jun 2023 – Nov 2023",
                  bullets: [
                    "Built a Django web app sourcing real-time stock data via Tradier API, reducing retrieval time by 25%.",
                    "Optimized site load times by 40%, boosting user retention by 20%.",
                    "Deployed scalable frontend/backend systems hosted using Linode.",
                  ],
                },
                {
                  title: "Full Stack Developer Intern — American Dog Society",
                  dates: "Aug 2024 – Present",
                  bullets: [
                    "Developed and maintained 10+ websites using MERN stack.",
                    "Enhanced site performance by 50% and optimized frontend UX to improve user retention by 30%.",
                    "Designed MongoDB databases supporting 10,000+ entries, hosted using GoDaddy.",
                  ],
                },
              ].map((job, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-6 bg-gradient-to-br from-[#0f172a] to-[#0a192f] border border-cyan-500/30 shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-cyan-400 mb-1">
                    {job.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {job.dates}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {job.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-16">
            <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
              Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Left Column */}
              <div className="space-y-6">
                {[
                  {
                    skill: "HTML",
                    percent: 90,
                    icon: <FaHtml5 className="text-orange-500 w-6 h-6" />,
                  },
                  {
                    skill: "CSS",
                    percent: 95,
                    icon: <FaCss3Alt className="text-blue-500 w-6 h-6" />,
                  },
                  {
                    skill: "JavaScript",
                    percent: 85,
                    icon: <FaJsSquare className="text-yellow-400 w-6 h-6" />,
                  },
                  {
                    skill: "Python",
                    percent: 90,
                    icon: <FaPython className="text-blue-400 w-6 h-6" />,
                  },
                  {
                    skill: "Java",
                    percent: 88,
                    icon: <FaJava className="text-red-400 w-6 h-6" />,
                  },
                  {
                    skill: "C++",
                    percent: 85,
                    icon: <FaCuttlefish className="text-blue-400 w-6 h-6" />,
                  },
                  {
                    skill: "C#",
                    percent: 83,
                    icon: <FaCuttlefish className="text-cyan-400 w-6 h-6" />,
                  },
                  {
                    skill: "SQL",
                    percent: 80,
                    icon: <FaDatabase className="text-green-400 w-6 h-6" />,
                  },
                  {
                    skill: "MongoDB",
                    percent: 80,
                    icon: <SiMongodb className="text-green-500 w-6 h-6" />,
                  },
                  {
                    skill: "AWS",
                    percent: 70,
                    icon: <FaAws className="text-yellow-400 w-6 h-6" />,
                  },
                  {
                    skill: "Node.js",
                    percent: 85,
                    icon: <FaNodeJs className="text-green-400 w-6 h-6" />,
                  },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-3 mb-1">
                      {item.icon}
                      <div className="flex justify-between w-full">
                        <span className="text-muted-foreground">
                          {item.skill}
                        </span>
                        <span className="text-muted-foreground">
                          {item.percent}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-cyan-400 h-2.5 rounded-full animate-pulse"
                        style={{
                          width: `${item.percent}%`,
                          transition: "width 1s ease-in-out",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {[
                  {
                    skill: "React",
                    percent: 80,
                    icon: <FaReact className="text-cyan-400 w-6 h-6" />,
                  },
                  {
                    skill: "Express.js",
                    percent: 75,
                    icon: <SiExpress className="text-gray-400 w-6 h-6" />,
                  },
                  {
                    skill: "Django",
                    percent: 75,
                    icon: <SiDjango className="text-green-400 w-6 h-6" />,
                  },
                  {
                    skill: "MERN Stack",
                    percent: 78,
                    icon: <FaLaptopCode className="text-purple-400 w-6 h-6" />,
                  },
                  {
                    skill: "Kubernetes",
                    percent: 65,
                    icon: <SiKubernetes className="text-blue-500 w-6 h-6" />,
                  },
                  {
                    skill: "Unity Engine",
                    percent: 88,
                    icon: <FaUnity className="text-white w-6 h-6" />,
                  },
                  {
                    skill: "Unreal Engine",
                    percent: 82,
                    icon: <SiUnrealengine className="text-gray-300 w-6 h-6" />,
                  },
                  {
                    skill: "WordPress",
                    percent: 75,
                    icon: <FaWordpress className="text-blue-400 w-6 h-6" />,
                  },
                  {
                    skill: "Web Development",
                    percent: 90,
                    icon: <FaLaptopCode className="text-green-400 w-6 h-6" />,
                  },
                  {
                    skill: "Data Structures",
                    percent: 85,
                    icon: <FaLaptopCode className="text-orange-300 w-6 h-6" />,
                  },
                  {
                    skill: "AI / Machine Learning",
                    percent: 80,
                    icon: <SiTensorflow className="text-orange-400 w-6 h-6" />,
                  },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-3 mb-1">
                      {item.icon}
                      <div className="flex justify-between w-full">
                        <span className="text-muted-foreground">
                          {item.skill}
                        </span>
                        <span className="text-muted-foreground">
                          {item.percent}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div
                        className="bg-cyan-400 h-2.5 rounded-full animate-pulse"
                        style={{
                          width: `${item.percent}%`,
                          transition: "width 1s ease-in-out",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="py-16 text-center">
            <h2 className="text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 animate-pulse">
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Google Data Structures and Algorithms Certificate – Aug 2022",
                "Google IT and Python Programming Certificate – May 2023",
                "Google Project Management Certificate – Nov 2024",
                "Web Development and MERN Stack Certificate – May 2024",
                "Microsoft AI and ML Certificate – Jan 2025",
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-gradient-to-br from-[#0f172a] via-[#0a192f] to-[#0f172a] border border-purple-500/30 shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
                >
                  <p className="text-muted-foreground text-sm">{cert}</p>
                </div>
              ))}
            </div>
          </section>

          {/* About Me Section */}
          <section id="about" className="py-16 text-center animate-pulse">
            <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              About Me
            </h2>

            <p className="max-w-4xl mx-auto text-muted-foreground leading-relaxed text-lg">
              As a dedicated and ambitious individual, I am a third-year student
              with a passion for technology and a track record of success in
              various domains. Throughout my academic journey, I have
              demonstrated a commitment to excellence, consistently achieving
              high grades and actively engaging in extracurricular activities.
              As a Full Stack Developer, I have honed my skills in both
              front-end and back-end technologies, creating dynamic and
              responsive web applications. My proficiency extends to the realm
              of Game Development, where I have translated my creativity into
              interactive and captivating gaming experiences. As a Web
              Developer, I have successfully delivered projects that seamlessly
              integrate design and functionality, enhancing user experiences.
              <br />
              <br />
              Beyond the technical realm, my diverse interests include exploring
              emerging technologies, staying updated on industry trends, and
              cultivating a creative mindset. My enthusiasm for technology is
              evident in my proactive approach to learning and my eagerness to
              take on new challenges. I am driven by a genuine passion for
              innovation and seek opportunities to contribute my skills to
              impactful projects. This is one of the websites I have made for
              Video Games using Uses and Gratification Theory.
            </p>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 text-center">
            <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Get In Touch
            </h2>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <a href="mailto:dmodi@sfsu.edu">
                  <Mail className="h-4 w-4 mr-2" /> Email Me
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/nightfury2415" target="_blank">
                  <Github className="h-4 w-4 mr-2" /> GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/dev-modi2415/"
                  target="_blank"
                >
                  <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                </a>
              </Button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t py-8 text-center text-muted-foreground text-sm">
          <p>
            © {new Date().getFullYear()} Dev Modi. Built with ❤️ using Next.js
            and Tailwind CSS.
          </p>
        </footer>
      </div>
    </div>
  );
}
