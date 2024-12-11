'use client';

import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Task Management App",
    description: "A React Native mobile app for efficient task management",
    image: "/image.png",
    url: "https://redux-rhix.onrender.com/",
  },
  {
    id: 2,
    title: "Contact Directory | Professional Network Database",
    description: "Access our comprehensive contact directory featuring professional contacts across multiple cities. Find detailed information including email addresses, phone numbers, and business locations.",
    image: "/Capture d'écran 2024-12-11 125129.png",
    url: "#",
  },
  {
    id: 3,
    title: "Movie Management Application",
    description: " interactive web application designed for movie enthusiasts to manage their movie collections seamlessly. ",
    image: "/Cap.png",
    url: "#",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p
                    className={`text-gray-600 transition-all duration-300 ${
                      activeProject === project.id
                        ? "h-auto opacity-100"
                        : "h-0 opacity-0"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
