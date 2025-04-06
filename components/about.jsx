import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";
import "./about.css";
import { LuDownload } from "react-icons/lu"

export default function About() {
  const timeline = [
    {
      year: "2024 (June-July)",
      title: "Intern",
      company: "DRID",
      description:
        "Developed a word puzzle game designed for specially abled people, enhancing accessibility and user engagement.",
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-gray-800">
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern"></div>
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-300 ab">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="group">
            <div className="relative w-[90%] h-[80%]aspect-1 overflow-hidden rounded-lg shadow-lg">
              <img
                src="/rishu1.jpg"
                alt="About Rishu Goyal"
                className="w-[100%] h-[90dvh] object-cover image-css"
              />
            </div>

          </div>


          <div>
            <h3 className="text-2xl font-semibold mb-4 dark:text-gray-300 ab">
              I'm Rishu Goyal, a Web Developer and Software Engineer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I specialize in building modern, scalable web applications and integrating AI models into real-world solutions. My work involves developing with Ollama, Hugging Face, and APIs, creating efficient and user-friendly experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              With a strong foundation in full-stack development, I enjoy solving complex problems and exploring the latest advancements in AI and web technologies. I'm passionate about continuous learning and crafting solutions that make a meaningful impact.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="info-card">
                <h4 className="font-semibold mb-1 dark:text-gray-300 ab">Name:</h4>
                <p className="text-gray-600 dark:text-gray-400 ema">Rishu</p>
              </div>
              <div className="info-card">
                <h4 className="font-semibold mb-1 dark:text-gray-300 ab">Email:</h4>
                <p className="text-gray-600 dark:text-gray-400 truncate  ema">rishugoyal16800@gmail.com</p>
              </div>
              <div className="info-card">
                <h4 className="font-semibold mb-1 dark:text-gray-300 ab">Location:</h4>
                <p className="text-gray-600 dark:text-gray-400 ema">Noida, Uttar Pradesh, India</p>
              </div>
              <div className="info-card">
                <h4 className="font-semibold mb-1 dark:text-gray-300 ab ">Availability:</h4>
                <p className="text-gray-600 dark:text-gray-400 ema" >Open to opportunities</p>
              </div>
            </div>

            <a
              href="/RishuResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-md font-large text-white shadow-md transition-all hover:bg-blue-700 active:scale-95 hover:shadow-lg"
            >
              <LuDownload className="w-4 h-4" />
              &nbsp;Download CV
            </a>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center dark:text-gray-300">My Journey</h3>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:translate-x-px"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                  <div className="timeline-dot"></div>

                  <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-sm shadow-md hover:shadow-lg transition-shadow">
                      <span className="inline-block bg-primary/10 rounded-full mb-2 year">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-semibold  dark:text-gray-300 ">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">
                        {item.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}