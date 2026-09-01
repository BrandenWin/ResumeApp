import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ArrowUpRight, 
  MapPin, 
  Terminal, 
  Printer
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export default function Hero({ onPrintClick }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(resumeData.personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="about" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-sm shadow-emerald-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <ShieldCheck className="w-4 h-4" />
            <span>{resumeData.personalInfo.clearanceBadge}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-300 text-xs font-medium">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{resumeData.personalInfo.location}</span>
          </div>
        </div>

        {/* Main Heading & Headline */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-5">
            <div className="space-y-2">
              <p className="text-brand-400 font-mono text-sm tracking-wider uppercase font-semibold">
                Hi, my name is
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
                {resumeData.personalInfo.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 bg-clip-text text-transparent">
                Software Developer & Computer Scientist
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {resumeData.personalInfo.summary}
            </p>

            {/* Quick Contact & Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Email Button */}
              <div className="inline-flex rounded-lg shadow-sm">
                <a
                  href={`mailto:${resumeData.personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-l-lg bg-brand-600 hover:bg-brand-500 text-white font-medium text-sm transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>{resumeData.personalInfo.email}</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center px-3 py-2.5 rounded-r-lg bg-brand-700 hover:bg-brand-800 text-white border-l border-brand-500 text-sm transition-all"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Button */}
              <div className="inline-flex rounded-lg shadow-sm">
                <a
                  href={`tel:${resumeData.personalInfo.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-l-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-r-0 border-slate-700 text-sm font-medium transition-all"
                >
                  <Phone className="w-4 h-4 text-brand-400" />
                  <span>{resumeData.personalInfo.phone}</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center px-2.5 py-2.5 rounded-r-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-sm transition-all"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Link */}
              <a
                href={resumeData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm transition-all group"
              >
                <LinkedInIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Print / PDF Button */}
              <button
                onClick={onPrintClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-medium text-sm transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>Print Resume</span>
              </button>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
            {resumeData.highlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm hover:border-brand-500/40 transition-all hover:bg-slate-800/80 group"
              >
                <div className="text-xs text-slate-400 font-mono mb-1">{item.label}</div>
                <div className="text-sm font-bold text-slate-100 group-hover:text-brand-400 transition-colors">
                  {item.value}
                </div>
              </div>
            ))}

            {/* Quick Terminal-style Callout */}
            <div className="col-span-2 p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5 shadow-inner">
              <div className="flex items-center gap-1.5 text-slate-500 pb-1 border-b border-slate-800/80">
                <Terminal className="w-3.5 h-3.5 text-brand-400" />
                <span>developer@branden-nguyen:~$</span>
              </div>
              <p className="text-slate-300">
                <span className="text-brand-400">const</span> stack = [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"AWS"</span>, <span className="text-emerald-300">"Docker"</span>, <span className="text-emerald-300">"SQL"</span>];
              </p>
              <p className="text-slate-400 text-[11px]">
                // Ready for Full-Stack, Backend & Cloud Engineering roles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
