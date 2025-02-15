import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa";


interface Skill {
  name: string;
  level: number; // Percentage (0 - 100)
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "React", level: 75, icon: <FaReact className="text-blue-400 text-5xl" /> },
  { name: "Node.js", level: 75, icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "Python", level: 70, icon: <FaPython className="text-blue-600 text-5xl" /> },
  { name: "C++", level: 80, icon: <SiCplusplus className="text-blue-600 text-5xl" /> },
  { name: "Java", level: 30, icon: <FaJava className="text-blue-500 text-5xl" /> },
  { name: "Tailwind", level: 60, icon: <SiTailwindcss className="text-teal-400 text-5xl" /> },
];

const CircularProgressBar: React.FC<{ level: number }> = ({ level }) => {
  const circleRadius = 40;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * circleRadius;
  const progressOffset = circumference - (level / 100) * circumference;

  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r={circleRadius}
        stroke="gray"
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      <motion.circle
        cx="50"
        cy="50"
        r={circleRadius}
        stroke="green"
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        animate={{ strokeDashoffset: progressOffset }}
        transition={{ duration: 4, ease: "easeInOut" }}
      />
      <text x="50" y="50" textAnchor="middle" dy=".3em" fontSize="18" fill="white">
        {level}%
      </text>
    </svg>
  );
};

const CirculatSkillsBar: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10 mt-15 text-center border-t-1 border-b-1  border-slate-700 ">
      <h2 className="text-orange-500 text-4xl font-bold mb-8">⚡ Skills & Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center hover:scale-110">
            {skill.icon}
            <h3 className="text-yellow-500 text-lg font-semibold mt-2 ">{skill.name}</h3>
            <CircularProgressBar level={skill.level} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CirculatSkillsBar;
