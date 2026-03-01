import { Home, Map, BookOpen, Target, BarChart3, Settings, HelpCircle, ChevronRight, ChevronLeft, Upload, TrendingUp, Calendar } from 'lucide-react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/app/dashboard' },
  { icon: Upload, label: 'Upload Resume', path: '/app/resume-upload' },
  { icon: BookOpen, label: 'Skill Analysis', path: '/app/ai-skill-analysis' },
  { icon: Target, label: 'Skill Gaps', path: '/app/skill-gap' },
  { icon: Map, label: 'Learning Navigator', path: '/app/learning-navigator' },
  { icon: TrendingUp, label: 'Career Simulation', path: '/app/career-simulation' },
  { icon: BarChart3, label: 'Analytics', path: '/app/progress-analytics' },
  { icon: Calendar, label: 'Weekly Planner', path: '/app/weekly-planner' },
];

const secondaryItems = [
  { icon: Settings, label: 'Settings', path: '/app/settings' },
  { icon: HelpCircle, label: 'Help & Support', path: '/app/help' },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const NavItem = ({ item }) => {
    const Icon = item.icon;
    const isActive = location.pathname.includes(item.path);
    return (
      <NavLink
        to={item.path}
        className={`flex items-center gap-3 px-4 py-3 mx-2 my-1 rounded-xl transition-all duration-200 ${isActive
            ? "bg-blue-600/20 text-blue-400 font-medium"
            : "text-gray-400 hover:bg-white/5 hover:text-white"
          }`}
      >
        <Icon size={20} className={isActive ? "text-blue-400" : ""} />
        {!collapsed && <span className="truncate">{item.label}</span>}
      </NavLink>
    );
  };

  return (
    <div className={`h-screen bg-[#0A0A0A] border-r border-white/10 text-white flex flex-col transition-all duration-300 relative ${collapsed ? 'w-20' : 'w-64'}`}>

      {/* Toggle button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-6 w-6 h-6 rounded-full bg-[#1A1A1A] border border-white/20 text-gray-400 hover:text-white flex items-center justify-center shadow-lg transition-transform z-50"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Primary navigation */}
      <nav className="flex-1 overflow-y-auto py-6 space-y-1 custom-scrollbar">
        {navItems.map((item) => <NavItem key={item.path} item={item} />)}
      </nav>

      {/* Secondary navigation */}
      <nav className="border-t border-white/10 py-4 space-y-1">
        {secondaryItems.map((item) => <NavItem key={item.path} item={item} />)}
      </nav>

      {/* Version info */}
      {!collapsed && (
        <div className="border-t border-white/10 px-6 py-4 text-xs text-gray-500 bg-white/5">
          <p className="font-medium text-gray-400">SkillGPS v2.0</p>
          <p className="flex items-center gap-1 mt-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Systems Online</p>
        </div>
      )}
    </div>
  );
}
