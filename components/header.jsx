"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "./theme-toggle"
import "./header.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const href = this.getAttribute("href") || ""
        const targetElement = document.querySelector(href)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          })

          if (history.pushState) {
            history.pushState(null, "", href)
          } else {
            location.hash = href
          }

          setIsMenuOpen(false)
        }
      })
    })

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", () => {})
      })
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="brand">
          Rishu<span className="highlight">Goyal</span>
        </Link>

        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? "active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        <div className="nav-mobile-toggle">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu" className="relative z-50">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="nav-mobile-menu">
            <nav className="nav-mobile-links">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? "active" : ""}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}