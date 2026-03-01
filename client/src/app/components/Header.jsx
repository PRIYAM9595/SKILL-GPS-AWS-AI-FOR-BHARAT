import { Target, Bell, User, LogOut } from 'lucide-react';
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
    <header className="flex items-center justify-between p-4 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
          <Target className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            SkillGPS
          </h1>
          <p className="text-xs text-gray-400 font-medium">AI Career Navigator</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
        </button>
        <div className="h-8 w-px bg-white/10 hidden md:block"></div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-0.5">
            <div className="w-full h-full bg-[#0A0A0A] rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-300" />
            </div>
          </div>
          <span className="text-sm font-medium text-white hidden md:block">
            {user?.name || "Explorer"}
          </span>
        </div>
        <button
          onClick={handleLogout}
          className="ml-2 p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
          title="Sign out"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
