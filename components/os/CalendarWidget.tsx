import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface CalendarWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarWidget: React.FC<CalendarWidgetProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, today.getMonth() + 1, 0).getDate();
  const startDay = new Date(currentYear, today.getMonth(), 1).getDay();

  // Simple day generation
  const days = [];
  for (let i = 0; i < startDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <div 
        className="fixed bottom-14 right-2 w-80 bg-[#f2f2f2]/95 dark:bg-[#202020]/95 backdrop-blur-xl rounded-lg shadow-2xl border border-white/20 dark:border-gray-700 z-40 p-4 animate-in slide-in-from-right-10 duration-300"
        onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
            {today.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
        </span>
        <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"><ChevronUp size={14} className="dark:text-white" /></button>
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"><ChevronDown size={14} className="dark:text-white" /></button>
        </div>
      </div>

      <div className="flex justify-between mb-4 items-center">
          <h3 className="font-medium text-gray-700 dark:text-gray-200">{currentMonth} {currentYear}</h3>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-gray-500">
         {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <span key={d}>{d}</span>)}
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {days.map((day, idx) => (
          <div 
            key={idx} 
            className={`
                h-8 flex items-center justify-center rounded-full transition-colors
                ${day === today.getDate() ? 'bg-blue-600 text-white font-bold' : 'hover:bg-gray-200 dark:hover:bg-white/10 dark:text-gray-200'}
                ${!day ? 'invisible' : 'cursor-pointer'}
            `}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarWidget;
