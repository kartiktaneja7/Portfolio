import { Github, ExternalLink } from "lucide-react";
import olova from "@/assets/projects/olova-B0FjVVEL.png";
import portfolio from "@/assets/projects/Annotation 2025-03-20 155334.png";
import codekori from "@/assets/projects/codekori.png";
import cloud from "@/assets/projects/cloud.png";
import primark from "@/assets/projects/Primark.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/provider/page";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const projects = [
    {
      title: "Data Piomneers!",
      description:
        "An inventory management system using oracle SQL developer to efficiently track and manage stock, customers, and orders in a retail environment.",
      tags: ["Oracle SQL Developer", "PL/SQL", "MS SQL", "OCI", "Azure Power BI", "Normalization", "ERD Modelling", "Visualization", "AI-driven Pricing"],
      links: {
        github: "https://github.com/KartikeTaneja/DataPioneers",
        // demo: "https://olova.js.org/",
      },
      image: olova,
      featured: true,
    },
    {
      title:
        "A sleek portfolio built with React and Tailwind CSS to showcase my skills",
      description:
        "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
      tags: ["React", "Tailwind CSS", "Portfolio", "Typescript"],
      links: {
        github: "https://github.com/seraprogrammer/portfolio",
        demo: "https://codervai.vercel.app/",
      },
      image: portfolio,
      featured: true,
    },
    {
      title:
        "Cloud Infrastructure CI/CD on AWS",
      description:
        "This project provides an API to check the health status of the application and manage user accounts. It connects to a MySQL database to verify the connection and supports user creation, retrieval, and updates. The API is built using Node.js and Express.",
      tags: ["JavaScript", "Node.js","React.js", "Redux", "MongoDB", "Express", "Docker", "JWT", "OpenAI", "Stripe", "Tailwind CSS", "Multer", "Typescript", "GitHub Actions", "PWA", "i18next.js", "SCSS"],
      links: {
        github: "https://github.com/CSYE6225-NetworkStructuresCloude",
        demo: "https://codekori.js.org/",
      },
      image: cloud,
      featured: true,
    },
    {
      title:
        "Elderly Care Web Application",
      description:
        "This projects helps elderly people to book doctor appointments based on their requirementsThis portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
      tags: ["JavaScript", "Node.js","React.js", "Redux", "MongoDB", "Express", "Docker", "JWT", "OpenAI", "Stripe", "Tailwind CSS", "Multer", "Typescript", "GitHub Actions", "PWA", "i18next.js", "SCSS"],
      links: {
        github: "https://github.com/info-6150-spring-2024/final-project-elderlycare",
        demo: "https://codekori.js.org/",
      },
      image: codekori,
      featured: true,
    },
    {
      title:
        "Primark Website Redesign",
      description:
        "A comprehensive website overhaul transforming Primark's basic web presence into a fully functional e-commerce platform. The project addresses current usability issues while introducing online shopping capabilities to expand revenue streams and enhance the customer experience..",
      tags: ["Figma", "Design Systems","User Research", "Morcow Approach", "Persona Creation", "SWOT Analysis", "UX Planes"],
      links: {
        github: "https://github.com/info-6150-spring-2024/final-project-elderlycare",
        demo: "https://codekori.js.org/",
      },
      image: primark,
      featured: true,
    },
  ];

  return (
    <div
      className={`pt-40 min-h-screen p-8 ${
        isDarkMode
          ? "bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-slate-100"
          : "bg-gradient-to-b from-[#f0f4f8] via-[#e2e8f0] to-[#cbd5e1] text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card
              className={`md:w-1/2 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6 ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-800 to-gray-900"
                  : "bg-gradient-to-br from-white to-gray-100"
              }`}
            >
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle
                      className={`text-3xl font-bold ${
                        isDarkMode ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p
                  className={`mb-6 text-lg leading-relaxed ${
                    isDarkMode ? "text-slate-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
