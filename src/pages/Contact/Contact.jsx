import React from "react";
import Header from "../../Components/Header/Header";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <Header />

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            📞 Get in Touch
          </h2>
          <p className="text-gray-700 mb-10">
            Feel free to reach out for collaborations, project inquiries, or
            just a friendly hello!
          </p>

          <div className="flex flex-col gap-6 md:gap-10 items-center md:flex-row md:justify-around text-left">
            {/* Email */}
            <div className="flex items-center gap-4 text-gray-800">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <a
                className="text-lg font-medium"
                href="mailto:viralramani98@gmail.com"
              >
                viralramani98@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 text-gray-800">
              <FaPhone className="text-blue-600 text-2xl" />
              <span className="text-lg font-medium">+91 93130 *****</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 text-gray-800">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <span className="text-lg font-medium">
                Rajkot, Gujarat, India
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex justify-center gap-6 text-blue-600 text-2xl">
            <a
              href="https://www.linkedin.com/in/viral-ramani-90139b362/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/viralramani98"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition"
            >
              <FaGithub />
            </a>
          </div>
          <div className="mt-8">
            <a
              href="viral ramani public Resume.png"
              download
              className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              📄 Download My Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
