"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  created_at: string;
}

interface LocalProject {
  title: string;
  description: string;
  skills: string[];
  link: string;
  image: string;
  year: number;
}

const localProjects: LocalProject[] = [
  {
    title: "AI Powered Stock Predictor",
    description: "Machine learning model with 65% accuracy for predicting stock market trends. Built with a Django backend and React frontend.",
    skills: ["Python", "TensorFlow", "React", "Django", "Data Science"],
    link: "#",
    image: "/api/placeholder/800/450",
    year: 2024
  },
  {
    title: "The Butcher Game",
    description: "Atmospheric first-person horror game developed in Unity and C#. Features dynamic lighting, AI-driven enemies, and immersive sound design.",
    skills: ["Unity", "C#", "Game Design", "3D Modeling"],
    link: "#",
    image: "/api/placeholder/800/450",
    year: 2023
  },
  {
    title: "Job Application Scraper & AI Chatbot",
    description: "Automated system that scraped 10,000+ job listings and uses NLP to create a personalized job search assistant chatbot.",
    skills: ["Python", "Django", "Selenium", "NLP", "AI"],
    link: "#",
    image: "/api/placeholder/800/450",
    year: 2022
  },
  {
    title: "Safe Walk",
    description: "Web app that helps users find the safest walking routes between two points in San Francisco. Integrates local crime data and real-time alerts near the user's location.",
    skills: ["React", "Leaflet.js", "Node.js", "REST APIs", "Geolocation"],
    link: "#",
    image: "/api/placeholder/800/450",
    year: 2024
  }
];


export default function Projects() {
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [activeTab, setActiveTab] = useState("featured");
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState<number | null>(null);
  const [availableYears, setAvailableYears] = useState<number[]>([]);
  const [combinedProjects, setCombinedProjects] = useState<(LocalProject | GitHubRepo)[]>([]);
  
  // Fetch GitHub repos
  useEffect(() => {
    async function fetchGitHubRepos(username: string, token?: string) {
      setIsLoading(true);
      const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=9`;

      try {
        const headers: HeadersInit = {};
        if (token) {
          headers["Authorization"] = `token ${token}`;
        }

        const response = await fetch(url, { headers });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos: GitHubRepo[] = await response.json();
        const filteredRepos = repos
          .filter(repo => !repo.name.includes('private'))
          .slice(0, 6);
          
        setGithubRepos(filteredRepos);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
        setIsLoading(false);
      }
    }

    const username = "NightFury2415"; // <-- Your username
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
    fetchGitHubRepos(username, token);
  }, []);

  // Combine projects and extract years for filtering
  useEffect(() => {
    // Create a combined list of all projects 
    const allProjects = [
      ...localProjects,
      ...githubRepos.map(repo => ({
        ...repo,
        year: new Date(repo.created_at).getFullYear()
      }))
    ];
    
    setCombinedProjects(allProjects);
    
    // Extract all unique years for filtering
    const years = new Set<number>();
    localProjects.forEach(project => years.add(project.year));
    githubRepos.forEach(repo => {
      const year = new Date(repo.created_at).getFullYear();
      years.add(year);
    });
    
    setAvailableYears(Array.from(years).sort((a, b) => b - a)); // Sort years in descending order
  }, [githubRepos]);

  // Card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Filter projects based on search term and year
  const filteredProjects = combinedProjects.filter(project => {
    const title = 'title' in project ? project.title : formatRepoName(project.name);
    const description = 'description' in project ? project.description : project.description || '';
    const skills = 'skills' in project ? project.skills.join(' ') : (project.language || '') + ' ' + (project.topics?.join(' ') || '');
    const year = 'year' in project ? project.year : new Date(project.created_at).getFullYear();
    
    const matchesSearch = searchTerm === '' || 
      title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skills.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = yearFilter === null || year === yearFilter;
    
    return matchesSearch && matchesYear;
  });

  // Determine if a project is a local project or GitHub repo
  const isLocalProject = (project: any): project is LocalProject => {
    return 'title' in project;
  };

  // Helper function to get project year
  const getProjectYear = (project: any): number => {
    if (isLocalProject(project)) {
      return project.year;
    } else {
      return new Date(project.created_at).getFullYear();
    }
  };

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setYearFilter(null);
  };

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with fixed vertical spacing */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-10 text-purple-400"
            style={{ lineHeight: 1.5 }}
          >
            My Projects
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl"
          >
            A showcase of my work, passion projects, and experiments exploring
            different technologies
          </motion.p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            {/* Search Input */}
            <div className="relative flex-grow max-w-md w-full">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-lg bg-gray-800/70 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
              <svg 
                className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Year Filter Dropdown */}
            <div className="relative w-full md:w-auto">
              <select
                value={yearFilter || ""}
                onChange={(e) => setYearFilter(e.target.value ? parseInt(e.target.value) : null)}
                className="appearance-none w-full md:w-44 px-4 py-3 rounded-lg bg-gray-800/70 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">All Years</option>
                {availableYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Reset Filter Button */}
            <button
              onClick={resetFilters}
              className="px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white transition-colors duration-300 w-full md:w-auto"
            >
              Reset Filters
            </button>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-gray-800/50 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("featured")}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === "featured"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Featured Projects
            </button>
            <button
              onClick={() => setActiveTab("github")}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === "github"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              GitHub Repositories
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              All Projects
            </button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="text-center mb-8">
          {filteredProjects.length > 0 ? (
            <p className="text-gray-400">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              {yearFilter ? ` from ${yearFilter}` : ''}
              {searchTerm ? ` matching "${searchTerm}"` : ''}
            </p>
          ) : (
            <p className="text-gray-400">
              No projects found{yearFilter ? ` from ${yearFilter}` : ''}{searchTerm ? ` matching "${searchTerm}"` : ''}
            </p>
          )}
        </div>

        {/* Featured Projects */}
        <div className={`${activeTab === "featured" ? "block" : "hidden"}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects
              .filter(project => isLocalProject(project))
              .map((project, idx) => {
                const localProject = project as LocalProject;
                return (
                  <motion.div
                    key={`local-${idx}`}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="group rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden shadow-xl hover:shadow-purple-500/20 transition-all duration-500 border border-gray-800 hover:border-purple-500/30"
                  >
                    <div className="h-44 overflow-hidden relative">
                      <img 
                        src={localProject.image} 
                        alt={localProject.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                      <div className="absolute top-3 right-3 bg-purple-600/90 px-2 py-1 rounded text-xs font-medium">
                        {localProject.year}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-purple-400 mb-3">
                        {localProject.title}
                      </h2>
                      
                      <p className="text-gray-300 mb-5 text-sm">
                        {localProject.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {localProject.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-purple-900/30 px-3 py-1 rounded-full text-purple-300 text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <button 
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 py-2 px-4 rounded-lg text-white text-sm font-medium transition-all hover:from-purple-700 hover:to-pink-700 hover:shadow-lg"
                      >
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
          </div>
          
          {filteredProjects.filter(project => isLocalProject(project)).length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400">No featured projects match your filters</p>
            </div>
          )}
        </div>

        {/* GitHub Projects */}
        <div className={`${activeTab === "github" ? "block" : "hidden"}`}>
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects
                .filter(project => !isLocalProject(project))
                .map((project, idx) => {
                  const repo = project as GitHubRepo;
                  const year = new Date(repo.created_at).getFullYear();
                  return (
                    <motion.div
                      key={`repo-${idx}`}
                      custom={idx}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      variants={cardVariants}
                      whileHover={{ scale: 1.03 }}
                      className="group p-6 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 hover:border-purple-500/30 shadow-md hover:shadow-purple-500/20 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="text-purple-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="bg-purple-600/90 px-2 py-1 rounded text-xs font-medium">
                            {year}
                          </span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            {repo.stargazers_count}
                          </span>
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-2">
                        {formatRepoName(repo.name)}
                      </h2>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {repo.description ?? "No description provided."}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {repo.language && (
                          <span className="bg-purple-900/30 px-3 py-1 rounded-full text-purple-300 text-xs font-medium">
                            {repo.language}
                          </span>
                        )}
                        {repo.topics && repo.topics.slice(0, 2).map((topic, i) => (
                          <span
                            key={i}
                            className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-xs font-medium"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-4">
                        <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 py-2 px-4 rounded-lg text-white text-sm font-medium transition-all hover:from-purple-700 hover:to-pink-700 hover:shadow-lg">
                          View Details
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          )}
          
          {!isLoading && filteredProjects.filter(project => !isLocalProject(project)).length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400">No GitHub repositories match your filters</p>
            </div>
          )}
        </div>

        {/* All Projects Section */}
        <div className={`${activeTab === "all" ? "block" : "hidden"}`}>
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          ) : filteredProjects.length > 0 ? (
            <div>
              {/* Group projects by year */}
              {availableYears
                .filter(year => filteredProjects.some(project => getProjectYear(project) === year))
                .map(year => (
                  <div key={year} className="mb-16">
                    <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                      <span className="bg-purple-600/90 px-3 py-1 rounded text-xs font-medium mr-3">
                        {year}
                      </span>
                      <span>Projects</span>
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProjects
                        .filter(project => getProjectYear(project) === year)
                        .map((project, idx) => {
                          if (isLocalProject(project)) {
                            const localProject = project as LocalProject;
                            return (
                              <motion.div
                                key={`all-local-${year}-${idx}`}
                                custom={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={cardVariants}
                                className="p-6 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
                              >
                                <div className="flex justify-between items-start mb-3">
                                  <h3 className="text-xl font-bold text-purple-400">
                                    {localProject.title}
                                  </h3>
                                  <span className="bg-purple-600/90 px-2 py-1 rounded text-xs font-medium">
                                    Featured
                                  </span>
                                </div>
                                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                                  {localProject.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {localProject.skills.slice(0, 3).map((skill, i) => (
                                    <span
                                      key={i}
                                      className="bg-purple-900/20 px-2 py-1 rounded-full text-purple-300 text-xs"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                                <div className="mt-4">
                                  <button className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors">
                                    View Details
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                </div>
                              </motion.div>
                            );
                          } else {
                            const repo = project as GitHubRepo;
                            return (
                              <motion.div
                                key={`all-repo-${year}-${idx}`}
                                custom={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={cardVariants}
                                className="p-6 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
                              >
                                <div className="flex justify-between items-start mb-3">
                                  <h3 className="text-xl font-bold text-purple-400">
                                    {formatRepoName(repo.name)}
                                  </h3>
                                  <span className="text-xs text-gray-400 flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                    {repo.stargazers_count}
                                  </span>
                                </div>
                                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                                  {repo.description ?? "No description provided."}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {repo.language && (
                                    <span className="bg-purple-900/20 px-2 py-1 rounded-full text-purple-300 text-xs">
                                      {repo.language}
                                    </span>
                                  )}
                                </div>
                                <div className="mt-4">
                                  <button className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors">
                                    View Details
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </button>
                                </div>
                              </motion.div>
                            );
                          }
                        })}
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400">No projects match your filters</p>
              <button
                onClick={resetFilters}
                className="mt-4 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Helper to format GitHub repo names nicely
function formatRepoName(name: string) {
  return name
    .replace(/-/g, " ") // replace hyphens with spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize each word
}