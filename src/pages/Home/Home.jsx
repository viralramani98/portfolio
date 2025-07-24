import React from "react";
import Header from "../../Components/Header/Header";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-12 px-4 sm:px-6 lg:px-12 py-20 max-w-screen-xl mx-auto">
        <div className="flex-shrink-0 overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-blue-400 hover:ring-opacity-50">
          <img
            src="IMG-20240119-WA0440.jpg"
            alt="Viral Ramani"
            className="rounded-2xl shadow-xl w-48 sm:w-60 md:w-72 lg:w-80 xl:w-96 transition duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-1"
          />
        </div>

        <div className="text-center lg:text-left animate-fade-in-down duration-1000 max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 transition-transform hover:scale-105">
            CREATIVE WEB <br />
            <span className="text-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              — DEVELOPER
            </span>
          </h1>

          <p className="text-gray-600 mb-6 text-base sm:text-lg md:text-xl leading-relaxed">
            Hi! I'm{" "}
            <span className="font-semibold text-blue-700">Viral Ramani</span>, a
            fresher full-stack web developer passionate about building clean,
            fast, and responsive web interfaces using modern technologies like{" "}
            <span className="font-medium">React.js</span> and{" "}
            <span className="font-medium">Tailwind CSS</span>.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="/About"
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              About Me
            </a>
            <a
              href="/Projects"
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-400 animate-pulse">
            🏆 Always learning and growing...
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-10 px-4">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-6 tracking-wide">
            🚀 Skills & Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base font-medium">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "ReactJS",
              "Tailwind CSS",
              "Bootstrap",
              "Git",
              "Netlify",
              "Vercel",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
