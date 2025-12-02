import React, { useState, useRef, useEffect } from 'react';
import { RESUME } from '../../constants';

const TerminalApp: React.FC = () => {
  const [history, setHistory] = useState<string[]>([
    "Microsoft Windows [Version 10.0.22000.1]",
    "(c) Microsoft Corporation. All rights reserved.",
    "",
    "Welcome to Prateek's Portfolio CLI.",
    "Type 'help' to see available commands.",
    ""
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    inputRef.current?.focus();
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, `C:\\Users\\Prateek> ${cmd}`];

    switch (trimmedCmd) {
      case 'help':
        newHistory.push(
          "Available commands:",
          "  about     - Display profile summary",
          "  skills    - List technical skills",
          "  projects  - List projects",
          "  contact   - Show contact info",
          "  cls       - Clear screen",
          "  exit      - Close terminal (simulated)"
        );
        break;
      case 'about':
        newHistory.push(RESUME.profile);
        break;
      case 'skills':
        RESUME.skills.forEach(cat => {
            newHistory.push(`[${cat.category}]: ${cat.items.join(', ')}`);
        });
        break;
      case 'projects':
        RESUME.projects.forEach(p => {
            newHistory.push(`- ${p.title} (${p.tech})`);
        });
        break;
      case 'contact':
        newHistory.push(`Email: ${RESUME.contact.email}`);
        newHistory.push(`Phone: ${RESUME.contact.phone}`);
        newHistory.push(`Location: ${RESUME.contact.location}`);
        break;
      case 'cls':
      case 'clear':
        setHistory([]);
        return;
      case 'exit':
        newHistory.push("Session terminated.");
        break;
      case '':
        break;
      default:
        newHistory.push(`'${cmd}' is not recognized as an internal or external command.`);
    }

    newHistory.push(""); // Empty line
    setHistory(newHistory);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div 
        className="h-full bg-[#0c0c0c] text-gray-200 font-mono text-sm p-2 overflow-auto" 
        onClick={() => inputRef.current?.focus()}
    >
      {history.map((line, i) => (
        <div key={i} className="whitespace-pre-wrap leading-tight mb-0.5">{line}</div>
      ))}
      <div className="flex items-center">
        <span className="mr-2">C:\Users\Prateek&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none flex-1 text-gray-200"
          autoFocus
          spellCheck={false}
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
};

export default TerminalApp;