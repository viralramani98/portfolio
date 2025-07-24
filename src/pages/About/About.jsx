import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="container mx-auto">
      <Header />
      <section id="about" className="px-6 py-20 max-w-6xl mx-auto">
        {/* Title with line */}
        <div className="flex items-center gap-4 mb-6" data-aos="fade-right">
          <h2 className="text-4xl font-extrabold">ABOUT ME</h2>
          <div className="h-1 w-24 bg-blue-500 rounded-full"></div>
        </div>

        {/* Paragraph Section */}
        <p className="text-gray-700 mb-10 leading-relaxed" data-aos="fade-up">
          I'm a passionate and hardworking web developer currently pursuing my
          Bachelor of Computer Applications (BCA). Though I'm a fresher with no
          formal projects or internships yet, I’ve built hands-on skills in
          front-end and back-end development through practice and self-learning.
          <br />
          <br />I believe in continuous learning and self-improvement. Whether
          it's developing a student management system with PHP & MySQL, or
          building sleek UIs with React and Tailwind, I'm always focused on
          clean code and performance.
        </p>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-sm" data-aos="fade-up">
          {/* Tools Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="font-bold text-lg mb-3">🛠 Tools & Tech</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• React.js</li>
              <li>• JavaScript</li>
              <li>• HTML & CSS</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>

          {/* Goals Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="font-bold text-lg mb-3">🚀 Goals</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Gain real-world project experience</li>
              <li>• Build my portfolio website</li>
              <li>• Contribute to open source</li>
              <li>• Land a full-stack internship/job</li>
            </ul>
          </div>

          {/* Personal Card */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="font-bold text-lg mb-3">💡 Personal</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Gym enthusiast (goal: muscle gain)</li>
              <li>• Love for solving coding challenges</li>
              <li>• Always ready to learn and grow</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
