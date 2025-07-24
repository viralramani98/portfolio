import React from "react";
import Header from "../../Components/Header/Header";

const Project = () => {
  const projectData = [
    {
      name: "Furniro",
      image: "Furniro web image.png",
      description:
        "A task management app with editing and completion functionality.",
      tech: ["HTML", "Bootstrap"],
      demoLink: "https://furniro-viral.netlify.app/",
      githubLink: "https://app.netlify.com/projects/furniro-viral/overview",
    },
    {
      name: "Gaming Web",
      image: "gaming web.png",
      description: "Live weather app using OpenWeatherMap API.",
      tech: ["HTML", "CSS", "JS"],
      demoLink: "https://gaming-web-viral.netlify.app/",
      githubLink:
        "https://app.netlify.com/projects/gaming-web-viral/configuration/general",
    },
    {
      name: "Netflix",
      image: "Netflix clone.png",
      description: "A full CRUD system to manage students using PHP and MySQL.",
      tech: ["HTML", "Bootstrap"],
      demoLink: "https://clone-no1.netlify.app/",
      githubLink:
        "https://app.netlify.com/projects/clone-no1/configuration/general",
    },
  ];

  return (
    <div className="container mx-auto">
      <Header />
      <section className="min-h-screen bg-gray-100 px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-700 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between text-sm">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-900 transition"
                  >
                    Netlify
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;
