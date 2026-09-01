import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-brand-400 font-mono text-sm font-semibold mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Coursework
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Degree Cards */}
          <div className="lg:col-span-7 space-y-6">
            {resumeData.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-brand-400 font-medium text-sm">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 self-start">
                    <Calendar className="w-3.5 h-3.5 text-brand-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{edu.location}</span>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-700/50 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{edu.graduated}</span>
                  </div>
                  {edu.notes && (
                    <div className="flex items-center gap-2 text-amber-300 font-medium">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span>{edu.notes}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Related Coursework Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-white font-bold text-lg">
                <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span>Related Computer Science Coursework</span>
              </div>
              <p className="text-xs text-slate-400 mb-5">
                Core foundational studies across algorithms, cybersecurity, system architecture, and programming paradigms.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {resumeData.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700/70 text-xs sm:text-sm font-medium text-slate-200 hover:border-brand-500/50 transition-all flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 font-mono">
              💡 Theoretical foundation paired with hands-on enterprise software implementation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
