import React from "react";
import Header from "../../Components/Header/Header";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/About");
  };
  const goToProject = () => {
    navigate("/Projects");
  };
  return (
    <div className="min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white shadow">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-12 px-4 sm:px-6 lg:px-12 pt-20 min-h-screen max-w-screen-xl mx-auto">
        {/* Profile Image */}
        <div className="flex-shrink-0 overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-blue-400 hover:ring-opacity-50">
          <img
            src="IMG-20240119-WA0440.jpg"
            alt="Viral Ramani"
            className="rounded-2xl shadow-xl w-40 sm:w-48 md:w-56 lg:w-72 xl:w-80 transition duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-1"
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left animate-fade-in-down duration-1000 max-w-xl px-2">
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
            <PrimaryButton text="About Me" onclickFn={goToAbout} />
            <PrimaryButton text="View Projects" onclickFn={goToProject} />
          </div>

          <p className="mt-6 text-sm text-gray-400 animate-pulse">
            🏆 Always learning and growing...
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
