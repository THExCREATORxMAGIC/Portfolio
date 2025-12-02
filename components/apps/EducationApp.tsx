import React from 'react';
import { RESUME } from '../../constants';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Download, Scroll } from 'lucide-react';

const EducationApp: React.FC = () => {
  return (
    <div className="h-full bg-slate-50 dark:bg-[#1a1a1a] text-slate-900 dark:text-slate-100 overflow-y-auto">
       {/* Hero Section */}
       <div className="bg-blue-600 dark:bg-blue-900 h-48 relative overflow-hidden flex items-end p-8">
           <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
           <div className="bg-gradient-to-t from-blue-600 dark:from-blue-900 to-transparent absolute inset-0"></div>
           
           <div className="relative z-10 flex items-end gap-6 w-full max-w-5xl mx-auto">
               <div className="w-24 h-24 bg-white dark:bg-[#252526] rounded-xl shadow-lg flex items-center justify-center p-2 mb-[-20px]">
                   <GraduationCap size={48} className="text-blue-600 dark:text-blue-400" />
               </div>
               <div className="mb-2 text-white">
                   <h1 className="text-3xl font-bold">{RESUME.education.university}</h1>
                   <p className="opacity-90 flex items-center gap-2 text-sm"><MapPin size={14}/> {RESUME.education.location}</p>
               </div>
           </div>
       </div>

       {/* Main Content */}
       <div className="max-w-5xl mx-auto px-8 pt-12 pb-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
           
           {/* Left Col: Details */}
           <div className="lg:col-span-2 space-y-6">
               <div className="bg-white dark:bg-[#252526] rounded-xl shadow-sm border border-slate-200 dark:border-[#333] p-6">
                   <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                       <Award className="text-blue-500" /> Degree Information
                   </h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                           <label className="text-xs font-semibold text-slate-400 uppercase">Degree Program</label>
                           <p className="font-semibold text-lg">{RESUME.education.degree}</p>
                       </div>
                       <div>
                           <label className="text-xs font-semibold text-slate-400 uppercase">Period</label>
                           <p className="font-semibold text-lg flex items-center gap-2">
                               <Calendar size={16} className="text-slate-400"/> {RESUME.education.period}
                           </p>
                       </div>
                   </div>
                   
                   <div className="mt-6 pt-6 border-t border-slate-100 dark:border-[#333]">
                       <label className="text-xs font-semibold text-slate-400 uppercase mb-2 block">Specialization & Details</label>
                       <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                           {RESUME.education.details}
                       </p>
                   </div>
               </div>

               <div className="bg-white dark:bg-[#252526] rounded-xl shadow-sm border border-slate-200 dark:border-[#333] p-6">
                   <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                       <BookOpen className="text-purple-500" /> Core Coursework
                   </h2>
                   <div className="flex flex-wrap gap-2">
                       {['Data Structures', 'Algorithms', 'Machine Learning', 'Operating Systems', 'DBMS', 'Computer Networks', 'IoT Systems', 'Mathematics'].map((course) => (
                           <span key={course} className="px-3 py-1.5 bg-slate-100 dark:bg-[#333] rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200">
                               {course}
                           </span>
                       ))}
                   </div>
               </div>
           </div>

           {/* Right Col: Stats & Actions */}
           <div className="space-y-6">
                {/* Status Card */}
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-20"><Scroll size={64}/></div>
                    <h3 className="text-lg font-medium opacity-90 mb-1">Status</h3>
                    <p className="text-3xl font-bold">Graduated</p>
                    <p className="text-sm opacity-80 mt-2">Class of 2023</p>
                </div>

                {/* Simulated Transcript Download */}
                <div className="bg-white dark:bg-[#252526] rounded-xl shadow-sm border border-slate-200 dark:border-[#333] p-6 text-center">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Download size={24} />
                    </div>
                    <h3 className="font-bold mb-1">Digital Transcript</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Download authorized copy of academic records.</p>
                    <button onClick={() => alert("Downloading PDF...")} className="w-full py-2 bg-slate-900 dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                        Download PDF
                    </button>
                </div>
           </div>

       </div>
    </div>
  );
};
export default EducationApp;