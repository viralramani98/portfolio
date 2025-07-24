import React from "react";
import Header from "../../Components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <section class="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-20 max-w-6xl mx-auto">
        <div class="flex-shrink-0">
          <img
            src="IMG-20240119-WA0440.jpg"
            alt="Viral Ramani"
            class="rounded-2xl shadow-sm w-[200px]"
          />
        </div>

        <div class="text-center md:text-left">
          <h1 class="text-5xl font-extrabold leading-tight mb-4">
            CREATIVE WEB <br />
            <span class="text-black">— DEVELOPER</span>
          </h1>
          <p class="text-gray-600 mb-6 max-w-md">
            Hi! I'm Viral Ramani, a fresher full-stack web developer passionate
            about building clean, fast, and responsive web interfaces using
            modern technologies like React.js and Tailwind CSS.
          </p>
          <div class="flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="/About"
              class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              About Me
            </a>
          </div>
          <p class="mt-6 text-sm text-gray-400">
            🏆 Always learning
          </p>
        </div>
      </section>

      <div class="bg-red-500 text-white py-4 slanted">
        <div class="max-w-6xl mx-auto flex gap-4 flex-wrap text-sm font-semibold justify-center">
          <span>🔸 HTML</span>
          <span>🔸 CSS</span>
          <span>🔸 JavaScript</span>
          <span>🔸 ReactJS</span>
          <span>🔸 Tailwind CSS</span>
          <span>🔸 Bootstrap</span>
          <span>🔸 Git</span>
          <span>🔸 netlify</span>
          <span>🔸 Vercel</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
