import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  CheckCircle2, 
  Building2, 
  Filter, 
  Sparkles
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Experience() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Collect all unique skills across experiences
  const allSkills = Array.from(
    new Set(resumeData.experiences.flatMap((exp) => exp.skills))
  );

  const filteredExperiences = selectedSkill
    ? resumeData.experiences.filter((exp) => exp.skills.includes(selectedSkill))
    : resumeData.experiences;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-10 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-brand-400 font-mono text-sm font-semibold mb-1">
            <Briefcase className="w-4 h-4" />
            <span>Career Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
        </div>

        {/* Skill Filter Bar */}
        <div className="mb-8 p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
            <Filter className="w-3.5 h-3.5 text-brand-400" />
            <span>Filter roles by technology or domain:</span>
            {selectedSkill && (
              <button
                onClick={() => setSelectedSkill(null)}
                className="ml-auto text-brand-400 hover:text-brand-300 underline text-xs"
              >
                Reset Filter
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedSkill(null)}
              className={`text-xs px-3 py-1.5 rounded-lg transition-all font-medium ${
                selectedSkill === null
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All Experiences ({resumeData.experiences.length})
            </button>
            {allSkills.slice(0, 10).map((skill) => (
              <button
                key={skill}
                onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
                className={`text-xs px-3 py-1.5 rounded-lg transition-all font-medium ${
                  selectedSkill === skill
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {filteredExperiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-all shadow-lg hover:shadow-brand-500/5 group"
            >
              {/* Top Row: Role, Company, Period */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-700/60 text-slate-300 border border-slate-600/50">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300 font-medium">
                    <div className="flex items-center gap-1.5 text-brand-400 font-semibold">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 shrink-0 self-start">
                  <Calendar className="w-3.5 h-3.5 text-brand-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-6">
                {exp.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack tags */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-700/50">
                <span className="text-xs font-mono text-slate-400 mr-1">Skills & Tools:</span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    onClick={() => setSelectedSkill(skill)}
                    className={`text-xs font-medium px-2.5 py-1 rounded-md cursor-pointer transition-colors ${
                      selectedSkill === skill
                        ? 'bg-brand-500 text-white'
                        : 'bg-slate-900/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
