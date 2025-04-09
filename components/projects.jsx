"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import "./project.css" // Import external CSS

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/rishugoyal805/repos')
        if (!response.ok) {
          throw new Error('Failed to fetch projects')
        }
        const repos = await response.json()

        const formattedProjects = repos.map((repo) => ({
          title: repo.name,
          description: repo.description || "No description provided",
          image: `https://opengraph.githubassets.com/1/${repo.full_name}` || "/placeholder.svg",
          technologies: repo.topics || [],
          category: getCategoryFromRepo(repo),
          liveLink: repo.homepage || `https://github.com/${repo.full_name}`,
          githubLink: repo.html_url,
        }))

        setProjects(formattedProjects)
      } catch (err) {
        setError(err.message || 'An unknown error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const getCategoryFromRepo = (repo) => {
    if (repo.topics?.includes('frontend')) return "frontend"
    if (repo.topics?.includes('backend')) return "backend"
    return "fullstack"
  }

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter((project) => project.category === filter)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ]

  if (loading) {
    return (
      <section id="projects" className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">My Projects</h2>
            <div className="project-divider"></div>
            <p className="loading-text">Loading projects...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">My Projects</h2>
            <p className="error-text">Error: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="background-pattern" />

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title ">My Projects</h2>
          <div className="project-divider"></div>
          <div className="section-divider" />
          <p className="section-description">
            Here are some of the projects I've worked on. Each project represents different skills and technologies I've mastered.
          </p>
        </div>

        <div className="filter-buttons">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              className={`button-css rounded-full ${filter === category.id ? "" : "hover-button"}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="project-card"
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
                <div className="project-overlay">
                  <div className="project-buttons">
                    <Button className="code-button" variant="secondary" size="sm" asChild>
                      <Link href={project.githubLink} target="_blank">
                        <Github className="icon" /> Code
                      </Link>
                    </Button>
                    {project.title === "Jaypee_Learning_Hub" && (
                      <Button className="code-button abc" size="sm" asChild>
                        <Link
                          href="https://jaypeelearninghub.great-site.net"
                          target="_blank"
                        >
                          <ExternalLink className="icon" /> Demo
                        </Link>
                      </Button>
                    )}
                    {project.title === "Askdemia-Frontend" && (
                      <Button className="code-button abc" size="sm" asChild>
                        <Link
                          href="https://askdemiaa.vercel.app"
                          target="_blank"
                        >
                          <ExternalLink className="icon" /> Demo
                        </Link>
                      </Button>
                    )}
                    {project.title === "Askdemia" && (
                      <Button className="code-button abc" size="sm" asChild>
                        <Link
                          href="https://askdemiaa.vercel.app"
                          target="_blank"
                        >
                          <ExternalLink className="icon" /> Demo
                        </Link>
                      </Button>
                    )}
                    {project.title === "Rishu_Portfolio" && (
                      <Button className="code-button abc" size="sm" asChild>
                        <Link
                          href="https://rishugoyal.vercel.app"
                          target="_blank"
                        >
                          <ExternalLink className="icon" /> Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <CardContent className="project-content">
                <div className="category-tag">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
