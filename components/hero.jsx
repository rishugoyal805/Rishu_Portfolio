"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";
import "./hero.css";

export default function Hero() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const fullText = "🚀 Full Stack Developer";

  useEffect(() => {
    setIsVisible(true);

    let timer;
    let charIndex = 0;

    if (isTyping) {
      timer = setInterval(() => {
        if (charIndex <= fullText.length) {
          setText(fullText.substring(0, charIndex));
          charIndex++;
        } else {
          setIsTyping(false);
          clearInterval(timer);
          setTimeout(() => {
            setIsTyping(true);
            charIndex = 0;
          }, 2000);
        }
      }, 100);
    }

    return () => clearInterval(timer);
  }, [isTyping]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <div className="hero-pattern">
          <div className="pattern-circle primary"></div>
          <div className="pattern-circle purple"></div>
          <div className="pattern-circle blue"></div>
        </div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className={`hero-text ${isVisible ? "visible" : "hidden"}`} >
            <h1 className="hero-heading dark:text-gray-300 ab">
              Hi, I&apos;m <span className="text-primary">Rishu Goyal</span>
            </h1>
            <h2 className="hero-subheading dark:text-gray-300 ab">
              {text}
              <span className="animate-blink">|</span>
            </h2>
            <p className="hero-description">
              I craft scalable, efficient, and user-friendly digital experiences. Passionate about blending functionality with aesthetics to build impactful solutions.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-gray-500 pb-6">

              <Button asChild size="lg" className="px-6 py-3 round-bot">
                <Link href="#contact" className="text-white">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" className="px-6 py-3  round-bot" asChild>
                <Link href="/RishuResume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </Link>
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs small ">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 flex items-center justify-center rounded-full symbol"
                  asChild
                >
                  <Link
                    href="https://github.com/rishugoyal805"
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 flex items-center justify-center rounded-full symbol"
                  asChild
                >
                  <Link
                    href="https://linkedin.com/in/rishu0405"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 flex items-center justify-center rounded-full symbol"
                  asChild
                >
                  <Link
                    href="mailto:rishugoyal16800@gmail.com"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className={`hero-image-wrapper ${isVisible ? "visible" : "hidden"}`}>
            <div className="relative">
              <div className="hero-glow"></div>
              <div className="hero-image-container">
                <img
                  src="/rishu.png?height=350&width=350"
                  alt="Rishu Goyal"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}