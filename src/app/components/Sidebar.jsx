import { Home, Map, BookOpen, Target, BarChart3, Settings, HelpCircle, ChevronRight, Upload, TrendingUp, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';

const navItems = [
  { icon, label: 'Dashboard', path: '/dashboard' },
  { icon, label: 'Upload Resume', path: '/upload' },
  { icon, label: 'Skill Analysis', path: '/analysis' },
  { icon, label: 'Skill Gaps', path: '/skill-gaps' },
  { icon, label: 'Learning Navigator', path: '/navigator' },
  { icon, label: 'Career Simulation', path: '/simulation' },
  { icon, label: 'Analytics', path: '/analytics' },
  { icon, label: 'Weekly Planner', path: '/planner' },
];

const secondaryItems = [
  { icon, label: 'Settings', path: '/settings' },
  { icon, label: 'Help & Support', path: '/help' },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    
      
        {/* Toggle button */}
         setCollapsed(!collapsed)}
          className="absolute -right-3 top-8 w-6 h-6 rounded-full bg-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          
        

        {/* Primary navigation */}
        
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              
                
                {!collapsed && {item.label}}
              
            );
          })}
        

        {/* Secondary navigation */}
        
          {secondaryItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              
                
                {!collapsed && {item.label}}
              
            );
          })}
        

        {/* Version info */}
        {!collapsed && (
          
            
              Version 2.0.1
              AI Engine: GPT-4
            
          
        )}
      
    
  );
}
