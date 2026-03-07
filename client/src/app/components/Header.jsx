import { Bell, User, LogOut, Search, Briefcase } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#0B111B]/90 px-4 py-3 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Dashboard</p>
          <h1 className="text-lg font-semibold text-white truncate">Career Intelligence Workspace</h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-400 min-w-[240px]">
            <Search className="w-4 h-4" />
            <span>Search plans, skills, modules</span>
          </div>

          <button
            onClick={() => navigate('/app/help')}
            title="Open help center"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 text-slate-300 transition-colors hover:border-slate-600 hover:text-white"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-400"></span>
          </button>

          <div className="hidden sm:flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2">
            <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-slate-300" />
            </div>
            <div className="leading-tight">
              <p className="text-xs text-slate-400">Signed in as</p>
              <p className="text-sm font-medium text-white max-w-[140px] truncate">{user?.name || 'Explorer'}</p>
            </div>
          </div>

          <button
            onClick={() => navigate('/app/settings')}
            title="Open settings"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 text-slate-300 transition-colors hover:border-slate-600 hover:text-white"
          >
            <User className="w-4 h-4" />
          </button>

          <button
            onClick={handleLogout}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/70 text-slate-300 transition-colors hover:border-red-400/50 hover:text-red-300"
            title="Sign out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
