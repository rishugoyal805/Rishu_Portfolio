"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import "./testimonials.css"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO at TechStart",
      image: "/placeholder.svg?height=100&width=100",
      text: "Rishu is an exceptional developer who delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are impressive.",
    },
    {
      name: "Michael Chen",
      position: "Product Manager at InnovateCorp",
      image: "/placeholder.svg?height=100&width=100",
      text: "Working with Rishu was a pleasure. He understood our requirements quickly and implemented solutions that were both elegant and efficient.",
    },
    {
      name: "Priya Sharma",
      position: "Founder of DesignHub",
      image: "/placeholder.svg?height=100&width=100",
      text: "Rishu's technical expertise combined with his eye for design made him the perfect developer for our project. He's collaborative, responsive, and delivers high-quality work.",
    },
    {
      name: "David Wilson",
      position: "CTO at GrowthLabs",
      image: "/placeholder.svg?height=100&width=100",
      text: "I've worked with many developers, but Rishu stands out for his ability to understand business needs and translate them into technical solutions. Highly recommended!",
    },
  ]

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="testimonials-section">
      <div className="bg-overlay">
        <div className="blur-blobs">
          <div className="blob blob-primary" />
          <div className="blob blob-blue" />
        </div>
      </div>

      <div className="container-wrapper">
        <div className="section-header">
          <h2 className="section-title">What People Say</h2>
          <div className="section-underline" />
          <p className="section-description">
            Here's what mentors and colleagues have to say about working with me.
          </p>
        </div>

        <div className="carousel-container">
          <div className="carousel-wrapper">
            <div className="carousel-button prev">
              <Button
                variant="outline"
                size="icon"
                className="carousel-btn"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>

            <div className="carousel">
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="carousel-slide">
                    <Card className="testimonial-card">
                      <CardContent className="testimonial-content">
                        <div className="testimonial-inner">
                          <div className="testimonial-img-wrapper">
                            <div className="img-background" />
                            <img
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="testimonial-img"
                            />
                            <div className="quote-icon-wrapper">
                              <Quote className="h-4 w-4" />
                            </div>
                          </div>
                          <p className="testimonial-text">"{testimonial.text}"</p>
                          <h4 className="testimonial-name">{testimonial.name}</h4>
                          <p className="testimonial-position">{testimonial.position}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-button next">
              <Button
                variant="outline"
                size="icon"
                className="carousel-btn"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentIndex === index ? "dot-active" : ""}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
