import React from 'react';
import { RESUME, AVATAR_URL } from '../../constants';
import { User, MapPin, Mail, Phone, Github, Linkedin, Briefcase, Award, Cpu } from 'lucide-react';

const AboutApp: React.FC = () => {
  return (
    <div className="h-full bg-white text-gray-800 p-6 md:p-10 overflow-auto">
       <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
             
             {/* Left Sidebar */}
             <div className="w-full md:w-1/3 flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm sticky top-0">
                <div className="w-32 h-32 p-1 bg-white rounded-full mb-4 shadow-md">
                   <img src={AVATAR_URL} alt="Prateek" className="w-full h-full rounded-full object-cover" />
                </div>
                <h2 className="text-2xl font-bold mb-1 text-slate-800">Prateek Mishra</h2>
                <p className="text-sm font-medium text-blue-600 mb-6 bg-blue-50 px-3 py-1 rounded-full">Python & ML Developer</p>
                
                <div className="w-full space-y-2 text-sm text-left mb-6">
                   <a href={`mailto:${RESUME.contact.email}`} className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors p-3 bg-white rounded-lg border border-slate-100 hover:shadow-sm">
                     <div className="bg-blue-100 p-1.5 rounded text-blue-600"><Mail size={14} /></div>
                     <span className="truncate font-medium">{RESUME.contact.email}</span>
                   </a>
                   <div className="flex items-center gap-3 text-slate-600 p-3 bg-white rounded-lg border border-slate-100">
                     <div className="bg-green-100 p-1.5 rounded text-green-600"><Phone size={14} /></div>
                     <span className="font-medium">{RESUME.contact.phone}</span>
                   </div>
                   <div className="flex items-center gap-3 text-slate-600 p-3 bg-white rounded-lg border border-slate-100">
                     <div className="bg-red-100 p-1.5 rounded text-red-600"><MapPin size={14} /></div>
                     <span className="font-medium">{RESUME.contact.location}</span>
                   </div>
                </div>

                <div className="flex gap-4 justify-center w-full">
                   {RESUME.contact.social.map(s => (
                     <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 hover:scale-105 hover:shadow-md transition-all text-slate-700 hover:text-blue-600">
                        {s.label === 'Github' ? <Github size={20} /> : <Linkedin size={20} />}
                     </a>
                   ))}
                </div>
             </div>

             {/* Main Content */}
             <div className="w-full md:w-2/3">
                <div className="mb-8">
                   <h1 className="text-4xl font-bold text-slate-900 mb-6">Hello, I'm Prateek.</h1>
                   <p className="text-lg leading-relaxed text-slate-600">
                     {RESUME.profile}
                   </p>
                </div>
                
                <h3 className="font-bold text-slate-900 mb-5 flex items-center gap-2 text-lg">
                   <User size={22} className="text-blue-500" />
                   Quick Highlights
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 transition-transform hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Briefcase size={20} /></div>
                        <span className="text-sm text-blue-800 font-bold uppercase tracking-wider">Experience</span>
                      </div>
                      <span className="block text-2xl font-bold text-slate-800">1.5+ Years</span>
                      <span className="text-sm text-slate-500">Developer & Analyst</span>
                   </div>

                   <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100 transition-transform hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><Award size={20} /></div>
                        <span className="text-sm text-purple-800 font-bold uppercase tracking-wider">Projects</span>
                      </div>
                      <span className="block text-2xl font-bold text-slate-800">4+ Major</span>
                      <span className="text-sm text-slate-500">ML & Computer Vision</span>
                   </div>

                   <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100 transition-transform hover:-translate-y-1 sm:col-span-2">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-orange-100 text-orange-600 rounded-lg"><Cpu size={20} /></div>
                        <span className="text-sm text-orange-800 font-bold uppercase tracking-wider">Core Focus</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {['Generative AI', 'Python', 'Machine Learning', 'Data Structure'].map(tech => (
                            <span key={tech} className="bg-white px-3 py-1 rounded-md text-sm font-medium text-slate-700 shadow-sm">{tech}</span>
                        ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};
export default AboutApp;