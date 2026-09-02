import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Cloud, 
  Database, 
  Shield, 
  Search, 
  Layers
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      title: "Programming Languages",
      icon: Terminal,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      borderHover: "hover:border-amber-400/50",
      items: resumeData.skillCategories.languages,
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
      borderHover: "hover:border-cyan-400/50",
      items: resumeData.skillCategories.frameworks,
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      borderHover: "hover:border-blue-400/50",
      items: resumeData.skillCategories.devopsCloud,
    },
    {
      title: "Databases & Management Tools",
      icon: Database,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      borderHover: "hover:border-emerald-400/50",
      items: resumeData.skillCategories.databasesTools,
    },
    {
      title: "Security & Networking",
      icon: Shield,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      borderHover: "hover:border-purple-400/50",
      items: resumeData.skillCategories.securityNetworking,
    },
  ];

  return (
    <section id="skills" className="py-20 relative bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2 text-brand-400 font-mono text-sm font-semibold mb-1">
              <Code2 className="w-4 h-4" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Technologies
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills (e.g. Python, AWS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const filteredItems = cat.items.filter((skill) =>
              skill.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && filteredItems.length === 0) return null;

            const Icon = cat.icon;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl ${cat.bg} ${cat.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white text-base sm:text-lg">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {filteredItems.map((skill, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 text-xs sm:text-sm font-medium text-slate-200 hover:border-brand-500 hover:text-white transition-all shadow-inner"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>{filteredItems.length} skills</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
