import React, { useState } from 'react';
import { RESUME } from '../../constants';
import { Folder, Play, Code, ExternalLink, Github, Filter, Layers } from 'lucide-react';

const ProjectsApp: React.FC = () => {
  const [filter, setFilter] = useState('All');

  // Extract unique tech tags for simple filtering simulation
  const tags = ['All', 'Python', 'ML', 'OpenCV', 'React'];

  const filteredProjects = filter === 'All' 
    ? RESUME.projects 
    : RESUME.projects.filter(p => p.tech.includes(filter) || p.description.includes(filter));

  return (
    <div className="h-full bg-slate-50 dark:bg-[#1a1a1a] flex flex-col text-slate-900 dark:text-white">
      {/* Header / Toolbar */}
      <div className="bg-white dark:bg-[#252526] border-b border-slate-200 dark:border-[#333] px-6 py-4 flex items-center justify-between sticky top-0 z-10">
         <div className="flex items-center gap-2">
            <Layers className="text-blue-600" size={24} />
            <h1 className="text-xl font-semibold">Project Gallery</h1>
            <span className="bg-slate-100 dark:bg-[#333] px-2 py-0.5 rounded-full text-xs text-slate-500 dark:text-slate-400">
               {filteredProjects.length}
            </span>
         </div>
         
         <div className="flex items-center gap-2">
            <Filter size={16} className="text-slate-400" />
            <div className="flex bg-slate-100 dark:bg-[#333] p-1 rounded-lg">
               {tags.map(tag => (
                 <button
                   key={tag}
                   onClick={() => setFilter(tag)}
                   className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                     filter === tag 
                       ? 'bg-white dark:bg-[#444] shadow-sm text-blue-600 dark:text-blue-400' 
                       : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                   }`}
                 >
                   {tag}
                 </button>
               ))}
            </div>
         </div>
      </div>

      {/* Grid Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx} 
              className="group bg-white dark:bg-[#252526] rounded-xl overflow-hidden border border-slate-200 dark:border-[#333] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Visual Header */}
              <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#333] dark:to-[#222] relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-grid-slate-500/[0.05] dark:bg-grid-slate-400/[0.05] bg-[bottom_1px_center]" />
                 
                 {/* Abstract representation of project */}
                 <div className="relative z-10 p-4 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                    <Code size={32} className="text-blue-500" />
                 </div>

                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                    <button className="bg-white text-slate-900 p-2 rounded-full hover:scale-110 transition-transform" title="View Source">
                       <Github size={18} />
                    </button>
                    <button className="bg-blue-600 text-white p-2 rounded-full hover:scale-110 transition-transform" title="Live Demo">
                       <ExternalLink size={18} />
                    </button>
                 </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-auto">
                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-1">{project.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-100 dark:border-[#333]">
                    {project.tech.split(',').map((tech, i) => (
                        <span key={i} className="text-[10px] font-medium px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded-md">
                            {tech.trim()}
                        </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer info */}
        <div className="mt-12 text-center text-slate-400 text-sm pb-4">
           Showing {filteredProjects.length} projects from portfolio history
        </div>
      </div>
    </div>
  );
};

export default ProjectsApp;