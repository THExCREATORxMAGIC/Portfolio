import React, { useState } from 'react';
import { AppConfig } from '../../types';
import { Search, Power, Settings, ArrowRight } from 'lucide-react';
import { AVATAR_URL } from '../../constants';

interface StartMenuProps {
  isOpen: boolean;
  apps: AppConfig[];
  onAppClick: (app: AppConfig) => void;
  onClose: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ isOpen, apps, onAppClick, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredApps = apps.filter(app => 
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div 
      className="fixed bottom-14 left-1/2 -translate-x-1/2 w-[95vw] md:w-[640px] bg-[#f2f2f2]/95 dark:bg-[#202020]/95 backdrop-blur-xl rounded-lg shadow-2xl border border-white/20 dark:border-gray-700 z-40 animate-in slide-in-from-bottom-5 duration-200"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-6">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Type here to search"
            className="w-full bg-white dark:bg-[#2c2c2c] border-b-2 border-blue-500 rounded-t-md px-10 py-2 focus:outline-none text-sm dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>

        {/* Pinned / All Apps */}
        <div className="mb-2 flex justify-between items-center px-2">
            <span className="text-xs font-bold text-gray-600 dark:text-gray-300">Pinned</span>
            <button className="flex items-center gap-1 text-xs text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10 px-2 py-1 rounded">
                All apps <ArrowRight size={12} />
            </button>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 gap-4 min-h-[280px] content-start">
          {filteredApps.map((app) => (
            <button
              key={app.id}
              onClick={() => { onAppClick(app); onClose(); }}
              className="flex flex-col items-center gap-2 p-2 hover:bg-white/50 dark:hover:bg-white/10 rounded-md transition-colors group"
            >
              {/* Gradient Tile Icon */}
              <div className={`${app.color} w-10 h-10 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                 <app.icon size={20} className="text-white" strokeWidth={2} />
              </div>
              
              <span className="text-[11px] font-medium text-gray-700 dark:text-gray-200 text-center truncate w-full">
                {app.title}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-6 mb-2 px-2">
             <span className="text-xs font-bold text-gray-600 dark:text-gray-300">Recommended</span>
             <div className="mt-2 space-y-1">
                 <div className="flex items-center gap-3 p-2 hover:bg-white/50 dark:hover:bg-white/10 rounded-md cursor-pointer">
                     <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300">
                        <Settings size={16} />
                     </div>
                     <div className="flex flex-col">
                         <span className="text-xs font-medium dark:text-gray-200">System Settings</span>
                         <span className="text-[10px] text-gray-500">Recently added</span>
                     </div>
                 </div>
             </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#e6e6e6] dark:bg-[#181818] px-6 py-4 rounded-b-lg flex justify-between items-center border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 hover:bg-white/50 dark:hover:bg-white/10 px-2 py-1 rounded-md cursor-pointer transition-colors">
          <img src={AVATAR_URL} alt="User" className="w-8 h-8 rounded-full" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-200">Prateek Mishra</span>
        </div>
        <button className="p-2 hover:bg-white/50 dark:hover:bg-white/10 rounded-md transition-colors text-gray-700 dark:text-gray-300">
          <Power size={18} />
        </button>
      </div>
    </div>
  );
};

export default StartMenu;