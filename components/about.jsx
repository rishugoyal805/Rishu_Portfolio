import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";
import "./about.css";

export default function About() {
  const timeline = [
    {
      year: "2024(June-July)",
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

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="about-image-bg"></div>
              <img
                src="/rishu.jpg?height=400&width=500"
                alt="About Rishu Goyal"
                className="about-image"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
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
                <h4 className="font-semibold mb-1">Name:</h4>
                <p className="text-gray-600 dark:text-gray-400">Rishu</p>
              </div>
              <div className="info-card">
                <h4 className="font-semibold mb-1">Email:</h4>
                <p className="text-gray-600 dark:text-gray-400 truncate">rishugoyal16800@gmail.com</p>
              </div>
              <div className="info-card">
                <h4 className="font-semibold mb-1">Location:</h4>
                <p className="text-gray-600 dark:text-gray-400">Noida, Uttar Pradesh, India</p>
              </div>
              <div className="info-card">
                <h4 className="font-semibold mb-1">Availability:</h4>
                <p className="text-gray-600 dark:text-gray-400">Open to opportunities</p>
              </div>
            </div>

            <Button asChild className="rounded-full shadow-md hover:shadow-lg transition-all">
              <Link href="/RishuResume.pdf" target="_blank">
                <FileText className="mr-2 h-4 w-4" /> Download Resume
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">My Journey</h3>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:translate-x-px"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="timeline-dot"></div>

                  <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-2">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
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