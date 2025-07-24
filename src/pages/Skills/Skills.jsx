import React from "react";
import Header from "../../Components/Header/Header";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },   
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-black" /> },
  {
    name: "Vercel",
    icon: (
      <img
        src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
        alt="Vercel"
        className="w-8 h-8"
      />
    ),
  },
  {
    name: "Netlify",
    icon: (
      <img
        src="https://www.netlify.com/v3/img/components/logomark.png"
        alt="Netlify"
        className="w-8 h-8"
      />
    ),
  },
];

const Skills = () => {
  return (
    <div className="container mx-auto">
      <div className="min-h-screen bg-gray-100">
        <Header />
        <section className="max-w-6xl mx-auto py-16 px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-10">
            🛠 My Skills
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Here's a list of technologies I work with regularly while building
            web apps.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <span className="text-lg font-medium mt-1">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
