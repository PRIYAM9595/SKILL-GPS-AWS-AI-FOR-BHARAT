import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ResumeGateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">Loading...</div>;
    }

    // Allow them to visit the resume-upload page explicitly without redirecting them again
    if (user && !user.hasResume && location.pathname !== "/app/resume-upload") {
        // If user has no resume and tries to access dashboard, redirect to resume upload
        return <Navigate to="/app/resume-upload" replace state={{ alert: "Please upload your resume to access this feature." }} />;
    }

    return children;
};
