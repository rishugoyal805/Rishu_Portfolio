import React from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import EducationPage from "@/components/education";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <EducationPage />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}