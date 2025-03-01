import React from "react";
import small from "../images/smallHair_c.jpg";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: About Me Description */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-green-400 mb-3">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello! I'm <span className="font-semibold text-green-300">Anurag Kumar</span>, a{" "}
            <span className="font-semibold text-green-300">passionate Full-Stack Developer</span> with a strong foundation in{" "}
            <span className="text-green-300">
              React, TypeScript, Tailwind CSS, Node.js, Java, C, HTML, CSS, and JavaScript.
            </span>
          </p>

          <h3 className="text-2xl font-semibold text-green-400 mt-6">💡 My Philosophy</h3>
          <p className="mt-2 text-gray-400">
            I believe that technology is a powerful tool for change, and I am committed to making a positive impact through innovative digital solutions.
          </p>

          <h3 className="text-2xl font-semibold text-green-400 mt-6">🔥 What Drives Me?</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>✔ <span className="text-green-300 font-medium">Continuous Learning:</span> Always exploring new frameworks & tools.</li>
            <li>✔ <span className="text-green-300 font-medium">Problem-Solving Mindset:</span> Breaking down complex challenges efficiently.</li>
            <li>✔ <span className="text-green-300 font-medium">Freelancing & Entrepreneurship:</span> Helping businesses build powerful applications.</li>
            <li>✔ <span className="text-green-300 font-medium">Collaboration & Innovation:</span> Building creative & impactful products.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-green-400 mt-6">🎯 My Vision</h3>
          <p className="mt-2 text-gray-400">
            I aspire to leave a mark in the tech industry by contributing to groundbreaking projects that revolutionize the way people interact with technology.
          </p>
        </div>

        {/* Right Side: Image and Connect Button */}
        <div className="lg:w-1/2 flex flex-col items-center">
          {/* Profile Image */}
          <div className="flex justify-center w-full">
            <img
              src={small}
              alt="My Profile"
              className="w-full sm:w-80 h-auto object-cover rounded-lg shadow-lg border-4 border-green-500 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Connect Button */}
          <div className="flex justify-center w-full mt-6">
            <Link
              to="/contact"
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md 
              hover:bg-green-800 transition duration-300 shadow-lg hover:shadow-green-500/50"
            >
              💬 Let's Connect!
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
