"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Server, Smartphone } from "lucide-react"
import "./skills.css"
export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("skills")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: [
        { name: "HTML5/CSS3", level: 95 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript", level: 90 },
        // { name: "TypeScript", level: 70 },
        { name: "Tailwind CSS", level: 75 },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 70 },
        // { name: "MongoDB", level: 85 },
        // { name: "PostgreSQL", level: 70 },
        { name: "RESTful APIs", level: 80 },
        // { name: "GraphQL", level: 75 },
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        // { name: "React Native", level: 80 },
        // { name: "Expo", level: 75 },
        { name: "Mobile UI/UX", level: 85 },
      ],
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 85 },
        // { name: "PostgreSQL", level: 70 },
        { name: "MySQL", level: 95 },
        // { name: "Firebase", level: 80 },
        // { name: "Redis", level: 70 },
      ],
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C++", level: 85 },
        { name: "Python", level: 85 },
        { name: "Php", level: 90 },
        { name: "JavaScript", level: 95 },
        // { name: "TypeScript", level: 80 },
        // { name: "Java", level: 60 },
      ],
    },
    {
      title: "Other Skills",
      icon: Globe,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Vercel", level: 85 },
        { name: "Docker", level: 75 },
        // { name: "AWS", level: 70 },
        // { name: "CI/CD", level: 80 },
        // { name: "Agile", level: 85 },
        // { name: "Testing", level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="skills-bg-pattern">
        <div className="skills-bg-inner">
          <div className="skills-dot-pattern"></div>
        </div>
      </div>

      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title ab">My Skills</h2>
          <div className="skills-divider"></div>
          <p className="skills-description">
            I have acquired a diverse range of skills throughout my career. Here are some of the technologies and tools
            I work with.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="skills-card ab"
            >
              <CardContent className="skills-card-content">
                <div className="skills-card-header">
                  <div className="skills-icon-wrapper">
                    <category.icon className="skills-icon" />
                  </div>
                  <h3 className="skills-category-title">{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="skills-skill-header ab">
                        <span className="skills-name ab">{skill.name}</span>
                        {/* <span className="skills-level">{skill.level}%</span> */}
                      </div>
                      <div className="skills-bar-bg">
                        <div
                          className="skills-bar-fill"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${skillIndex * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
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
