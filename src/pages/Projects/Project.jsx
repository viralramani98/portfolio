import React from "react";
import Header from "../../Components/Header/Header";

const Project = () => {
  const projectData = [
    {
      name: "Furniro",
      image: "Furniro web image.png",
      description:
        "A task management app with editing and completion functionality.",
      tech: "HTML, Bootsrap",
      demoLink: "https://furniro-viral.netlify.app/",
      githubLink: "https://app.netlify.com/projects/furniro-viral/overview",
    },
    {
      name: "Gaming Web",
      image: "gaming web.png",
      description: "Live weather app using OpenWeatherMap API.",
      tech: "HTML, CSS, JS",
      demoLink: "https://gaming-web-viral.netlify.app/",
      githubLink:
        "https://app.netlify.com/projects/gaming-web-viral/configuration/general",
    },
    {
      name: "Netflix",
      image: "Netflix clone.png",
      description: "A full CRUD system to manage students using PHP and MySQL.",
      tech: "HTML, Bootstrap",
      demoLink: "https://clone-no1.netlify.app/",
      githubLink:
        "https://app.netlify.com/projects/clone-no1/configuration/general",
    },
  ];
  return (
    <div>
      <Header />
      <section className="min-h-screen bg-gray-100 p-6">
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Tech: {project.tech}
                </p>
                <div className="mt-4 flex justify-between text-sm">
                  <a
                    href={project.demoLink}
                    className="text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-gray-700 hover:underline"
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
