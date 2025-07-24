import React from "react";
import Header from "../../Components/Header/Header";

const About = () => {
  return (
    <div>
      <Header />
      <section id="about" class="px-6 py-20 max-w-6xl mx-auto">
        <h2 class="text-4xl font-extrabold mb-6">ABOUT ME</h2>
        <p class="text-gray-700 mb-10 leading-relaxed">
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

        <div class="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 class="font-bold mb-2">🛠 Tools & Tech</h3>
            <ul class="space-y-1 text-gray-600">
              <li>• React.js</li>
              <li>• JavaScript</li>
              <li>• HTML & CSS</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-2">🚀 Goals</h3>
            <ul class="space-y-1 text-gray-600">
              <li>• Gain real-world project experience</li>
              <li>• Build my portfolio website</li>
              <li>• Contribute to open source</li>
              <li>• Land a full-stack internship/job</li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-2">💡 Personal</h3>
            <ul class="space-y-1 text-gray-600">
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
