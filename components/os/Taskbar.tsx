import React, { useState, useEffect } from 'react';
import { AppConfig } from '../../types';
import { Wifi, Volume2, Battery, ChevronUp } from 'lucide-react';

interface TaskbarProps {
  apps: AppConfig[];
  openApps: string[];
  activeAppId: string | null;
  onAppClick: (app: AppConfig) => void;
  onStartClick: () => void;
  isStartOpen: boolean;
  onDateClick: () => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ 
  apps, 
  openApps, 
  activeAppId, 
  onAppClick, 
  onStartClick, 
  isStartOpen,
  onDateClick
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], { month: 'numeric', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="h-12 w-full bg-[#f3f3f3]/85 dark:bg-[#202020]/85 backdrop-blur-md border-t border-white/20 dark:border-white/5 flex items-center justify-between px-2 fixed bottom-0 z-50 select-none">
      
      {/* Weather/Widget Placeholder (Left) */}
      <div className="flex-1 hidden sm:flex items-center pl-2 opacity-0 md:opacity-100 transition-opacity">
         <div className="flex items-center gap-2 hover:bg-white/40 dark:hover:bg-white/10 p-1.5 rounded-md cursor-pointer transition-colors">
            <span className="text-xs font-medium text-gray-700 dark:text-gray-200">72°F Sunny</span>
         </div>
      </div>

      {/* Center Apps */}
      <div className="flex-1 flex items-center justify-center gap-1">
        <button
          onClick={(e) => { e.stopPropagation(); onStartClick(); }}
          className={`p-2 rounded-md transition-all duration-200 hover:bg-white/40 dark:hover:bg-white/10 active:scale-95 ${isStartOpen ? 'bg-white/40 dark:bg-white/10' : ''}`}
          title="Start"
        >
           {/* Windows 11 Logo Simulation */}
           <div className="grid grid-cols-2 gap-0.5 w-6 h-6 transform hover:scale-105 transition-transform">
              <div className="bg-[#0078d4] rounded-[1px]"></div>
              <div className="bg-[#0078d4] rounded-[1px]"></div>
              <div className="bg-[#0078d4] rounded-[1px]"></div>
              <div className="bg-[#0078d4] rounded-[1px]"></div>
           </div>
        </button>

        {apps.filter(app => !app.isDesktopIcon || openApps.includes(app.id)).map((app) => (
          <button
            key={app.id}
            onClick={(e) => { e.stopPropagation(); onAppClick(app); }}
            className={`
              group relative p-1.5 rounded-md transition-all duration-200 hover:bg-white/40 dark:hover:bg-white/10 active:scale-95
              ${activeAppId === app.id ? 'bg-white/40 dark:bg-white/10' : ''}
              ${openApps.includes(app.id) && activeAppId !== app.id ? 'bg-white/10' : ''}
            `}
            title={app.title}
          >
            {/* Gradient Tile Icon (Small) */}
            <div className={`${app.color} w-8 h-8 rounded-lg flex items-center justify-center shadow-sm group-hover:-translate-y-1 transition-transform`}>
                 <app.icon size={18} className="text-white" strokeWidth={2} />
            </div>

            {openApps.includes(app.id) && (
              <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1 rounded-full ${activeAppId === app.id ? 'bg-blue-500 w-3 transition-all' : 'bg-gray-400'}`}></span>
            )}
          </button>
        ))}
      </div>

      {/* System Tray (Right) */}
      <div className="flex-1 flex items-center justify-end gap-1">
        <div className="hidden sm:flex items-center gap-1 hover:bg-white/40 dark:hover:bg-white/10 p-1 rounded-md cursor-pointer">
          <ChevronUp size={16} className="text-gray-600 dark:text-gray-300" />
        </div>
        
        <div className="flex items-center gap-2 hover:bg-white/40 dark:hover:bg-white/10 px-2 py-1 rounded-md cursor-pointer">
          <Wifi size={16} className="text-gray-600 dark:text-gray-300" />
          <Volume2 size={16} className="text-gray-600 dark:text-gray-300" />
          <Battery size={16} className="text-gray-600 dark:text-gray-300" />
        </div>

        <button 
            onClick={(e) => { e.stopPropagation(); onDateClick(); }}
            className="flex flex-col items-end px-2 py-0.5 hover:bg-white/40 dark:hover:bg-white/10 rounded-md cursor-pointer transition-colors text-right"
        >
          <span className="text-xs font-medium text-gray-800 dark:text-gray-100">{formatTime(time)}</span>
          <span className="text-[10px] text-gray-600 dark:text-gray-300">{formatDate(time)}</span>
        </button>
      </div>
    </div>
  );
};

export default Taskbar;