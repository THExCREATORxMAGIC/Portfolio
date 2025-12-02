import React, { useState } from 'react';
import { RESUME } from '../../constants';
import { Send, User, Paperclip } from 'lucide-react';

const MailApp: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSend = () => {
    window.location.href = `mailto:${RESUME.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#202020]">
      {/* Header */}
      <div className="bg-[#f0f0f0] dark:bg-[#2b2b2b] px-4 py-2 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
         <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">New Message</span>
         </div>
         <button 
            onClick={handleSend}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm transition-colors"
         >
            <Send size={14} /> Send
         </button>
      </div>

      {/* Fields */}
      <div className="p-4 space-y-4 flex-1 flex flex-col">
         <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-700 pb-2">
            <span className="text-gray-500 text-sm w-12">To:</span>
            <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded-md">
                <User size={12} className="text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-800 dark:text-blue-200">{RESUME.contact.email}</span>
            </div>
         </div>
         
         <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-700 pb-2">
            <span className="text-gray-500 text-sm w-12">Subject:</span>
            <input 
                type="text" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm dark:text-gray-200"
                placeholder="Subject"
            />
         </div>

         <textarea 
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="flex-1 w-full bg-transparent outline-none resize-none text-sm dark:text-gray-200 mt-2"
            placeholder="Type your message here..."
         ></textarea>
      </div>

      {/* Footer Tools */}
      <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex gap-4 text-gray-500">
         <button className="hover:text-blue-600 transition-colors"><Paperclip size={18} /></button>
         <div className="border-l border-gray-300 mx-1"></div>
         <span className="text-xs self-center">Sent from Windows 11 Simulator</span>
      </div>
    </div>
  );
};

export default MailApp;