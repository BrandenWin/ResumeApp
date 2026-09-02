import React from 'react';
import { Mail, ShieldCheck, ArrowUp, FileText } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export default function ContactFooter({ onPrintClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-20 pb-12 border-t border-slate-800 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-900/40 via-slate-900 to-slate-900 border border-brand-500/20 text-center mb-16 overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>TS/SCI Cleared & Open to Opportunities</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let's Build Something Impactful
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Interested in collaborating on software development, cloud modernization, data engineering, or mission-critical defense technology? Reach out directly!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`mailto:${resumeData.personalInfo.email}`}
                className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-lg shadow-brand-600/30 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email ({resumeData.personalInfo.email})</span>
              </a>
              <button
                onClick={onPrintClick}
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-brand-400" />
                <span>View Full PDF Format</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-800/80 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-200">{resumeData.personalInfo.name}</span>
            <span>•</span>
            <span>{resumeData.personalInfo.title}</span>
            <span>•</span>
            <span className="text-emerald-400 font-mono">TS/SCI</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${resumeData.personalInfo.email}`}
              className="hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={resumeData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
