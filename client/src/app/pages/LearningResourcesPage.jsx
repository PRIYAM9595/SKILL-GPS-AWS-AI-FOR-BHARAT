import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Video,
  BookOpen,
  FileText,
  Star,
  Search,
  ExternalLink,
  Play,
} from "lucide-react";

import { LearningResources } from "../components/LearningResources";

const resources = [
  {
    id: 1,
    title: "Advanced TypeScript Patterns",
    type: "video",
    platform: "YouTube",
    duration: "2h 15m",
    rating: 4.8,
    difficulty: "advanced",
    skill: "TypeScript",
    url: "#",
  },
  {
    id: 2,
    title: "System Design Interview Guide",
    type: "course",
    platform: "Udemy",
    duration: "12h",
    rating: 4.9,
    difficulty: "advanced",
    skill: "System Design",
    url: "#",
  },
  {
    id: 3,
    title: "AWS Solutions Architect",
    type: "course",
    platform: "Coursera",
    duration: "40h",
    rating: 4.7,
    difficulty: "intermediate",
    skill: "AWS",
    url: "#",
  },
];

export default function LearningResourcesPage() {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter((r) => {
    if (selectedType !== "all" && r.type !== selectedType) return false;
    if (selectedDifficulty !== "all" && r.difficulty !== selectedDifficulty)
      return false;
    if (
      searchQuery &&
      !r.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case "video":
        return Video;
      case "course":
        return Play;
      case "article":
        return FileText;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Learning Resources</h1>
        <p className="text-gray-500">
          Curated materials based on your skill gaps.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="relative w-full">
          <Search className="absolute left-3 top-3 w-4 text-gray-400" />
          <input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>

        {/* Type */}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="all">All Types</option>
          <option value="video">Video</option>
          <option value="course">Course</option>
          <option value="article">Article</option>
        </select>

        {/* Difficulty */}
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="all">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredResources.map((r) => {
          const Icon = getTypeIcon(r.type);

          return (
            <motion.div
              key={r.id}
              whileHover={{ scale: 1.03 }}
              className="border rounded-lg p-5 bg-white"
            >
              <Icon className="text-blue-600 mb-2" />

              <h3 className="font-semibold">{r.title}</h3>
              <p className="text-sm text-gray-500">{r.platform}</p>

              <div className="flex justify-between text-sm mt-2">
                <span>{r.duration}</span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 text-yellow-500" /> {r.rating}
                </span>
              </div>

              <p className="text-xs mt-2 text-gray-500">
                Skill: {r.skill}
              </p>

              <Link
                to={r.url}
                className="inline-flex items-center gap-2 text-blue-600 mt-3"
              >
                Open <ExternalLink className="w-4" />
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Empty */}
      {filteredResources.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No resources found.
        </div>
      )}
    </div>
  );
}