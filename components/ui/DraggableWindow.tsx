import React, { useState, useRef, useEffect } from 'react';
import { Minimize2, Maximize2, X, Minus } from 'lucide-react';
import { WindowState } from '../../types';

interface DraggableWindowProps {
  window: WindowState;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  onMove: (x: number, y: number) => void;
  children: React.ReactNode;
}

const DraggableWindow: React.FC<DraggableWindowProps> = ({
  window,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onMove,
  children,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);
  
  // Auto-maximize on mobile on mount
  useEffect(() => {
    if (document.body.clientWidth < 768 && !window.isMaximized) {
        onMaximize();
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.isMaximized) return;
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - window.position.x,
      y: e.clientY - window.position.y,
    };
    onFocus();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragStart.current.x;
        const newY = e.clientY - dragStart.current.y;
        onMove(newX, newY);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, onMove]);

  if (window.isMinimized) return null;

  const style = window.isMaximized
    ? { top: 0, left: 0, width: '100%', height: 'calc(100% - 48px)' } // 48px taskbar
    : {
        top: window.position.y,
        left: window.position.x,
        width: window.size.width,
        height: window.size.height,
      };

  return (
    <div
      ref={windowRef}
      className={`absolute flex flex-col bg-white dark:bg-slate-900 rounded-lg shadow-2xl overflow-hidden border border-gray-200 dark:border-slate-700 transition-all duration-100 ${
        window.isMaximized ? 'rounded-none border-0' : ''
      }`}
      style={{
        ...style,
        zIndex: window.zIndex,
      }}
      onMouseDown={onFocus}
    >
      {/* Title Bar */}
      <div
        className="h-9 flex items-center justify-between px-2 bg-gray-100 dark:bg-slate-800 select-none shrink-0"
        onMouseDown={handleMouseDown}
        onDoubleClick={onMaximize}
      >
        <div className="flex items-center text-xs font-medium text-gray-700 dark:text-gray-200 ml-2">
          {window.title}
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            className="p-1.5 hover:bg-gray-200 dark:hover:bg-slate-700 rounded transition-colors"
          >
            <Minus size={14} className="text-gray-600 dark:text-gray-400" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onMaximize(); }}
            className="p-1.5 hover:bg-gray-200 dark:hover:bg-slate-700 rounded transition-colors"
          >
            {window.isMaximized ? (
              <Minimize2 size={14} className="text-gray-600 dark:text-gray-400" />
            ) : (
              <Maximize2 size={14} className="text-gray-600 dark:text-gray-400" />
            )}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="p-1.5 hover:bg-red-500 hover:text-white rounded transition-colors group"
          >
            <X size={14} className="text-gray-600 dark:text-gray-400 group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 relative">
        {children}
      </div>
    </div>
  );
};

export default DraggableWindow;