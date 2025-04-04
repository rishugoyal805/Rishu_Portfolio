"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import "./scroll-progress.css"

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const currentScroll = window.scrollY
      const scrollPercentage = (currentScroll / totalScroll) * 100

      setScrollProgress(scrollPercentage)
      setShowScrollTop(currentScroll > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Progress bar */}
      <div className="scroll-progress-bar-container">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Scroll to top button */}
      <Button
        variant="secondary"
        size="icon"
        className={`scroll-to-top-button ${showScrollTop ? "visible" : "hidden"}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp className="icon" />
      </Button>
    </>
  )
}
