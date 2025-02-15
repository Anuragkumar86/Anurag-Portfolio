import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profileImage from "../images/smallHair_c.jpg"; // Replace with your actual image path
import { motion } from "framer-motion";
import resume from "../../public/Anurag_Resume.pdf"
const HeroSection: React.FC = () => {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-6 md:px-20">
      {/* Left Section: Social Icons & Introduction */}
      <div className="flex flex-col justify-center space-y-6 md:w-1/2">

        {/* Description */}
        <h1 className="mt-37 text-4xl md:mt-0 md:text-5xl font-extrabold leading-tight">
          Hi, I'm <span className="text-green-400">Anurag Kumar</span>
        </h1>
        <p className="text-lg text-gray-300">
          <h2 className="text-orange-500 text-3xl font-bold">A Passionate Full-Stack Developer</h2> who loves solving complex problems, learning new
          technologies, and creating impactful solutions. Having knowledge of <span className="text-green-500">React, TypeScript,
            Tailwind CSS, Node.js, Java, C++, HTML, CSS, and JavaScript</span>. Aspiring to make a positive
          impact through technology and <span className="text-yellow-500">freelancing</span>.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex space-x-4">
          <a
            href="/contact"
            className="px-6 py-2 bg-green-500 text-lg font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
          <a
            href={resume}
            className="flex gap-2 px-6 py-2 bg-blue-500 text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Resume

          </a>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/Anuragkumar86"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-400 hover:text-green-400 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/anuragkumar86"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-400 hover:text-blue-400 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/_anurag_yadav_86"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-400 hover:text-pink-400 transition-all duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Section: Floating Image */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center relative">
        <motion.div
          className="w-70 h-70 md:w-90 md:h-90 rounded-full border-6 border-green-400 flex items-center justify-center overflow-hidden shadow-xl hover:border-yellow-500"
          animate={{ y: [0, -40, 0] }} // Moves up and down
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={profileImage} alt="Profile" className="w-70 h-70 md:w-90 md:h-90 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
