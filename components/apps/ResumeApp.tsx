import React from 'react';
import { RESUME } from '../../constants';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

const ResumeApp: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white min-h-full shadow-sm text-sm md:text-base">
      <div className="border-b-2 border-blue-600 pb-4 mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-blue-800 uppercase tracking-wide">Prateek Mishra</h1>
          <p className="text-gray-600 font-medium mt-1">Python & ML Developer</p>
        </div>
        <div className="text-right text-xs md:text-sm text-gray-600 space-y-1">
          <div className="flex items-center justify-end gap-2">
            <span>{RESUME.contact.email}</span>
            <Mail size={14} />
          </div>
          <div className="flex items-center justify-end gap-2">
            <span>{RESUME.contact.phone}</span>
            <Phone size={14} />
          </div>
          <div className="flex items-center justify-end gap-2">
            <span>{RESUME.contact.location}</span>
            <MapPin size={14} />
          </div>
          <div className="flex gap-3 justify-end mt-2">
             {RESUME.contact.social.map((s) => (
               <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-600 hover:underline">
                 {s.label === 'Github' ? <Github size={14} /> : <Linkedin size={14} />}
                 {s.label}
               </a>
             ))}
          </div>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-blue-800 font-bold uppercase border-b border-gray-300 mb-3 pb-1">Profile</h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          {RESUME.profile}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-blue-800 font-bold uppercase border-b border-gray-300 mb-3 pb-1">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RESUME.skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="font-semibold text-gray-800 mb-1">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-blue-800 font-bold uppercase border-b border-gray-300 mb-3 pb-1">Professional Experience</h2>
        <div className="space-y-4">
          {RESUME.experience.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-gray-800">{exp.company}</h3>
                <span className="text-blue-600 text-sm font-semibold">{exp.period}</span>
              </div>
              <div className="flex justify-between items-center mb-2 text-sm">
                <span className="italic text-gray-700">{exp.role}</span>
                <span className="text-gray-500">{exp.location}</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-1">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="pl-1">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-blue-800 font-bold uppercase border-b border-gray-300 mb-3 pb-1">Projects</h2>
        <div className="space-y-4">
          {RESUME.projects.map((proj, index) => (
            <div key={index}>
               <h3 className="font-bold text-gray-800">{proj.title}</h3>
               <p className="text-xs text-blue-600 mb-1 italic">{proj.tech}</p>
               <p className="text-gray-700">{proj.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-blue-800 font-bold uppercase border-b border-gray-300 mb-3 pb-1">Education</h2>
        <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-gray-800">{RESUME.education.degree}, {RESUME.education.university}</h3>
            <span className="text-blue-600 text-sm font-semibold">{RESUME.education.period}</span>
        </div>
        <div className="text-sm text-gray-500 mb-1">{RESUME.education.location}</div>
        <p className="text-gray-700">{RESUME.education.details}</p>
      </section>
      
      <div className="mt-8 pt-4 border-t border-gray-200 text-center">
        <button 
          onClick={() => alert("This is a simulated download. In a real app, this would download a PDF.")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md inline-flex items-center gap-2 transition-colors"
        >
          <Download size={16} /> Download PDF
        </button>
      </div>
    </div>
  );
};

export default ResumeApp;
