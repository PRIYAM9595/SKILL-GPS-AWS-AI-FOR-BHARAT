import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ResumeGateRoute } from "./components/ResumeGateRoute";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import ResumeUploadPage from "./pages/ResumeUploadPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AISkillAnalysisPage from "./pages/AISkillAnalysisPage";
import SkillGapPage from "./pages/SkillGapPage";
import LearningNavigatorPage from "./pages/LearningNavigatorPage";
import LearningResourcesPage from "./pages/LearningResourcesPage";
import CareerSimulationPage from "./pages/CareerSimulationPage";
import ProgressAnalyticsPage from "./pages/ProgressAnalyticsPage";
import CompetitiveBenchmarkPage from "./pages/CompetitiveBenchmarkPage";
import AIWeeklyPlannerPage from "./pages/AIWeeklyPlannerPage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected Main App Routes */}
          <Route
            path="/app/*"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          />

          {/* Redirect unknown route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

function MainLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4">
          <Routes>
            {/* Resume Upload - No Gate Needed Here */}
            <Route path="resume-upload" element={<ResumeUploadPage />} />

            {/* Gated Routes */}
            <Route path="dashboard" element={<ResumeGateRoute><DashboardPage /></ResumeGateRoute>} />
            <Route path="ai-skill-analysis" element={<ResumeGateRoute><AISkillAnalysisPage /></ResumeGateRoute>} />
            <Route path="skill-gap" element={<ResumeGateRoute><SkillGapPage /></ResumeGateRoute>} />
            <Route path="learning-navigator" element={<ResumeGateRoute><LearningNavigatorPage /></ResumeGateRoute>} />
            <Route path="learning-resources" element={<ResumeGateRoute><LearningResourcesPage /></ResumeGateRoute>} />
            <Route path="career-simulation" element={<ResumeGateRoute><CareerSimulationPage /></ResumeGateRoute>} />
            <Route path="progress-analytics" element={<ResumeGateRoute><ProgressAnalyticsPage /></ResumeGateRoute>} />
            <Route path="competitive-benchmark" element={<ResumeGateRoute><CompetitiveBenchmarkPage /></ResumeGateRoute>} />
            <Route path="weekly-planner" element={<ResumeGateRoute><AIWeeklyPlannerPage /></ResumeGateRoute>} />
            <Route path="settings" element={<ResumeGateRoute><SettingsPage /></ResumeGateRoute>} />
            <Route path="help" element={<ResumeGateRoute><HelpPage /></ResumeGateRoute>} />

            {/* Redirect any unknown route to dashboard */}
            <Route path="*" element={<Navigate to="dashboard" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
