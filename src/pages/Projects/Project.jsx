import React from "react";
import Header from "../../Components/Header/Header";

const Project = () => {
  const projectData = [
    {
      name: "Furniro",
      image: "Furniro web image.png",
      description:
        "Furniro – Discover elegant and modern furniture collections that blend comfort with style for your perfect space.",
      tech: ["HTML", "Bootstrap"],
      demoLink: "https://furniro-viral.netlify.app/",
      githubLink: "https://github.com/viralramani98/bootstrap",
    },
    {
      name: "Gaming Web",
      image: "gaming web.png",
      description:
        "Redefining the future of gaming—step into the metagame, embrace the play economy, and explore the next-gen digital world.",
      tech: ["HTML", "CSS", "JS"],
      demoLink: "https://gaming-web-viral.netlify.app/",
      githubLink:
        "https://github.com/viralramani98/amazing-web-with-HTML-CSS-and-JavaScript",
    },
    {
      name: "Netflix",
      image: "Netflix clone.png",
      description:
        "A responsive Netflix homepage clone built with modern UI components, showcasing clean layout, layered backgrounds, and interactive Search-bar.",
      tech: ["HTML", "Bootstrap"],
      demoLink: "https://clone-no1.netlify.app/",
      githubLink: "https://github.com/viralramani98/netflix",
    },
    {
      name: "Animal Web",
      image: "Animal website.png",
      description:
        "A visually rich animal-themed design slider built with smooth transitions, responsive layout, and an engaging hero section showcasing wildlife.",
      tech: ["HTML", "Bootstrap", "Javascript"],
      demoLink: "https://animal-websitefromviral.netlify.app/",
      githubLink: "https://github.com/viralramani98/second-amazing-web",
    },
    {
      name: "Tic Tac Toe Game",
      image: "tic tac toe.png",
      description:
        "Interactive Tic Tac Toe game built using React with time travel feature, state tracking, and dynamic UI updates.",
      tech: ["HTML", "Bootstrap", "Javascript", "React"],
      demoLink: "https://tic-tac-toe-chi-bice.vercel.app/",
      githubLink: "https://github.com/viralramani98/Tic-Tac-toe",
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
                    Git Hub
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
