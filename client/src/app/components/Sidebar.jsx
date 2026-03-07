import { Home, Map, BookOpen, Target, BarChart3, Settings, HelpCircle, Upload, TrendingUp, Calendar, Menu } from 'lucide-react';
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
        className={`group relative flex items-center gap-3 px-4 py-3 mx-2 my-1 rounded-xl transition-all duration-200 ${isActive
            ? "bg-blue-500/15 text-blue-100 border border-blue-400/30"
            : "text-gray-400 border border-transparent hover:bg-white/5 hover:text-white"
          }`}
      >
        {isActive && <span className="absolute left-0 top-2.5 h-7 w-1 rounded-r-full bg-blue-400" />}
        <Icon size={18} className={isActive ? "text-blue-300" : "text-gray-500 group-hover:text-gray-300"} />
        {!collapsed && <span className="truncate">{item.label}</span>}
      </NavLink>
    );
  };

  return (
    <div className={`h-screen bg-[#0B111B] border-r border-slate-800 text-white flex flex-col transition-all duration-300 relative ${collapsed ? 'w-20' : 'w-72'}`}>
      <div className="px-3 py-4 border-b border-slate-800 bg-slate-950/40">
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'}`}>
          {!collapsed && (
            <NavLink to="/app/dashboard" className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-semibold shadow-lg shadow-blue-900/30">
                SB
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-white leading-tight truncate tracking-wide">SkillBuild</p>
                <p className="text-xs text-slate-400 leading-tight truncate">Professional Workspace</p>
              </div>
            </NavLink>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            aria-label="Toggle sidebar"
            className={`w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center justify-center ${collapsed ? '' : 'ml-2'}`}
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Primary navigation */}
      <nav className="flex-1 overflow-y-auto py-4 space-y-1 custom-scrollbar">
        {!collapsed && (
          <p className="px-4 pt-1 pb-2 text-[11px] uppercase tracking-[0.2em] text-slate-500">Main</p>
        )}
        {navItems.map((item) => <NavItem key={item.path} item={item} />)}
      </nav>

      {/* Secondary navigation */}
      <nav className="border-t border-slate-800 py-4 space-y-1">
        {!collapsed && (
          <p className="px-4 pt-1 pb-2 text-[11px] uppercase tracking-[0.2em] text-slate-500">Support</p>
        )}
        {secondaryItems.map((item) => <NavItem key={item.path} item={item} />)}
      </nav>

      {/* Version info */}
      {!collapsed && (
        <div className="border-t border-slate-800 px-5 py-4 text-xs text-slate-500 bg-slate-950/40">
          <p className="font-medium text-slate-300">SkillGPS v2.0</p>
          <p className="flex items-center gap-2 mt-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Systems Online</p>
        </div>
      )}
    </div>
  );
}
