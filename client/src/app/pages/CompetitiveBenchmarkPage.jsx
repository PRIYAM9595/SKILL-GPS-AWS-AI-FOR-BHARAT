import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Minus,
  Trophy,
  MapPin,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";

const benchmarkData = [
  { skill: "React", you: 85, average: 72 },
  { skill: "TypeScript", you: 70, average: 68 },
  { skill: "Node.js", you: 80, average: 70 },
  { skill: "AWS", you: 55, average: 65 },
];

const radarData = [
  { subject: "Frontend", you: 78, market: 70 },
  { subject: "Backend", you: 71, market: 68 },
  { subject: "Cloud", you: 49, market: 63 },
];

const peerComparison = [
  { name: "Sarah Chen", score: 82, role: "Senior Frontend", location: "SF", trend: "up" },
  { name: "You", score: 78, role: "Full Stack", location: "Remote", trend: "up", isYou: true },
  { name: "Mike", score: 76, role: "Backend", location: "Seattle", trend: "stable" },
];

export default function CompetitiveBenchmarkPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Competitive Benchmark</h1>
        <p className="text-gray-500">
          Compare your skills with the market.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        {["Top 35%", "8 Skills", "3 Skills", "1,200+"].map((s, i) => (
          <div key={i} className="border p-4 rounded bg-white">
            <TrendingUp className="text-blue-600" />
            <h2 className="font-semibold">{s}</h2>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Bar */}
        <div className="border rounded p-4 bg-white">
          <h2 className="font-semibold mb-3">Skill Comparison</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={benchmarkData}>
              <XAxis dataKey="skill" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="you" fill="#2563eb" />
              <Bar dataKey="average" fill="#9ca3af" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Radar */}
        <div className="border rounded p-4 bg-white">
          <h2 className="font-semibold mb-3">Category Comparison</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar dataKey="you" stroke="#2563eb" fill="#2563eb" fillOpacity={0.4} />
              <Radar dataKey="market" stroke="#9ca3af" fill="#9ca3af" fillOpacity={0.3} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="space-y-4">
        <h2 className="font-semibold">Peer Leaderboard</h2>

        {peerComparison.map((peer, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="border rounded p-4 bg-white flex justify-between"
          >
            <div>
              <h3 className="font-medium flex items-center gap-2">
                {peer.name}
                {peer.isYou && (
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 rounded">
                    You
                  </span>
                )}
              </h3>

              <p className="text-sm text-gray-500">{peer.role}</p>
              <p className="text-xs flex items-center gap-1 text-gray-400">
                <MapPin className="w-3" /> {peer.location}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <h3 className="font-semibold">{peer.score}</h3>
                <p className="text-xs">Score</p>
              </div>

              {peer.trend === "up" && <ArrowUp className="text-green-600" />}
              {peer.trend === "down" && <ArrowDown className="text-red-600" />}
              {peer.trend === "stable" && <Minus className="text-gray-400" />}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="border rounded p-6 bg-white text-center">
        <h3 className="font-semibold mb-2">Improve your skills</h3>
        <Link
          to="/app/skill-gap"
          className="inline-flex gap-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          View Improvement Plan
        </Link>
      </div>
    </div>
  );
}