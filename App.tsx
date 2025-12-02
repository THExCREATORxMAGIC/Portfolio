import React, { useState, useEffect } from 'react';
import { AppConfig, WindowState } from './types';
import { 
  FileText, 
  Image as ImageIcon, 
  Code, 
  Calculator as CalcIcon, 
  Globe, 
  Trash2,
  Mail,
  Calendar as CalendarIcon,
  Camera,
  Settings,
  Clock,
  Briefcase,
  GraduationCap,
  UserCircle,
  Terminal,
} from 'lucide-react';
import { WALLPAPER_URL } from './constants';

// Components
import Taskbar from './components/os/Taskbar';
import StartMenu from './components/os/StartMenu';
import DraggableWindow from './components/ui/DraggableWindow';
import CalendarWidget from './components/os/CalendarWidget';
import BootScreen from './components/system/BootScreen';
import LoginScreen from './components/system/LoginScreen';
import ContextMenu from './components/os/ContextMenu';

// App Contents
import ResumeApp from './components/apps/ResumeApp';
import ProjectsApp from './components/apps/ProjectsApp';
import CalculatorApp from './components/apps/CalculatorApp';
import ExperienceApp from './components/apps/ExperienceApp';
import EducationApp from './components/apps/EducationApp';
import AboutApp from './components/apps/AboutApp';
import TerminalApp from './components/apps/TerminalApp';
import SettingsApp from './components/apps/SettingsApp';
import MailApp from './components/apps/MailApp';
import SkillsApp from './components/apps/SkillsApp';

// Define Apps with "Modern Tile" Gradient Styles
const APPS: AppConfig[] = [
  { id: 'about', title: 'About Me', icon: UserCircle, color: 'bg-gradient-to-br from-indigo-500 to-purple-600', component: AboutApp, isDesktopIcon: true },
  { id: 'experience', title: 'Experience', icon: Briefcase, color: 'bg-gradient-to-br from-orange-400 to-red-500', component: ExperienceApp, isDesktopIcon: true },
  { id: 'resume', title: 'Resume.docx', icon: FileText, color: 'bg-gradient-to-br from-blue-500 to-blue-700', component: ResumeApp, isDesktopIcon: true },
  { id: 'projects', title: 'Projects', icon: ImageIcon, color: 'bg-gradient-to-br from-emerald-400 to-teal-600', component: ProjectsApp, isDesktopIcon: true },
  { id: 'education', title: 'Education', icon: GraduationCap, color: 'bg-gradient-to-br from-yellow-400 to-amber-600', component: EducationApp, isDesktopIcon: true },
  { id: 'skills', title: 'Skills', icon: Code, color: 'bg-gradient-to-br from-slate-600 to-slate-800', component: SkillsApp, isDesktopIcon: true },
  { id: 'terminal', title: 'Terminal', icon: Terminal, color: 'bg-gradient-to-br from-gray-800 to-black', component: TerminalApp, isDesktopIcon: true },
  { id: 'mail', title: 'Mail', icon: Mail, color: 'bg-gradient-to-br from-sky-400 to-blue-500', component: MailApp },
  { id: 'calendar', title: 'Calendar', icon: CalendarIcon, color: 'bg-gradient-to-br from-cyan-400 to-blue-500', component: () => <div className="p-8 text-center text-gray-500">Calendar synced with System.</div> },
  { id: 'calculator', title: 'Calculator', icon: CalcIcon, color: 'bg-gradient-to-br from-orange-400 to-pink-500', component: CalculatorApp },
  { id: 'clock', title: 'Clock', icon: Clock, color: 'bg-gradient-to-br from-red-400 to-rose-600', component: () => <div className="h-full flex items-center justify-center text-4xl font-light text-gray-700 dark:text-gray-200">{new Date().toLocaleTimeString()}</div> },
  { id: 'camera', title: 'Camera', icon: Camera, color: 'bg-gradient-to-br from-fuchsia-500 to-purple-600', component: () => <div className="p-8 text-center text-gray-500">Camera device not found.</div> },
  { id: 'browser', title: 'Edge', icon: Globe, color: 'bg-gradient-to-br from-blue-400 to-teal-400', component: () => (
    <div className="flex flex-col h-full bg-white">
      <div className="bg-gray-100 p-2 border-b flex gap-2 items-center text-sm text-gray-600">
         <div className="flex-1 bg-white border rounded px-3 py-1">https://prateek-portfolio.com</div>
      </div>
      <iframe src="https://www.google.com/search?q=Prateek+Mishra+Developer&igu=1" className="flex-1 w-full border-none" title="Browser" />
    </div>
  ) },
  { id: 'settings', title: 'Settings', icon: Settings, color: 'bg-gradient-to-br from-slate-500 to-gray-600', component: SettingsApp },
  { id: 'trash', title: 'Recycle Bin', icon: Trash2, color: 'bg-gradient-to-br from-gray-300 to-gray-400', component: () => <div className="p-10 text-center text-gray-500">The bin is empty.</div>, isDesktopIcon: true },
];

const App: React.FC = () => {
  // System State
  const [bootStatus, setBootStatus] = useState<'boot' | 'login' | 'desktop'>('boot');
  const [wallpaper, setWallpaper] = useState(WALLPAPER_URL);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // OS State
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeAppId, setActiveAppId] = useState<string | null>(null);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [maxZIndex, setMaxZIndex] = useState(10);
  
  // Context Menu State
  const [contextMenu, setContextMenu] = useState<{ visible: boolean; x: number; y: number }>({ visible: false, x: 0, y: 0 });

  // Handle Theme Change
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle Right Click
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ visible: true, x: e.clientX, y: e.clientY });
    setIsStartOpen(false);
    setIsCalendarOpen(false);
  };

  const closeContextMenu = () => setContextMenu({ ...contextMenu, visible: false });

  // Handlers
  const openApp = (app: AppConfig) => {
    setIsStartOpen(false);
    setIsCalendarOpen(false);
    closeContextMenu();

    if (windows.find(w => w.appId === app.id)) {
      setWindows(prev => prev.map(w => 
        w.appId === app.id ? { ...w, isMinimized: false, zIndex: maxZIndex + 1 } : w
      ));
      setActiveAppId(app.id);
      setMaxZIndex(prev => prev + 1);
      return;
    }

    const newWindow: WindowState = {
      id: Date.now().toString(),
      appId: app.id,
      title: app.title,
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      zIndex: maxZIndex + 1,
      position: { x: 50 + (windows.length * 20), y: 50 + (windows.length * 20) },
      size: { width: Math.min(window.innerWidth * 0.8, 900), height: Math.min(window.innerHeight * 0.8, 600) }
    };

    setWindows([...windows, newWindow]);
    setActiveAppId(app.id);
    setMaxZIndex(prev => prev + 1);
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    if (activeAppId === APPS.find(a => windows.find(w => w.id === id)?.appId === a.id)?.id) {
      setActiveAppId(null);
    }
  };

  const minimizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
    setActiveAppId(null);
  };

  const maximizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w));
  };

  const focusWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: maxZIndex + 1 } : w));
    setActiveAppId(windows.find(w => w.id === id)?.appId || null);
    setMaxZIndex(prev => prev + 1);
  };

  const moveWindow = (id: string, x: number, y: number) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, position: { x, y } } : w));
  };

  // Render System Phases
  if (bootStatus === 'boot') return <BootScreen onComplete={() => setBootStatus('login')} />;
  if (bootStatus === 'login') return <LoginScreen onLogin={() => setBootStatus('desktop')} />;

  return (
    <div 
        className="h-screen w-screen overflow-hidden bg-cover bg-center select-none font-sans transition-[background-image] duration-500 ease-in-out"
        style={{ backgroundImage: `url(${wallpaper})` }}
        onClick={() => { setIsStartOpen(false); setIsCalendarOpen(false); closeContextMenu(); }}
        onContextMenu={handleContextMenu}
    >
      {/* Desktop Icons */}
      <div className="absolute top-0 left-0 p-4 grid grid-flow-col grid-rows-[repeat(auto-fill,7rem)] gap-6 items-start content-start h-[calc(100%-48px)]">
        {APPS.filter(app => app.isDesktopIcon).map(app => (
          <button
            key={app.id}
            onDoubleClick={(e) => { e.stopPropagation(); openApp(app); }}
            onClick={(e) => { e.stopPropagation(); closeContextMenu(); }}
            className="flex flex-col items-center gap-2 w-24 rounded group transition-colors"
          >
             {/* Icon Container with Gradient Background */}
             <div className={`${app.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 ring-2 ring-transparent group-focus:ring-white/50`}>
                <app.icon 
                  size={28} 
                  className="text-white drop-shadow-sm" 
                  strokeWidth={2}
                />
             </div>
             
             {/* Label with heavy shadow for visibility */}
             <span className="text-white text-xs font-medium text-center line-clamp-2 leading-tight px-1 rounded-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] shadow-black">
               {app.title}
             </span>
          </button>
        ))}
      </div>

      {/* Windows */}
      {windows.map(win => {
        const app = APPS.find(a => a.id === win.appId);
        if (!app) return null;
        const AppComp = app.component;
        const appProps = app.id === 'settings' 
            ? { 
                currentWallpaper: wallpaper, 
                onWallpaperChange: setWallpaper,
                isDarkMode,
                onToggleTheme: () => setIsDarkMode(!isDarkMode)
              }
            : {};
        
        return (
          <DraggableWindow
            key={win.id}
            window={win}
            onClose={() => closeWindow(win.id)}
            onMinimize={() => minimizeWindow(win.id)}
            onMaximize={() => maximizeWindow(win.id)}
            onFocus={() => focusWindow(win.id)}
            onMove={(x, y) => moveWindow(win.id, x, y)}
          >
            <AppComp {...appProps} />
          </DraggableWindow>
        );
      })}

      {/* Overlays */}
      <StartMenu 
        isOpen={isStartOpen} 
        apps={APPS} 
        onAppClick={openApp} 
        onClose={() => setIsStartOpen(false)} 
      />
      
      <CalendarWidget 
        isOpen={isCalendarOpen} 
        onClose={() => setIsCalendarOpen(false)} 
      />

      <ContextMenu 
        {...contextMenu} 
        onClose={closeContextMenu} 
        onRefresh={() => window.location.reload()}
        onSettings={() => openApp(APPS.find(a => a.id === 'settings')!)}
        onTerminal={() => openApp(APPS.find(a => a.id === 'terminal')!)}
      />
      
      {/* Taskbar */}
      <Taskbar 
        apps={APPS.filter(a => a.id !== 'trash' && !a.isDesktopIcon || windows.find(w => w.appId === a.id))}
        openApps={windows.map(w => w.appId)}
        activeAppId={activeAppId}
        onAppClick={openApp}
        onStartClick={() => {
            setIsStartOpen(!isStartOpen);
            setIsCalendarOpen(false);
            closeContextMenu();
        }}
        isStartOpen={isStartOpen}
        onDateClick={() => {
            setIsCalendarOpen(!isCalendarOpen);
            setIsStartOpen(false);
            closeContextMenu();
        }}
      />
    </div>
  );
};

export default App;