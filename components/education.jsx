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
      institution: "Jaypee Institute of Information Technology",
      location: "Noida, UP, India",
      duration: "2023 - present",
      description:
        " Focused on algorithms, data structures, and web development. Gained hands-on experience through real-world projects and contributed to tech communities and clubs.",
      // description:
      //   "Focused on algorithms, data structures, and web development. Gained hands-on experience through real-world projects, participated in hackathons and coding competitions, and actively contributed to tech communities and clubs.",
      icon: <GraduationCap className="icon" />,
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      field: "Physics, Chemistry, Mathematics (PCM)",
      institution: "Bal Bharti Vidya Peeth, Baroda Road, Gohana",
      location: "Sonipat, Haryana, India",
      duration: "2022",
      description:
        "Studied core science subjects with a strong emphasis on Physics, Chemistry, and Mathematics, forming a solid base for engineering education.",
      icon: <BookOpen className="icon" />,
    },    
    {
      id: 3,
      degree: "Secondary Education",
      field: "General Curriculum",
      institution: "Bal Bharti Vidya Peeth, Baroda Road, Gohana",
      location: "Sonipat, Haryana, India",
      duration: "2020",
      description:
        "Completed 10th grade with a strong academic foundation across core subjects including Mathematics, Science, and English.",
      // icon: <Award className="icon" />,
      icon: <BookOpen className="icon" />,
    },    
  ]

  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="title-section"
        >
          <h1 className="title">Education Journey</h1>
          <div className="education-divider"></div>
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
              <div className="timeline-icon ">{item.icon}</div>

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
      </div>
    </section>
  )
}

export default EducationPage
