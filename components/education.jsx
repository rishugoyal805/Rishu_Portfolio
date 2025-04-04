"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react"
import "./education.css"

const EducationPage = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Indian Institute of Technology",
      location: "Delhi, India",
      duration: "2019 - 2023",
      description:
        "Focused on algorithms, data structures, and web development. Participated in various hackathons and coding competitions.",
      icon: <GraduationCap className="icon" />,
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      field: "Science and Mathematics",
      institution: "Delhi Public School",
      location: "Delhi, India",
      duration: "2017 - 2019",
      description:
        "Achieved excellence in mathematics and physics, laying a strong foundation for engineering studies.",
      icon: <BookOpen className="icon" />,
    },
    {
      id: 3,
      degree: "Certification",
      field: "Full Stack Web Development",
      institution: "Udemy",
      location: "Online",
      duration: "2020",
      description:
        "Comprehensive course covering modern web technologies including React, Node.js, and database management.",
      icon: <Award className="icon" />,
    },
  ]

  return (
    <div id="education" className="education-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="title-section"
        >
          <h1 className="title">Education Journey</h1>
          <p className="subtitle">
            My academic background and continuous learning path that shapes my professional expertise.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="timeline"
        >
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`timeline-item ${index !== educationData.length - 1 ? "bordered" : ""}`}
            >
              <div className="timeline-icon">{item.icon}</div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="degree">{item.degree}</h3>
                  <div className="duration">
                    <Calendar className="calendar-icon" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <h4 className="field">{item.field}</h4>
                <div className="institution-info">
                  <p className="institution">{item.institution}</p>
                  <p className="location">{item.location}</p>
                </div>

                <p className="description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="skills-section"
        >
          <h2 className="skills-title">Skills Acquired</h2>

          <div className="skills-list">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "TypeScript",
              "Next.js",
              "CSS/SCSS",
              "Git",
              "Data Structures",
              "Algorithms",
              "UI/UX Design",
            ].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 70, 229, 0.2)" }}
                className="skill-item"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default EducationPage
