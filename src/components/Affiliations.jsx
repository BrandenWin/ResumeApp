import React from 'react';
import { Calendar, Award, Target, Users } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import towsonTigerImg from '../assets/towson-tiger.png';

export default function Affiliations() {
  return (
    <section id="affiliations" className="py-20 relative bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-sm font-semibold mb-1">
            <img src={towsonTigerImg} alt="Towson Tiger" className="w-5 h-5 object-contain" />
            <span>Athletic & Collegiate Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Memberships & Affiliations
          </h2>
        </div>

        {resumeData.memberships.map((item, idx) => (
          <div
            key={idx}
            className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 via-slate-800/50 to-slate-900/80 border border-amber-500/30 shadow-xl overflow-hidden group hover:border-amber-500/50 transition-all"
          >
            {/* Ambient decorative official Towson tiger badge */}
            <div className="absolute -top-6 -right-6 p-6 opacity-15 pointer-events-none group-hover:opacity-25 transition-opacity">
              <img 
                src={towsonTigerImg} 
                alt="Towson Tiger Watermark" 
                className="w-72 h-72 object-contain select-none filter contrast-125" 
              />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-yellow-500/10 to-slate-800 border border-amber-500/40 flex items-center justify-center p-2 shrink-0 shadow-lg shadow-amber-500/5 group-hover:scale-105 group-hover:border-amber-400 transition-all">
                  <img 
                    src={towsonTigerImg} 
                    alt="Towson Tigers Logo" 
                    className="w-full h-full object-contain drop-shadow"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-amber-400 font-semibold text-sm flex items-center gap-1.5">
                    <span>{item.organization}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-300 text-xs font-mono">Division I</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 self-start">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{item.period}</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl mb-6 relative z-10">
              {item.description}
            </p>

            {/* Value cards derived from athletic commitment */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-slate-700/50 relative z-10">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm mb-1">
                  <Target className="w-4 h-4 text-amber-400" />
                  <span>High-Pressure Focus</span>
                </div>
                <p className="text-xs text-slate-400">
                  Precision execution and mental resilience under strict tournament conditions.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm mb-1">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Rigorous Time Management</span>
                </div>
                <p className="text-xs text-slate-400">
                  Successfully balancing 20+ hours of weekly Division I athletic commitments with Computer Science academics.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm mb-1">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span>Team Collaboration</span>
                </div>
                <p className="text-xs text-slate-400">
                  Shared accountability, mentorship, and high standards of mutual excellence.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
