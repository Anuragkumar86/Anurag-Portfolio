import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Copyright: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 pt-20 pb-2 text-center border-t-1 border-slate-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Copyright Text */}
        <p className="text-sm">
          © {new Date().getFullYear()} Anurag Kumar. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/Anuragkumar86" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/anuragkumar86" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com/ANURAGYADAV86" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com/_anurag_yadav_86" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Copyright;
