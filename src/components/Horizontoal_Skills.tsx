import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";

interface Skill {
  name: string;
  level: number; // Percentage (0 - 100)
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: "HTML", level: 100, icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-400 text-3xl" /> },
  { name: "React", level: 75, icon: <FaReact className="text-blue-400 text-3xl" /> },
  { name: "Node.js", level: 70, icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  { name: "Python", level: 80, icon: <FaPython className="text-blue-600 text-3xl" /> },
];

const HorizontalSkillBar: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10 border-t-1 border-slate-500">
      <h2 className="text-orange-500 text-3xl font-bold text-center mb-8">⚡ Skills & Tech Stack</h2>
      <div className="max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="mb-6">
            <div className="flex items-center gap-4">
              {skill.icon}
              <h3 className="text-yellow-500 text-lg font-semibold">{skill.name}</h3>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 2.5 }}
                className="bg-green-500 h-4 rounded-full"
                
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalSkillBar;
