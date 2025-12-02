import React, { useState } from 'react';
import { RESUME } from '../../constants';
import { Code2, Layers, Wrench, Sparkles, Search, Star, Cpu, Database, Globe, Terminal } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Technical Skills": Terminal,
  "Frameworks": Layers,
  "Tools": Wrench,
  "Soft Skills": Sparkles
};

const getSkillIcon = (category: string, skill: string) => {
  if (category === "Technical Skills") {
    if (['Python', 'Java', 'Go Lang', 'C Programming', 'PHP'].includes(skill)) return Code2;
    if (['SQL', 'NoSQL', 'PostgreSQL'].includes(skill)) return Database;
    if (['HTML5', 'CSS3', 'JavaScript', 'React'].includes(skill)) return Globe;
    return Cpu;
  }
  return CATEGORY_ICONS[category] || Star;
};

const SkillsApp: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(RESUME.skills[0].category);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = RESUME.skills.map(cat => ({
    ...cat,
    items: cat.items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
  })).filter(cat => cat.items.length > 0);

  // If searching, show all matching categories, otherwise just the active one
  const displayCategories = searchTerm ? filteredSkills : filteredSkills.filter(c => c.category === activeCategory);

  return (
    <div className="flex flex-col md:flex-row h-full bg-slate-50 dark:bg-[#1e1e1e] text-slate-900 dark:text-slate-100 font-sans">
      
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white dark:bg-[#252526] border-b md:border-b-0 md:border-r border-slate-200 dark:border-[#333] flex flex-col">
        <div className="p-4 border-b border-slate-100 dark:border-[#333]">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search skills..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-100 dark:bg-[#3c3c3c] border-none rounded-md pl-9 py-2 text-sm focus:ring-2 ring-blue-500 outline-none transition-all"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {RESUME.skills.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.category] || Star;
            return (
              <button
                key={cat.category}
                onClick={() => { setActiveCategory(cat.category); setSearchTerm(''); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all
                  ${activeCategory === cat.category && !searchTerm 
                    ? 'bg-blue-50 text-blue-600 dark:bg-[#37373d] dark:text-white' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-[#2a2d2e]'
                  }`}
              >
                <Icon size={18} />
                {cat.category}
                <span className="ml-auto text-xs bg-slate-100 dark:bg-[#333] px-2 py-0.5 rounded-full text-slate-500">
                  {cat.items.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50/50 dark:bg-[#1e1e1e]">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {displayCategories.map((cat) => (
            <div key={cat.category} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3 mb-4 border-b border-slate-200 dark:border-[#333] pb-2">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">{cat.category}</h2>
                <span className="text-sm text-slate-400 font-normal">({cat.items.length})</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat.items.map((skill, idx) => {
                  const SkillIcon = getSkillIcon(cat.category, skill);
                  return (
                    <div 
                      key={idx} 
                      className="group bg-white dark:bg-[#252526] p-4 rounded-xl shadow-sm border border-slate-200 dark:border-[#333] hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all cursor-default flex flex-col items-start gap-3 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                         <Star size={12} className="text-yellow-400 fill-yellow-400" />
                      </div>
                      
                      <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-[#333] text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <SkillIcon size={24} />
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-sm">{skill}</h3>
                        <p className="text-xs text-slate-400 mt-1">Proficient</p>
                      </div>

                      {/* Simulated Progress Bar */}
                      <div className="w-full h-1 bg-slate-100 dark:bg-[#333] rounded-full mt-2 overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full" 
                          style={{ width: `${Math.floor(Math.random() * (100 - 70) + 70)}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {displayCategories.length === 0 && (
             <div className="text-center py-20 text-slate-400">
                <Search size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg">No skills found for "{searchTerm}"</p>
             </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SkillsApp;