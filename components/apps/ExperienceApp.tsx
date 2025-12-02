import React from 'react';
import { RESUME } from '../../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceApp: React.FC = () => {
  return (
    <div className="h-full bg-slate-50 p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3 pb-4 border-b border-slate-200">
        <Briefcase className="text-blue-600" size={28} /> 
        Professional Experience
      </h2>
      <div className="max-w-4xl mx-auto space-y-8 relative ml-4 md:ml-8">
        {/* Timeline Line */}
        <div className="absolute left-[-16px] md:left-[-21px] top-2 bottom-4 w-1 bg-slate-200 rounded-full"></div>

        {RESUME.experience.map((exp, index) => (
          <div key={index} className="relative bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            {/* Timeline Dot */}
            <div className="absolute left-[-24px] md:left-[-29px] top-6 w-4 h-4 md:w-5 md:h-5 bg-blue-600 rounded-full border-4 border-slate-50 shadow-sm"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                <div className="text-lg font-semibold text-blue-600 mt-1">{exp.company}</div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2 mt-2 md:mt-0 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded">
                    <Calendar size={14}/> {exp.period}
                </div>
                <div className="flex items-center gap-1.5 px-2">
                    <MapPin size={14}/> {exp.location}
                </div>
              </div>
            </div>
            
            <ul className="space-y-3">
              {exp.points.map((point, idx) => (
                <li key={idx} className="flex gap-3 text-slate-600 leading-relaxed">
                   <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-slate-400 flex-shrink-0"></span>
                   <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExperienceApp;