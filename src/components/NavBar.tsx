import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 onClick={()=>{
          navigate("/")
        }} className="text-3xl font-extrabold tracking-wide text-green-400 cursor-pointer">Anurag Kumar</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-lg">
            <li>
              <Link
                to="/"
                className="hover:text-green-400 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <a href="/about" className="hover:text-green-400 transition-all duration-300">
                About
              </a>
            </li>
            <li>
              <a href="/project" className="hover:text-green-400 transition-all duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-400 transition-all duration-300">
                Contact
              </a>
            </li>
            <li>
              <a href="/achievement" className="hover:text-green-400 transition-all duration-300">
                Achievement
              </a>
            </li>
          </ul>
          <Link to="/contact">
            <button className="ml-6 px-5 py-2 text-lg font-semibold bg-green-500 rounded-full shadow-md hover:bg-green-700 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105">
              + Connect
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-lg transform ${
          isOpen ? "translate-x-1" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="w-3/4 h-full bg-gray-900 shadow-lg p-6 flex flex-col space-y-6">
          <h1 onClick={()=>{
            navigate("/")
          }} className="text-3xl font-extrabold tracking-wide text-green-400 cursor-pointer">Anurag Kumar</h1>
          <ul className="text-xl space-y-4">
            <li>
              <Link
                to="/"
                className="block text-white hover:text-green-400 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <a href="/about" className="block hover:text-green-400 transition-all duration-300" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="/project" className="block hover:text-green-400 transition-all duration-300" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="block hover:text-green-400 transition-all duration-300" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
            <li>
              <a href="/achievement" className="block hover:text-green-400 transition-all duration-300" onClick={() => setIsOpen(false)}>
                Achievements
              </a>
            </li>
          </ul>
          <Link to="/contact">
            <button className="w-full py-2 text-lg font-semibold bg-green-500 rounded-full shadow-md hover:bg-green-700 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105">
              + Connect
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
