import React from 'react';
import { RefreshCw, Monitor, Grid, Settings, Terminal } from 'lucide-react';

interface ContextMenuProps {
  x: number;
  y: number;
  visible: boolean;
  onClose: () => void;
  onRefresh: () => void;
  onSettings: () => void;
  onTerminal: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, visible, onClose, onRefresh, onSettings, onTerminal }) => {
  if (!visible) return null;

  return (
    <div 
        className="fixed bg-[#f9f9f9]/90 dark:bg-[#202020]/95 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-xl rounded-md w-48 py-1 z-[100] text-sm animate-in fade-in zoom-in-95 duration-100 origin-top-left"
        style={{ top: y, left: x }}
        onClick={(e) => e.stopPropagation()}
    >
        <div className="px-1 space-y-0.5">
             <button className="w-full text-left px-3 py-1.5 hover:bg-blue-500 hover:text-white rounded-sm flex items-center gap-2 dark:text-gray-200 transition-colors">
                <Grid size={14} /> View
             </button>
             <button className="w-full text-left px-3 py-1.5 hover:bg-blue-500 hover:text-white rounded-sm flex items-center gap-2 dark:text-gray-200 transition-colors">
                 Sort by
             </button>
             <button 
                onClick={() => { onRefresh(); onClose(); }}
                className="w-full text-left px-3 py-1.5 hover:bg-blue-500 hover:text-white rounded-sm flex items-center gap-2 dark:text-gray-200 transition-colors"
             >
                <RefreshCw size={14} /> Refresh
             </button>
        </div>
        
        <div className="h-px bg-gray-200 dark:bg-gray-700 my-1 mx-2"></div>
        
        <div className="px-1 space-y-0.5">
            <button 
                onClick={() => { onTerminal(); onClose(); }}
                className="w-full text-left px-3 py-1.5 hover:bg-blue-500 hover:text-white rounded-sm flex items-center gap-2 dark:text-gray-200 transition-colors"
            >
                <Terminal size={14} /> Open Terminal
             </button>
        </div>

        <div className="h-px bg-gray-200 dark:bg-gray-700 my-1 mx-2"></div>

        <div className="px-1 space-y-0.5">
             <button className="w-full text-left px-3 py-1.5 hover:bg-blue-500 hover:text-white rounded-sm flex items-center gap-2 dark:text-gray-200 transition-colors">
                 Display settings
             </button>
             <button 
                onClick={() => { onSettings(); onClose(); }}
                className="w-full text-left px-3 py-1.5 hover:bg-blue-500 hover:text-white rounded-sm flex items-center gap-2 dark:text-gray-200 transition-colors"
             >
                 <Settings size={14} /> Personalize
             </button>
        </div>
    </div>
  );
};

export default ContextMenu;