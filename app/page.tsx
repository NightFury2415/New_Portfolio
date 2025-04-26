"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Moon, Sun, Github, ExternalLink, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground transition-colors duration-300">
        <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Jane Doe
              </span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="#projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="ml-2">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="py-20 md:py-32 flex flex-col items-center text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Software Engineer &{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  Full-Stack Developer
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                I build accessible, user-friendly web applications with modern technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button className="gap-2">
                  <FileText className="h-4 w-4" />
                  View Resume
                </Button>
                <Button variant="outline" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project 1 */}
              <Card className="overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Project 1"
                    width={600}
                    height={400}
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>E-Commerce Platform</CardTitle>
                  <CardDescription>A full-stack e-commerce solution with payment processing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 2 */}
              <Card className="overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Project 2"
                    width={600}
                    height={400}
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Task Management App</CardTitle>
                  <CardDescription>A collaborative task management tool with real-time updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Prisma</Badge>
                    <Badge variant="secondary">Socket.io</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 3 */}
              <Card className="overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Project 3"
                    width={600}
                    height={400}
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>AI Content Generator</CardTitle>
                  <CardDescription>A tool that generates content using AI models</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">FastAPI</Badge>
                    <Badge variant="secondary">OpenAI</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* About Me Section */}
          <section id="about" className="py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
                  <Image src="/placeholder.svg?height=400&width=400" alt="Jane Doe" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">About Me</h2>
                <p className="text-muted-foreground">
                  I'm a passionate software engineer with 5+ years of experience building web applications. I specialize
                  in creating responsive, accessible, and performant web experiences using modern technologies.
                </p>
                <p className="text-muted-foreground">
                  My journey in software development began when I built my first website in college. Since then, I've
                  worked with startups and established companies to deliver high-quality software solutions that solve
                  real-world problems.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source
                  projects.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-16">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold">Skills & Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here are the technologies and tools I work with.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Frontend */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>HTML5</Badge>
                  <Badge>CSS3</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Redux</Badge>
                  <Badge>Framer Motion</Badge>
                </div>
              </div>

              {/* Backend */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>Python</Badge>
                  <Badge>Django</Badge>
                  <Badge>FastAPI</Badge>
                  <Badge>GraphQL</Badge>
                  <Badge>REST API</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>MongoDB</Badge>
                </div>
              </div>

              {/* Tools & Others */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Tools & Others</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>GitHub</Badge>
                  <Badge>Docker</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Vercel</Badge>
                  <Badge>Jest</Badge>
                  <Badge>Cypress</Badge>
                  <Badge>Figma</Badge>
                  <Badge>CI/CD</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16">
            <div className="max-w-md mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">Get In Touch</h2>
              <p className="text-muted-foreground">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="gap-2">
                  <Mail className="h-4 w-4" />
                  Email Me
                </Button>
                <Button variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t py-8">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
            <p className="text-sm mt-2">Built with Next.js and Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

