import { useState } from "react";
import { Card, CardContent } from "./ui/card";  // If using ShadCN
import { Input } from "./ui/input";
import { Link } from "react-router-dom";  // Import Link
import { BadgeCheck, Award, Code, Search } from "lucide-react";
import type { JSX } from "react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  link?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "HackerRank 5-star Badge (C++)",
    description: "Achieved a gold badge 🎖️ and a 5-star ⭐ rating on HackerRank in C++.",
    icon: <BadgeCheck className="text-green-500" size={28} />,
    link: "https://www.hackerrank.com/profile/anuragkr8651",
  },
  {
    id: 2,
    title: "HackerRank 4-star Badge (C)",
    description: "Achieved a silver badge and a 4-star ⭐ rating on HackerRank in C.",
    icon: <BadgeCheck className="text-green-500" size={28} />,
    link: "https://www.hackerrank.com/profile/anuragkr8651",
  },
  {
    id: 3,
    title: "HackerRank 4-star Badge (Python)",
    description: "Achieved a silver badge and a 4-star ⭐ rating on HackerRank in Python.",
    icon: <BadgeCheck className="text-green-500" size={28} />,
    link: "https://www.hackerrank.com/profile/anuragkr8651",
  },
  {
    id: 4,
    title: "LeetCode 65+ Problems Solved",
    description: "Solved 50+ coding problems and shared insights on LinkedIn.",
    icon: <Code className="text-blue-500" size={28} />,
    link: "https://leetcode.com/u/anuragkr8651/",
  },
  {
    id: 5,
    title: "My All Certificates",
    description: "Explore my collection of certifications earned from various courses.",
    icon: <Award className="text-blue-500" size={28} />,
    link: "/certificates",
  },
];

export default function AchievementsSection() {
  const [search, setSearch] = useState("");

  const filteredAchievements = achievements.filter((achievement) =>
    achievement.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-slate-900 min-h-screen text-green-500 mb-6">
      <h2 className="text-3xl font-bold text-center mb-6 pt-5 text-yellow-600">⚡My Achievements</h2>
      
      <div className="relative mb-4 flex items-center">
        <Search className="absolute left-3 text-gray-400" size={20} />
        <Input
          type="text"
          placeholder="Search achievements..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 bg-gray-800 text-white border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/30"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-slate-900">
        {filteredAchievements.map((achievement) => (
          achievement.link?.startsWith("http") ? (
            // External Links - Open in New Tab
            <a 
              key={achievement.id} 
              href={achievement.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-gray-800 border border-gray-700 m-5 p-4 h-28 rounded-xl flex items-center gap-4 hover:border-blue-500 transition-all">
                {achievement.icon}
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            </a>
          ) : (
            // Internal Links - Use React Router's Link
            <Link key={achievement.id} to={achievement.link ?? ""} className="block">
              <Card className="bg-gray-800 border border-gray-700 m-5 p-4 h-28 rounded-xl flex items-center gap-4 hover:border-blue-500 transition-all">
                {achievement.icon}
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            </Link>
          )
        ))}
      </div>
    </div>
  );
}
