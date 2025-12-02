import React, { useState } from 'react';
import { Monitor, User, Info, Check, Moon, Sun } from 'lucide-react';
import { WALLPAPERS } from '../../constants';

interface SettingsProps {
  currentWallpaper?: string;
  onWallpaperChange?: (url: string) => void;
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

const SettingsApp: React.FC<SettingsProps> = ({ 
  currentWallpaper, 
  onWallpaperChange,
  isDarkMode,
  onToggleTheme
}) => {
  const [activeTab, setActiveTab] = useState('personalization');

  const tabs = [
    { id: 'system', label: 'System', icon: Monitor },
    { id: 'personalization', label: 'Personalization', icon: User },
    { id: 'about', label: 'About', icon: Info },
  ];

  return (
    <div className="flex h-full bg-[#f3f3f3] dark:bg-[#202020] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 dark:bg-[#272727] p-4 flex flex-col gap-1 border-r border-gray-200 dark:border-none">
        <div className="flex items-center gap-3 px-4 py-6 mb-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">P</div>
            <div>
                <div className="font-semibold text-sm">Prateek Mishra</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Local Account</div>
            </div>
        </div>
        
        <div className="relative mb-4">
             <input type="text" placeholder="Find a setting" className="w-full bg-white dark:bg-[#333] border border-gray-200 dark:border-gray-600 rounded px-3 py-1.5 text-sm focus:border-blue-500 outline-none dark:text-white" />
        </div>

        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-3 px-4 py-2 rounded text-sm transition-colors ${
              activeTab === tab.id ? 'bg-gray-200 dark:bg-white/10' : 'hover:bg-gray-200 dark:hover:bg-white/5'
            }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-8 overflow-auto bg-white dark:bg-[#202020]">
        {activeTab === 'personalization' && (
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-300">
            <h2 className="text-2xl font-semibold mb-6">Personalization</h2>
            
            {/* Theme Toggle */}
             <div className="bg-gray-50 dark:bg-[#2c2c2c] rounded-lg p-4 mb-6 flex justify-between items-center border border-gray-100 dark:border-none">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                      {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
                   </div>
                   <div>
                       <div className="font-medium">App Mode</div>
                       <div className="text-xs text-gray-500 dark:text-gray-400">Select your preferred lighting mode</div>
                   </div>
                </div>
                <button 
                  onClick={onToggleTheme}
                  className={`
                    relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${isDarkMode ? 'bg-blue-600' : 'bg-gray-300'}
                  `}
                >
                  <span 
                    className={`
                      absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 shadow-sm
                      ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}
                    `} 
                  />
                </button>
             </div>

            <div className="bg-gray-50 dark:bg-[#2c2c2c] rounded-lg p-6 mb-6">
                <div className="h-40 bg-gray-200 dark:bg-[#333] rounded-lg mb-4 bg-cover bg-center transition-all duration-500" style={{ backgroundImage: `url(${currentWallpaper})` }}>
                    <div className="flex justify-end p-4">
                        <div className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-md">Current Desktop</div>
                    </div>
                </div>
            </div>

            <h3 className="text-sm font-medium mb-4 text-gray-500 dark:text-gray-400">Select a background</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {WALLPAPERS.map((wp) => (
                <button
                  key={wp.id}
                  onClick={() => onWallpaperChange && onWallpaperChange(wp.url)}
                  className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all hover:opacity-90 ${
                    currentWallpaper === wp.url ? 'border-blue-500 ring-2 ring-blue-500/30' : 'border-transparent'
                  }`}
                >
                  <img src={wp.thumbnail} alt={wp.name} className="w-full h-full object-cover" />
                  {currentWallpaper === wp.url && (
                    <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
                      <Check size={12} />
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2">
                     <span className="text-white text-xs font-medium">{wp.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'system' && (
          <div className="max-w-2xl">
             <h2 className="text-2xl font-semibold mb-6">System</h2>
             <div className="space-y-2">
                 {['Display', 'Sound', 'Notifications', 'Focus assist', 'Power & battery', 'Storage', 'Multitasking'].map(item => (
                     <div key={item} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-[#2c2c2c] rounded-md hover:bg-gray-100 dark:hover:bg-[#353535] cursor-pointer transition-colors border border-gray-100 dark:border-transparent">
                         <span className="font-medium">{item}</span>
                         <span className="text-gray-400 text-lg">›</span>
                     </div>
                 ))}
             </div>
          </div>
        )}

        {activeTab === 'about' && (
            <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold mb-6">About</h2>
                <div className="bg-gray-50 dark:bg-[#2c2c2c] p-6 rounded-lg border border-gray-100 dark:border-transparent">
                    <h3 className="font-bold mb-2">Device specifications</h3>
                    <div className="text-sm space-y-2 text-gray-600 dark:text-gray-300">
                        <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                            <span>Device name</span>
                            <span className="font-mono text-gray-900 dark:text-gray-100">PRATEEK-PORTFOLIO</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                            <span>Processor</span>
                            <span>Simulated Web Processor</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                            <span>System type</span>
                            <span>64-bit operating system, React-based processor</span>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default SettingsApp;