import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.JWT_SECRET || "super_secret_dummy_key_123";

// Middleware
app.use(cors());
app.use(express.json());

// Dummy User DB
const users = [];

// --- AUTHENTICATION ROUTES ---

// Register Route
app.post("/api/auth/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (users.find((u) => u.email === email)) {
    return res.status(400).json({ error: "User already exists" });
  }

  const newUser = { id: Date.now().toString(), name, email, password, hasResume: false };
  users.push(newUser);

  const token = jwt.sign({ id: newUser.id, email: newUser.email }, SECRET_KEY, { expiresIn: "1h" });

  // Exclude password from response
  const { password: _, ...userWithoutPassword } = newUser;

  res.status(201).json({ token, user: userWithoutPassword });
});

// Login Route
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

  const { password: _, ...userWithoutPassword } = user;
  res.json({ token, user: userWithoutPassword });
});

// Upload Resume Route (Mock)
app.post("/api/auth/upload-resume", (req, res) => {
  const { userId } = req.body;
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    // If testing without register/login, allow passing through
    return res.json({ success: true, message: "Resume uploaded" });
  }

  users[userIndex].hasResume = true;
  res.json({ success: true, user: users[userIndex] });
});

// --- GEMINI DUMMY ROUTES ---

// Dummy Learning Navigator API
app.post("/api/gemini/learning-navigator", (req, res) => {
  const { role, currentSkills } = req.body;

  // Simulate AI processing delay
  setTimeout(() => {
    res.json({
      role: role || "Software Engineer",
      learningPath: [
        {
          id: 1,
          title: "Advanced System Design",
          description: "Learn how to build scalable and robust distributed systems.",
          timeToComplete: "4 weeks",
          resources: ["Grokking the System Design Interview", "Designing Data-Intensive Applications"]
        },
        {
          id: 2,
          title: "Cloud Infrastructure (AWS/GCP)",
          description: "Master modern cloud deployment and serverless architecture.",
          timeToComplete: "3 weeks",
          resources: ["AWS Certified Solutions Architect", "GCP Professional Cloud Architect training"]
        },
        {
          id: 3,
          title: "Microservices Architecture",
          description: "Breaking monolithic applications into manageable microservices.",
          timeToComplete: "5 weeks",
          resources: ["Building Microservices by Sam Newman", "Spring Boot documentation"]
        }
      ]
    });
  }, 1500); // 1.5s delay
});

// Dummy Career Simulation API
app.post("/api/gemini/career-simulation", (req, res) => {
  const { role } = req.body;

  // Simulate AI processing delay
  setTimeout(() => {
    res.json({
      role: role || "Frontend Developer",
      simulation: {
        scenario: "You are leading the frontend migration from a deprecated framework to modern React + Vite.",
        challenges: [
          "Ensuring zero downtime during the rollout.",
          "Training the team on the new stack and tooling.",
          "Migrating legacy CSS to modern Tailwind styling."
        ],
        successMetrics: [
          "50% reduction in bundle size.",
          "Lighthouse score improvements.",
          "Developer productivity gains."
        ],
        estimatedImpact: "High visibility project, likely leading to promotion to Senior Engineer upon successful delivery."
      }
    });
  }, 1500); // 1.5s delay
});

// Dummy Dashboard API
app.post("/api/gemini/dashboard", (req, res) => {
  setTimeout(() => {
    res.json({
      stats: {
        skillScore: "88%",
        skillTrend: "+4%",
        aiReadiness: "95%",
        aiReadinessTrend: "+10%",
        achievements: "14",
        achievementsTrend: "+2",
        streak: "18 Days",
        streakTrend: "🔥"
      },
      insights: {
        message: "Based on your recent activity, Gemini recommends starting the 'Advanced State Management' module today. You are tracking 18% ahead of your cohort!"
      },
      activity: [
        { id: 1, type: "analysis", title: "Completed Skill Gap Analysis", time: "1 hour ago" },
        { id: 2, type: "upload", title: "Updated Resume Profile", time: "4 hours ago" },
        { id: 3, type: "learning", title: "Finished 'React Patterns'", time: "2 days ago" }
      ]
    });
  }, 1200);
});

// Dummy AI Skill Analysis API
app.post("/api/gemini/skill-analysis", (req, res) => {
  setTimeout(() => {
    res.json({
      summary: "Your profile shows strong foundational skills in Frontend Engineering, particularly with React and JavaScript. However, there is a prominent opportunity to expand your knowledge in System Architecture and Cloud Deployment.",
      strengths: ["React.js", "Component Architecture", "JavaScript/ES6+"],
      weaknesses: ["AWS/GCP Deployment", "GraphQL", "CI/CD Pipelines"],
      recommendations: ["Complete the 'Intro to AWS' module", "Build a project using GraphQL"]
    });
  }, 1500);
});

// Dummy Skill Gap API
app.post("/api/gemini/skill-gap", (req, res) => {
  setTimeout(() => {
    res.json({
      targetRole: "Senior Frontend Engineer",
      gaps: [
        { skill: "Performance Optimization", currentLevel: "Intermediate", targetLevel: "Expert", importance: "High" },
        { skill: "Web Accessibility (a11y)", currentLevel: "Beginner", targetLevel: "Advanced", importance: "High" },
        { skill: "State Management (Redux/Zustand)", currentLevel: "Intermediate", targetLevel: "Expert", importance: "Medium" }
      ]
    });
  }, 1300);
});

// Dummy Progress Analytics API
app.post("/api/gemini/progress-analytics", (req, res) => {
  setTimeout(() => {
    res.json({
      overallProgress: 68,
      chartData: [
        { month: "Jan", score: 45 },
        { month: "Feb", score: 52 },
        { month: "Mar", score: 60 },
        { month: "Apr", score: 68 }
      ],
      topSkillGain: "TypeScript (+25%)"
    });
  }, 1000);
});

// Dummy AI Weekly Planner API
app.post("/api/gemini/weekly-planner", (req, res) => {
  setTimeout(() => {
    res.json({
      weekOf: "Current Week",
      focusArea: "Frontend Performance",
      plan: [
        { day: "Monday", task: "Read 'Web Vitals' documentation", duration: "1h" },
        { day: "Wednesday", task: "Implement Code Splitting in a sample app", duration: "2h" },
        { day: "Friday", task: "Audit portfolio site with Lighthouse", duration: "1.5h" }
      ]
    });
  }, 1400);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
