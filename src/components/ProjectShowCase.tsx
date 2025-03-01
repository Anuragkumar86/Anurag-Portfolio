import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveDemo?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A sleek and modern personal portfolio built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind", "TypeScript"],
    liveDemo: "https://anurag-portfolio-web.vercel.app/",
    github: "https://github.com/Anuragkumar86/Anurag-Portfolio",
  },
  {
    title: "Simple Payment App",
    description: "A full-stack e-commerce platform with authentication and Stripe integration.",
    technologies: ["React", "MongoDB", "Tailwind"],
    liveDemo: "/inprogress",
    github: "/inprogress",
  },
  {
    title: "Medium-Blog",
    description: "An AI-powered chatbot using OpenAI API for real-time conversation.",
    technologies: ["React", "Tailwind", "prisma", "postgress"],
    liveDemo: "/inprogress",
    github: "/inprogress",
  },
];

const ProjectShowcase: React.FC = () => {
  return (
    <div className="bg-slate-900">
    <div className="container mx-auto px-4 py-8 border-t-1 border-slate-700 bg-slate-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-500 shadow-2xl">🚀 Project Showcase</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-slate-900 ">
        {projects.map((project, index) => (
          <Card key={index} className=" border-1 border-slate-400 p-4 hover:border-green-400 hover:scale-105 transition-shadow duration-300">
            <CardContent>
              <h3 className="text-white text-2xl font-bold">{project.title}</h3>
              <p className="text-white mt-2">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-green-500 font-bold text-white px-2 py-1 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                {project.liveDemo && (
                    <Link to={project.liveDemo} target="_blank">
                  <Button variant="outline" size="sm" asChild>
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </Button>
                    </Link>
                )}
                {project.github && (
                    <Link to={project.github} target="_blank">
                  <Button variant="outline" size="sm" asChild>
                      <FaGithub className="mr-2" /> GitHub
                  </Button>
                    </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProjectShowcase;
